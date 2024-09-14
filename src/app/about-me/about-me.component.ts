import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
    standalone: true,
    imports: [RouterLink]
})
export class AboutMeComponent {

}
