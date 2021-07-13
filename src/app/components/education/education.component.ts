import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { AdditionalEducation, MainEducation } from 'src/app/models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  mainEducation: MainEducation;
  additionalEducation: AdditionalEducation[];
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    combineLatest([this.dataService.getData()])
      .pipe(take(1))
      .subscribe(([data]) => {
        this.mainEducation = data.mainEducation;
        this.additionalEducation = data.additionalEducation;
        if (!this.mainEducation && !this.additionalEducation){
          this.router.navigate(['/']);
        }
    });
  }
}
