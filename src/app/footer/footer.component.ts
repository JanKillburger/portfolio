import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    standalone: true,
    imports: [RouterLink]
})
export class FooterComponent {
    legalNotice = ''

    ts = inject(TranslationService)

    constructor() {
        effect(() => {
            if (this.ts.selectedLanguage() === 'de') {
                this.legalNotice = 'Rechtliche Hinweise';
            } else {
                this.legalNotice = 'Legal notice';
            }
    })
    }

}
