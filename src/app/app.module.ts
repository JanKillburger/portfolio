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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SayHiComponent } from './say-hi/say-hi.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleSectionComponent,
    AboutMeComponent,
    AnimatedArrowComponent,
    MySkillsComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    SayHiComponent,
    FooterComponent,
    ImprintComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
