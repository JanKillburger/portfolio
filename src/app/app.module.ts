import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AnimatedArrowComponent } from './animated-arrow/animated-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleSectionComponent,
    AboutMeComponent,
    AnimatedArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
