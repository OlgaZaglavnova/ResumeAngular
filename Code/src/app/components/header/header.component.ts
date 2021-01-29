import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

}
