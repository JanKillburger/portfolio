import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-my-skills',
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.scss',
    standalone: true,
    imports: [NgFor]
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
  {
    imgPath: "assets/img/icn-python.svg",
    title: "Python",
    isBackendSkill: true
  },
  {
    imgPath: "assets/img/Django.svg",
    title: "Django",
    isBackendSkill: true
  },{
    imgPath: "assets/img/PostgreSQL.svg",
    title: "PostgreSQL",
    isBackendSkill: true
  },{
    imgPath: "assets/img/Linux.svg",
    title: "Linux",
    isBackendSkill: true
  },{
    imgPath: "assets/img/Cloud.svg",
    title: "Google Cloud",
    isBackendSkill: true
  },{
    imgPath: "assets/img/Docker.svg",
    title: "Docker",
    isBackendSkill: true
  },{
    imgPath: "assets/img/RxJs.svg",
    title: "RxJs",
    isBackendSkill: true
  },
 ]
}
