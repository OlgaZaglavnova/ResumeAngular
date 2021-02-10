import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  mainEducation;
  additionalEducation;
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.mainEducation = this.dataService.getData().mainEducation;
    this.additionalEducation = this.dataService.getData().additionalEducation;
    if(!this.mainEducation && !this.additionalEducation){
      this.router.navigate(['/']);
    }
  }

}
