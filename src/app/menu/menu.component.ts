
import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  bodyElement = document.querySelector('body');
  menuOpen = false;
  isShown = false;
  imgPath = "assets/img/";
  currentBurgerIcn = 'url("' + this.imgPath + 'burger-menu.png")';
  burgerMenuIcons = [
    "burger-menu.png",
    "burger-menu1.png",
    "burger-menu2.png",
    "burger-menu3.png",
    "burger-menu4.png"
  ];
  menuItems = [
    {
      text: "About me",
      href: "about-me"
    },
    {
      text: "My skills",
      href: "my-skills"
    }, {
      text: "Port&shy;folio",
      href: "portfolio"
    }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.isShown = true;
    }
    this.bodyElement?.classList.toggle('is-hidden');
    this.animateIcon(this.menuOpen);
    if (!this.menuOpen) setTimeout(() => {
      this.isShown = false;
    }, 500);
  }

  animateIcon(isOpening: boolean) {
    let interval = 100;
    let icons = this.burgerMenuIcons;
    if (!isOpening) icons = icons.reverse();
    for (let i = 1; i < icons.length; i++) {
      const icn = 'url("' + this.imgPath + icons[i] +'")';
      setTimeout(() => {
        this.currentBurgerIcn = icn;
      },(i + 1) * interval);
    }
    if (!isOpening) icons = icons.reverse();
  }
}
