import { BandService } from './services/band.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { ContactComponent } from './componets/contact/contact.component';
import { AddFormComponent } from './componets/add-form/add-form.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { BandComponent } from './componets/band/band.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AddFormComponent,
    NavBarComponent,
    BandComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
