import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-scills',
  templateUrl: './scills.component.html',
  styleUrls: ['./scills.component.scss']
})
export class ScillsComponent implements OnInit {
  scills: string;
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    combineLatest([this.dataService.getData()])
      .pipe(take(1))
      .subscribe(([data]) => {
        this.scills = data.mainScills;
        if (!this.scills){
          this.router.navigate(['/']);
        }
      });
  }

}
