import { Component, effect, inject } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';
import { ObserverChildDirective } from '../observer-child.directive';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  standalone: true,
  imports: [NgFor, PortfolioItemComponent, NgClass, ObserverChildDirective]
})
export class PortfolioComponent {
  description = '';
  readonly observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    })
  }, { threshold: 0.5 })
  ts = inject(TranslationService)

  constructor() {
    effect(() => {
      if (this.ts.selectedLanguage() === 'de') {
        this.description = 'Hier finden Sie eine Auswahl meiner Arbeit - probieren Sie die Anwendungen gerne aus.';
        this.myProjects = [
          {
            title: "El Pollo Loco",
            skills: ["JavaScript", "HTML", "CSS"],
            desc: "Web-Browser Spiel mit objektorientierter Programmierung, basierend auf HTML Canvas.",
            imgPath: "assets/img/portfolio-pollo-loco.png",
            appLink: "https://el-pollo-loco.jan-killburger.de",
            repLink: "https://github.com/JanKillburger/pollo-loco"
          },
          {
            title: "Join",
            skills: ["JavaScript", "HTML", "CSS", "Git"],
            desc: "Task Management Web-App zur Organisation mehrerer Anwender, inspiriert vom Kanban-System. Erlaubt die Erstellung und Verwaltung von Aufgaben mit Drag'n'Drop-Funktionalität.",
            imgPath: "assets/img/portfolio-join.png",
            appLink: "https://join.jan-killburger.de",
            repLink: "https://github.com/JanKillburger/join"
          },
          {
            title: "DA Bubble",
            skills: ["Angular", "Firebase", "Git"],
            desc: "Chat-Messenger Applikation im Stile von Slack zur Kommunikation im Team sowie für persönliche Chats mit Kollegen.",
            imgPath: "assets/img/dabubble.png",
            appLink: "https://dabubble.jan-killburger.de",
            repLink: "https://github.com/JanKillburger/DaBubble"
          },
          // {
          //   title: "Videoflix",
          //   skills: ["Python", "Django", "Angular"],
          //   desc: "Video-Streaming Website mit Admin-Panel zum Video-Upload mit Hintergrundverarbeitung in mehrere Auflösungen. Die Videoqualität im Stream passt sich automatisch auf Basis der verfügbaren Bandbreite an.",
          //   imgPath: "assets/img/videoflix.png",
          //   appLink: "https://jan-killburger.developerakademie.org/",
          //   repLink: "https://github.com/JanKillburger/videoflix-backend"
          // }
        ];
      } else {
        this.description = 'This is a sample of my work - feel free to test it.';
        this.myProjects = [
          {
            title: "El Pollo Loco",
            skills: ["JavaScript", "HTML", "CSS"],
            desc: "Simple Jump and Run game as an introduction to object-oriented programming based on HTML canvas and images.",
            imgPath: "assets/img/portfolio-pollo-loco.png",
            appLink: "https://el-pollo-loco.jan-killburger.de",
            repLink: "https://github.com/JanKillburger/pollo-loco"
          },
          {
            title: "Join",
            skills: ["JavaScript", "HTML", "CSS", "Git"],
            desc: "Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
            imgPath: "assets/img/portfolio-join.png",
            appLink: "https://join.jan-killburger.de",
            repLink: "https://github.com/JanKillburger/join"
          },
          {
            title: "DA Bubble",
            skills: ["Angular", "Firebase", "Git"],
            desc: "Chat app inspired by Slack. Create teams to communicate or chat personally with collegues.",
            imgPath: "assets/img/dabubble.png",
            appLink: "https://dabubble.jan-killburger.de",
            repLink: "https://github.com/JanKillburger/DaBubble"
          },
          // {
          //   title: "Videoflix",
          //   skills: ["Python", "Django", "Angular"],
          //   desc: "Video streaming platform with Django admin panel to upload new videos with background processing to multiple resolutions.",
          //   imgPath: "assets/img/videoflix.png",
          //   appLink: "https://jan-killburger.developerakademie.org/",
          //   repLink: "https://github.com/JanKillburger/videoflix-backend"
          // }
        ];
      }
    })
  }
  myProjects: { title: string, skills: string[], desc: string, imgPath: string, appLink: string, repLink: string }[] = []
}
