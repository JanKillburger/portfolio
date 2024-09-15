import { Component, Input, ElementRef, HostListener, OnInit, AfterViewInit, inject, effect } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
    selector: 'app-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrl: './portfolio-item.component.scss',
    standalone: true
})
export class PortfolioItemComponent implements OnInit{
  @Input() index!: number;
  @Input() totalNumber!: number;
  @Input() project!: {
    title: string,
    skills: string[],
    desc: string,
    imgPath: string,
    appLink: string
    repLink: string
  };
  seqNo!: string;
  animationIsStarted = false;
  animationDelay = 0;
  testBtn = '';
  ts = inject(TranslationService)

  constructor(private elRef: ElementRef) {
    effect(() => {
      if (this.ts.selectedLanguage() === 'de') {
        this.testBtn = 'Demo';
      } else {
        this.testBtn = 'Test';
      }
    })
  }

  
  ngOnInit(): void {
    this.seqNo = (this.index + 1).toString().padStart(2,"0") + "/" + this.totalNumber.toString().padStart(2,"0");
  }

  /* @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectHost = this.elRef.nativeElement.getBoundingClientRect();

    if (boundingRectHost.top <= 200 || boundingRectHost.bottom < windowHeight) {
      setTimeout(() => {
        this.elRef.nativeElement.classList.add('is-active');
      }, this.animationDelay);
    }
  } */
}
