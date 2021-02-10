import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import * as myData  from '../../assets/myData.json';
import * as myDataEn  from '../../assets/myDataEn.json';
import { AboutmeComponent } from "../components/aboutme/aboutme.component";

@Injectable()
export class DataService implements OnInit{
   
    currentLang = 'ru';
    data: any;
    printVersionFile = "../../../assets/printVersion/PrintVersion_OlgaZaglavnova_Resume.pdf"
    navBarPage = '';
    constructor(
        private route: ActivatedRoute
        ){}

    ngOnInit(){
        this.updateData();
    }
    getData():any{
        
        let tmpData:any = this.currentLang === 'ru' ? myData : myDataEn;
        // console.log('MyData=', tmpData);
        return tmpData.default;
    }

    updateData(){
        this.data = this.getData();
        this.printVersionFile = this.currentLang === 'ru' ? "../../../assets/printVersion/PrintVersion_OlgaZaglavnova_Resume.pdf" : "../../../assets/printVersion/PrintVersion_OlgaZaglavnova_Resume-En.pdf"
        this.navBarPage = this.getNavBarTitle(this.navBarPage);
        // console.log('dataService data = ',this.data)
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