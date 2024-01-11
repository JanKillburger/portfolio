import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AnimatedArrowComponent } from './animated-arrow/animated-arrow.component';
import { CommonModule } from '@angular/common';
import { MySkillsComponent } from './my-skills/my-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleSectionComponent,
    AboutMeComponent,
    AnimatedArrowComponent,
    MySkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
