import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavComponent } from './nav/nav.component';
import { CertificationComponent } from './certification/certification.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    ExperienceComponent,
    ContactComponent,
    CertificationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
