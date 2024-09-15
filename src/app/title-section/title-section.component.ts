import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
    selector: 'app-title-section',
    templateUrl: './title-section.component.html',
    styleUrl: './title-section.component.scss',
    standalone: true,
    imports: [RouterLink]
})
export class TitleSectionComponent {
    title = ''
    contactMe = ''
    ts = inject(TranslationService)

    constructor() {
        effect(() => {
            if (this.ts.selectedLanguage() === 'de') {
                this.title = 'Fullstack Entwickler';
                this.contactMe = 'Kontakt';
            } else {
                this.title = 'Fullstack Developer';
                this.contactMe = 'Contact me';
            }
    })
    }
}
