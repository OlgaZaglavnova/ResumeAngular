import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedPage = '';
  
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  hideNavbar(){
    document.getElementById('navbarNav').classList.remove('show')

  }
  selectHome(){
    this.selectedPage = '';
    this.hideNavbar();
  }
  selectAbout(){
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Обо мне' : 'About me';
    // this.selectedPage = this.dataService.currentLang === 'ru' ? 'Обо мне' : 'About me';
    this.hideNavbar();
  }
  selectEducation(){
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Образование' : 'Education';
    // this.selectedPage = this.dataService.currentLang === 'ru' ? 'Образование' : 'Education';
    this.hideNavbar();
  }
  selectQualification(){
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Опыт работы' : 'Work experience';
    // this.selectedPage = this.dataService.currentLang === 'ru' ? 'Опыт работы' : 'Work experience';
    this.hideNavbar();
  }
  selectScills(){
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Навыки' : 'Scills';
    // this.selectedPage = this.dataService.currentLang === 'ru' ? 'Навыки' : 'Scills';
    this.hideNavbar();
  }
  selectSertificates(){
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Сертификаты' : 'Sertificates';
    // this.selectedPage = this.dataService.currentLang === 'ru' ? 'Сертификаты' : 'Sertificates';
    this.hideNavbar();
  }
  selectPortfolio(){
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Портфолио' : 'Portfolio';
    // this.selectedPage = this.dataService.currentLang === 'ru' ? 'Портфолио' : 'Portfolio';
    this.hideNavbar();
  }
  selectContacts(){
    this.dataService.navBarPage = this.dataService.currentLang === 'ru' ? 'Контакты' : 'Contacts';
    // this.selectedPage = this.dataService.currentLang === 'ru' ? 'Контакты' : 'Contacts';
    this.hideNavbar();
  }

}
