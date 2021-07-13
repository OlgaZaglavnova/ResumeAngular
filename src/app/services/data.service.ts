import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data.model';
import { take } from 'rxjs/operators';
// import * as myData from '../../assets/myData.json';
// import * as myDataEn from '../../assets/myDataEn.json';

@Injectable()
export class DataService {
    currentLang = 'ru';
    data: any;
    printVersionFile = '../../assets//printVersion/PrintVersion_OlgaZaglavnova_Resume.pdf';
    dataRuFile = '../../assets/myData.json';
    dataEnFile = '../../assets/myDataEn.json';
    navBarPage = '';
    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
    ) { }

    getData(): Observable<any> {
        const path = this.currentLang === 'ru' ? this.dataRuFile : this.dataEnFile;
        return this.http.get(path);
    }

    updateData(): void {
        this.printVersionFile = this.currentLang === 'ru' ? '../../../assets/printVersion/PrintVersion_OlgaZaglavnova_Resume.pdf' : '../../../assets/printVersion/PrintVersion_OlgaZaglavnova_Resume-En.pdf';
        this.navBarPage = this.getNavBarTitle(this.navBarPage);
    }
    getNavBarTitle(selectedPage: string): string {
        switch (selectedPage) {
            case 'Обо мне':
                return this.currentLang === 'ru' ? 'Обо мне' : 'About me';
                break;
            case 'About me':
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
