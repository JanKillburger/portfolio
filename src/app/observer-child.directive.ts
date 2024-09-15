import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appObserverChild]',
  standalone: true
})
export class ObserverChildDirective implements AfterViewInit {
  @Input() observer!: IntersectionObserver
  
  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.observer.observe(this.el.nativeElement)
  }

  static ngTemplateContextGuard(dir: ObserverChildDirective, ctx: unknown): ctx is ObserverChildContext {
    return true;
  }

}

interface ObserverChildContext {
  observer: IntersectionObserver;
}
