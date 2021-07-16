import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, withLatestFrom } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sertificate',
  templateUrl: './sertificate.component.html',
  styleUrls: ['./sertificate.component.scss']
})
export class SertificateComponent implements OnInit, OnDestroy {
  id;
  sertificate;

  private destroyed$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.route.params,
      this.dataService.currentLang$,
      this.dataService.dataRu$,
      this.dataService.dataEn$
    ])
    .pipe(
      takeUntil(this.destroyed$)
    )
    .subscribe(([params, currentLang, dataRu, dataEn]) => {
      this.id = +params.id;
      this.sertificate = currentLang === 'ru'
        ? dataRu.sertificates[this.id]
        : dataEn.sertificates[this.id];
      // console.log('Sertific  ateComponent sertificate=', this.sertificate);
    });
    this.dataService.currentLang$.next(this.translate.currentLang);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
