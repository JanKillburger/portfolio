import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [MenuComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  title = 'portfolio-website';

  constructor(viewport: ViewportScroller) {
    viewport.setOffset([0, 92.8])
  }
}
