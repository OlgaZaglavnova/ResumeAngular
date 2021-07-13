import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sertificates',
  templateUrl: './sertificates.component.html',
  styleUrls: ['./sertificates.component.scss']
})
export class SertificatesComponent implements OnInit {
  sertificates = [];
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    combineLatest([this.dataService.getData()])
      .pipe(take(1))
      .subscribe(([data]) => {
        this.sertificates = data.sertificates;
        if (this.sertificates.length === 0){
          this.router.navigate(['/']);
        }
      });
  }

}
