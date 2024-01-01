import { HtmlParser } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  bodyElement = document.querySelector('body');
  menuOpen = false;

  menuItems = [
    {
      text: "About me",
      href: "#about-me"
    },
    {
      text: "My skills",
      href: "#my-skills"
    }, {
      text: "Port&shy;folio",
      href: "#portfolio"
    }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.bodyElement?.classList.toggle('is-hidden');
  }
}
