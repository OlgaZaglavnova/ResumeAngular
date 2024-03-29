import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataService } from './services/data.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducationComponent } from './components/education/education.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { ScillsComponent } from './components/scills/scills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SertificatesComponent } from './components/sertificates/sertificates.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SertificateComponent } from './components/sertificates/sertificate/sertificate.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    AboutmeComponent,
    EducationComponent,
    NavbarComponent,
    FooterComponent,
    QualificationComponent,
    ScillsComponent,
    PortfolioComponent,
    SertificatesComponent,
    ContactsComponent,
    SertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
