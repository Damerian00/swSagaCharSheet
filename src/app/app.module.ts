import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BioComponent } from './bio/bio.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './charsheet/components/skills/skills.component';
import { ArmorComponent } from './charsheet/components/armor/armor.component';
import { AttacksComponent } from './charsheet/components/attacks/attacks.component';
import { OptionsComponent } from './charsheet/components/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    CharsheetComponent,
    HomeComponent,
    SkillsComponent,
    ArmorComponent,
    AttacksComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
