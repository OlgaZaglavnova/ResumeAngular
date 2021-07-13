import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { AboutMe, Language } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  aboutMe: AboutMe;
  car = '';
  languages: Language;

  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    combineLatest([this.dataService.getData()])
      .pipe(take(1))
      .subscribe(
        ([data]) => {
          this.aboutMe = data.aboutMe;
          this.car = data.car;
          this.languages = data.languages;
        }
      );
  }
}
