import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Data } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

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
export class HeaderComponent implements OnInit {
  @Input() data: Data;

  langs = [{value: 'ru', viewValue: 'Русский'}, {value: 'en', viewValue: 'English'}];
  selectedLang = this.langs[0].value;

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {}

  changeLang(): void {
    this.dataService.currentLang = this.selectedLang;
    this.dataService.updateData();
  }

}
