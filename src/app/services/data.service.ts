import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class DataService {
    currentLang = 'ru';
    currentLang$ = new Subject();
    dataRu: any;
    dataEn: any;
    dataRu$: Observable<any>;
    dataEn$: Observable<any>;
    dataRuFile = 'assets/myData.json';
    dataEnFile = 'assets/myDataEn.json';
    printVersionFileRu = 'assets/printVersion/PrintVersion_OlgaZaglavnova_Resume.pdf';
    printVersionFileEn = 'assets/printVersion/PrintVersion_OlgaZaglavnova_Resume-En.pdf';
    navBarPage = '';
    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
        ){}

    initData(): void {
        this.currentLang$.next(this.currentLang);
        this.dataRu$ = this.http.get(this.dataRuFile);
        this.dataEn$ = this.http.get(this.dataEnFile);
    }

    getNavBarTitle(selectedPage: string): string{
        switch (selectedPage) {
            case 'Обо мне' :
                return this.currentLang === 'ru' ? 'Обо мне' : 'About me';
                break;
            case 'About me' :
                return this.currentLang === 'ru' ? 'Обо мне' : 'About me';
                break;
            case 'Образование':
                return this.currentLang === 'ru' ? 'Образование' : 'Education';
                break;
            case 'Education':
                return this.currentLang === 'ru' ? 'Образование' : 'Education';
                break;
            case 'Опыт работы':
                return this.currentLang === 'ru' ? 'Опыт работы' : 'Work experience';
                break;
            case 'Work experience':
                return this.currentLang === 'ru' ? 'Опыт работы' : 'Work experience';
                break;
            case 'Навыки':
                return this.currentLang === 'ru' ? 'Навыки' : 'Scills';
                break;
            case 'Scills':
                return this.currentLang === 'ru' ? 'Навыки' : 'Scills';
                break;
            case 'Сертификаты':
                return this.currentLang === 'ru' ? 'Сертификаты' : 'Sertificates';
                break;
            case 'Sertificates':
                return this.currentLang === 'ru' ? 'Сертификаты' : 'Sertificates';
                break;
            case 'Портфолио':
                return this.currentLang === 'ru' ? 'Портфолио' : 'Portfolio';
                break;
            case 'Portfolio':
                return this.currentLang === 'ru' ? 'Портфолио' : 'Portfolio';
                break;
            case 'Контакты':
                return this.currentLang === 'ru' ? 'Контакты' : 'Contacts';
                break;
            case 'Contacts':
                return this.currentLang === 'ru' ? 'Контакты' : 'Contacts';
                break;
            default:
                return selectedPage;
                break;

       }
    }
}
