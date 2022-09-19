import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componets/about/about.component';
import { AddFormComponent } from './componets/add-form/add-form.component';
import { BandComponent } from './componets/band/band.component';
import { ContactComponent } from './componets/contact/contact.component';
import { HomeComponent } from './componets/home/home.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'band', component: BandComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'addform', component: AddFormComponent },
  { path: 'navBar', component: NavBarComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
