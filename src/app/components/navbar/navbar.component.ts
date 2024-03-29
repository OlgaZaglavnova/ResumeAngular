import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  selectedPage = '';
  printVersionFile = '#';

  private destroyed$ = new Subject();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentLang$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(currentLang => {
        this.printVersionFile = currentLang === 'ru'
          ? this.dataService.printVersionFileRu
          : this.dataService.printVersionFileEn;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  hideNavbar(): void {
    document.getElementById('navbarNav').classList.remove('show');

  }
  selectHome(): void {
    this.selectedPage = '';
    this.hideNavbar();
  }
  selectAbout(): void {
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Обо мне' : 'About me';
    this.hideNavbar();
  }
  selectEducation(): void {
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Образование' : 'Education';
    this.hideNavbar();
  }
  selectQualification(): void{
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Опыт работы' : 'Work experience';
    this.hideNavbar();
  }
  selectScills(): void{
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Навыки' : 'Scills';
    this.hideNavbar();
  }
  selectSertificates(): void {
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Сертификаты' : 'Sertificates';
    this.hideNavbar();
  }
  selectPortfolio(): void {
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Портфолио' : 'Portfolio';
    this.hideNavbar();
  }
  selectContacts(): void {
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Контакты' : 'Contacts';
    this.hideNavbar();
  }

}
