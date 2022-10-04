import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ClassesComponent } from "./classes/classes.component";
import { HomeComponent } from "./home/home.component";
import { LinksComponent } from './links/links.component';
import { FaqComponent } from './faq/faq.component';
// import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "classes", component: ClassesComponent },
  { path: "faq", component: FaqComponent },
  // { path: "contact", component: ContactComponent },
  { path: "links", component: LinksComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
