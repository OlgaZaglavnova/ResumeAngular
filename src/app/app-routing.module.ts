import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EducationComponent } from './components/education/education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { ScillsComponent } from './components/scills/scills.component';
import { SertificatesComponent } from './components/sertificates/sertificates.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SertificateComponent } from './components/sertificates/sertificate/sertificate.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutmeComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'qualification',
    component: QualificationComponent
  },
  {
    path: 'scills',
    component: ScillsComponent
  },
  {
    path: 'sertificates',
    component: SertificatesComponent
  },
  {
    path: 'sertificates/:id',
    component: SertificateComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
