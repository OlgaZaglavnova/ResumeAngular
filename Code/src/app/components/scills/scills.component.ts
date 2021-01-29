import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-scills',
  templateUrl: './scills.component.html',
  styleUrls: ['./scills.component.scss']
})
export class ScillsComponent implements OnInit {
  scills;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.scills = this.dataService.getData().mainScills;
  }

}
