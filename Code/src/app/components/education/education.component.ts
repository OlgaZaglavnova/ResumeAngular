import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  mainEducation;
  additionalEducation;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.mainEducation = this.dataService.getData().mainEducation;
    this.additionalEducation = this.dataService.getData().additionalEducation;
  }

}
