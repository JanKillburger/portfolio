import { Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { ObserverChildDirective } from '../observer-child.directive';

@Component({
    selector: 'app-animated-arrow',
    templateUrl: './animated-arrow.component.html',
    styleUrl: './animated-arrow.component.scss',
    standalone: true
})
export class AnimatedArrowComponent {
  @Input() orientation?: "to-bottom-right" | "to-bottom-left";
}
