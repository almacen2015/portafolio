import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {
    path: 'Home',
    component: ContainerComponent,
  },
  {
    path: 'Experience',
    component: ExperienceComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'Certifications',
    component: CertificationComponent,
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
