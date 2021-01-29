import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  aboutMe;
  car;
  languages;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.aboutMe = this.dataService.getData().aboutMe;
    this.car = this.dataService.getData().car;
    this.languages = this.dataService.getData().languages;
  }

}
