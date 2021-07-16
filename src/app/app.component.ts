import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { LanguagesService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myResume';
  constructor(
    private dataService: DataService,
    private languageService: LanguagesService
    ){}
  ngOnInit(): void {
    this.dataService.initData();
    this.languageService.initLanguages();
    this.dataService.currentLang$.next('ru');
  }
}
