import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Data } from './models/data.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myResume';
  data$: Observable<any>;
  data: Data;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
    this.data$
      .pipe(take(1))
      .subscribe(data => {
        this.data = data;
      });
  }
}
