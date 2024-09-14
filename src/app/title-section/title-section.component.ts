import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-title-section',
    templateUrl: './title-section.component.html',
    styleUrl: './title-section.component.scss',
    standalone: true,
    imports: [RouterLink]
})
export class TitleSectionComponent {

}
