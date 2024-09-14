import { Component } from '@angular/core';
import { TitleSectionComponent } from '../title-section/title-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { AnimatedArrowComponent } from '../animated-arrow/animated-arrow.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SayHiComponent } from '../say-hi/say-hi.component';
import { ObserverChildDirective } from '../observer-child.directive';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    standalone: true,
    imports: [TitleSectionComponent, AboutMeComponent, AnimatedArrowComponent, MySkillsComponent, PortfolioComponent, SayHiComponent, ObserverChildDirective]
})
export class MainComponent {
    io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('run-animation')
            }
        })
    }, { threshold: 0.6 })
}
