import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { NpcComponent } from './charsheet/pages/npc/npc.component';
import { PcComponent } from './charsheet/pages/pc/pc.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: "bio", component: BioComponent},
  {path: "charsheet", component: CharsheetComponent, children : [
    {
      path: "pc",
      component: PcComponent
    },
    {
      path: "npc",
      component: NpcComponent
    },
  ]},
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
