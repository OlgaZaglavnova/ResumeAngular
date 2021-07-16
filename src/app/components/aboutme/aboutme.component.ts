import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, OnDestroy {

  data: any;
  private destroyed$ = new Subject();

  constructor(
    public dataService: DataService,
    public translate: TranslateService,
    private router: Router
    ) { }


  ngOnInit(): void {
    combineLatest([
      this.dataService.currentLang$,
      this.dataService.dataRu$,
      this.dataService.dataEn$
    ])
    .pipe(takeUntil(this.destroyed$))
    .subscribe(([currentLang, dataRu, dataEn]) => {
      this.data = currentLang === 'ru'
        ? dataRu
        : dataEn;
    });
    this.dataService.currentLang$.next(this.translate.currentLang);

  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

}
