import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'myResume';
  constructor(private dataService: DataService){}
  ngOnInit(): void {
    let data = this.dataService.getData();
    console.log('AppComponent data=', data);
  }
}
