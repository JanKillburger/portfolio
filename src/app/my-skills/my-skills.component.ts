import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
 mySkills = [
  {
    imgPath: "assets/img/icn-angular.svg",
    title: "Angular"
  },
  {
    imgPath: "assets/img/icn-ts.svg",
    title: "TypeScript"
  },
  {
    imgPath: "assets/img/icn-js.svg",
    title: "JavaScript"
  },
  {
    imgPath: "assets/img/icn-html.svg",
    title: "HTML"
  },
  {
    imgPath: "assets/img/icn-css.svg",
    title: "CSS"
  },
  {
    imgPath: "assets/img/icn-firebase.svg",
    title: "Firebase"
  },
  {
    imgPath: "assets/img/icn-git.svg",
    title: "Git"
  },
  {
    imgPath: "assets/img/icn-scrum.svg",
    title: "Scrum"
  },
  {
    imgPath: "assets/img/icn-api.svg",
    title: "Rest-API"
  },
 ]
}
