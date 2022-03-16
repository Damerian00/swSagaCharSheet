import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "bio", component: BioComponent},
  {path: "charsheet", component: CharsheetComponent},

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
