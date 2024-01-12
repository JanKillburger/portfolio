import { Component, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss'
})
export class PortfolioItemComponent {
  constructor(private elRef: ElementRef) {}
  @Input() index!: number;
  @Input() totalNumber!: number;
  @Input() project!: {
    title: string,
    skills: string[],
    desc: string,
    imgPath: string,
    link: string
  }
  animationIsStarted = false;
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectHost = this.elRef.nativeElement.getBoundingClientRect();

    if (boundingRectHost.top <= 200 || boundingRectHost.bottom < windowHeight) {
      setTimeout(() => {
        this.elRef.nativeElement.classList.add('is-active');
      }, 250);
    }
  }
}
