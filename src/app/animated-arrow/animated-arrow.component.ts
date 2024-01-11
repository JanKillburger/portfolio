import { Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-animated-arrow',
  templateUrl: './animated-arrow.component.html',
  styleUrl: './animated-arrow.component.scss'
})
export class AnimatedArrowComponent {
  animationIsStarted = false;
  @Input() orientation?: "to-bottom-right" | "to-bottom-left";
  @ViewChild('main') arrow!: ElementRef;
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectArrow = this.arrow.nativeElement.getBoundingClientRect();

    if (boundingRectArrow.top >= 0 && boundingRectArrow.bottom <= (windowHeight - 150)) {
      setTimeout(() => {
        this.animationIsStarted = true;
      }, 250);
    }
  }
}
