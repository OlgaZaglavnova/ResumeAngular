import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { LanguagesService } from 'src/app/services/language.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  langs = [{value: 'ru', viewValue: 'Русский'}, {value: 'en', viewValue: 'English'}];
  selectedLang = this.langs[0].value;
  data;

  private destroyed$ = new Subject();


  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    public dataService: DataService,
    public translate: TranslateService,
    private languageService: LanguagesService
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

  changeLang(): void{
    this.dataService.currentLang$.next(this.selectedLang);
    this.languageService.setLanguage(this.selectedLang);
  }

}
