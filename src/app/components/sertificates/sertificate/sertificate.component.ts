import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { take, withLatestFrom } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sertificate',
  templateUrl: './sertificate.component.html',
  styleUrls: ['./sertificate.component.scss']
})
export class SertificateComponent implements OnInit {
  id;
  sertificate;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    combineLatest([this.dataService.getData(), this.route.params])
      .pipe(
        take(1),
      )
      .subscribe(([data, params]) => {
        this.id = +params.id;
        this.sertificate = data.sertificates[this.id];
    });
  }

}
