import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
    standalone: true,
    imports: [RouterLink]
})
export class AboutMeComponent {
    heading = ''
    aboutMe = ''
    contactMe = ''
    ts = inject(TranslationService)

    constructor() {
        effect(() => {
            if (this.ts.selectedLanguage() === 'de') {
                this.heading = 'Über mich';
                this.contactMe = 'Kontakt';
                this.aboutMe = 'Ich entwickle Web-Anwendungen als Fullstack Developer in Stuttgart. Über die Microsoft Power Platform habe ich mein Talent für die Anwendungsentwicklung entdeckt und mehr als zehn abteilungsübergreifende Projekte im direkten Austausch mit den Benutzern umgesetzt. An der Developer-Akademie habe ich professionelle Werkzeuge wie JavaScript, Angular und Python/Django in Frontend- und Fullstack-Projekten angewendet. Mein Studium des Wirtschaftsingenieurwesens sowie meine langjährige Tätigkeit in einem internationalen Industrieunternehmen liefern ein solides analytisches Fundament für die Konzeption und Strukturierung komplexer Projekte.';
            } else {
                this.heading = 'About me';
                this.contactMe = 'Contact me';
                this.aboutMe = 'I am a full-stack web developer based in Stuttgart. My main tech stack is TypeScript, Angular, Python and Django. Have a look at my portfolio to see a selection of my work. I initially found my way into app development via Microsoft\s Power Platform (e.g. Power Apps, Power Automate). Since then I have been an enthusiast for making people\'s work lives easier by providing user-friendly apps, developped in close cooperation with the future users.';
            }
    })
    }
}
