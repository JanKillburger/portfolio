import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-arrow',
  templateUrl: './animated-arrow.component.html',
  styleUrl: './animated-arrow.component.scss'
})
export class AnimatedArrowComponent {
  @Input() orientation?: "to-bottom-right" | "to-bottom-left";
}
