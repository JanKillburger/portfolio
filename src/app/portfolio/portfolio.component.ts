import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
myProjects = [
  {
    title: "Join",
    skills: ["Angular","TypeScript","HTML","CSS","Firebase"],
    desc: "Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories",
    imgPath: "assets/img/portfolio-join.png",
    link: "www.google.com"
  },
  {
    title: "Join",
    skills: ["Angular","TypeScript","HTML","CSS","Firebase"],
    desc: "Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories",
    imgPath: "assets/img/portfolio-join.png",
    link: "www.google.com"
  }
]
}
