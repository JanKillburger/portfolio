import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
myProjects = [
  {
    title: "El Pollo Loco",
    skills: ["JavaScript","HTML","CSS"],
    desc: "Simple Jump and Run game as an introduction to object-oriented programming based on HTML canvas and images.",
    imgPath: "assets/img/portfolio-pollo-loco.png",
    appLink: "https://el-pollo-loco.jan-killburger.de",
    repLink: "https://github.com/JanKillburger/pollo-loco"
  },
  {
    title: "Join",
    skills: ["JavaScript","HTML","CSS", "Git"],
    desc: "Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories",
    imgPath: "assets/img/portfolio-join.png",
    appLink: "https://join.jan-killburger.de",
    repLink: "https://github.com/JanKillburger/join"
  }
]
}
