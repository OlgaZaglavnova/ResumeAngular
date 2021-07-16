import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit, OnDestroy {
  data: any;
  private destroyed$ = new Subject();

  constructor(
    public dataService: DataService,
    private router: Router,
    private translate: TranslateService
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
