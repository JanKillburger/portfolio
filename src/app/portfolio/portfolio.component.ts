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
    desc: "Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
    imgPath: "assets/img/portfolio-join.png",
    appLink: "https://join.jan-killburger.de",
    repLink: "https://github.com/JanKillburger/join"
  },
  {
    title: "DA Bubble",
    skills: ["Angular","Firebase", "Git"],
    desc: "Chat app inspired by Slack. Create teams to communicate or chat personally with collegues.",
    imgPath: "assets/img/dabubble.png",
    appLink: "https://dabubble.jan-killburger.de",
    repLink: "https://github.com/JanKillburger/DaBubble"
  },
  {
    title: "Videoflix",
    skills: ["Python","Django","Angular"],
    desc: "Video streaming platform with Django admin panel to upload new videos with background processing to multiple resolutions.",
    imgPath: "assets/img/videoflix.png",
    appLink: "https://jan-killburger.developerakademie.org/",
    repLink: "https://github.com/JanKillburger/videoflix-backend"
  }
]
}
