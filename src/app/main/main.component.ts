import { Component } from '@angular/core';
import { TitleSectionComponent } from '../title-section/title-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { AnimatedArrowComponent } from '../animated-arrow/animated-arrow.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SayHiComponent } from '../say-hi/say-hi.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    standalone: true,
    imports: [TitleSectionComponent, AboutMeComponent, AnimatedArrowComponent, MySkillsComponent, PortfolioComponent, SayHiComponent]
})
export class MainComponent {

}
