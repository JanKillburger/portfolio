import { Component, effect, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-say-hi',
  templateUrl: './say-hi.component.html',
  styleUrl: './say-hi.component.scss',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf]
})
export class SayHiComponent {
  userName = '';
  userEmail = '';
  userMessage = '';
  privacyPolicy = false;
  nameHasFocus = false;
  emailHasFocus = false;
  messageHasFocus = false;
  formSubmitted = false;
  statusMessage = '';
  contactLabel = ''
  slogan1 = ''
  slogan2 = ''
  nameLabel = ''
  emailLabel = ''
  messageLabel = ''
  dataPrivacyAdvisory1 = ''
  dataPrivacyAdvisory2 = ''
  dataPrivacyAdvisory3 = ''
  dataPrivacyAdivsory4 = ''
  sendMessageBtn = ''
  sendingMessageNotification = ''
  sendingMessageSuccess = ''
  sendingMessageError = ''
  @ViewChild('contactForm') contactForm: any;
  ts = inject(TranslationService)

  constructor() {
    effect(() => {
      if (this.ts.selectedLanguage() === 'de') {
        this.contactLabel = 'Kontakt'
        this.slogan1 = 'Möchten Sie ein Projekt diskutieren?'
        this.slogan2 = 'Schicken Sie mir eine Nachricht und lassen Sie es uns angehen!'
        this.nameLabel = 'Ihr Name'
        this.emailLabel = 'Ihre Email'
        this.messageLabel = 'Ihre Nachricht'
        this.dataPrivacyAdvisory1 = 'Ich habe den'
        this.dataPrivacyAdvisory2 = 'Datenschutzhinweis gelesen'
        this.dataPrivacyAdvisory3 = 'und stimme der Verarbeitung meiner Daten wie beschrieben zu.'
        this.dataPrivacyAdivsory4 = 'Erforderlich zum Senden einer Nachricht.'
        this.sendMessageBtn = 'Nachricht senden'
        this.sendingMessageNotification = 'Nachricht wird gesendet...'
        this.sendingMessageSuccess = 'Nachricht erfolgreich gesendet.'
        this.sendingMessageError = 'Nachricht konnte nicht gesendet werden: '
      } else {
        this.contactLabel = 'Say Hi!'
        this.slogan1 = 'Want to discuss a new project?'
        this.slogan2 = 'Say hello! Let\'s discuss your ideas and make it happen.'
        this.nameLabel = 'Your name'
        this.emailLabel = 'Your email'
        this.messageLabel = 'Your message'
        this.dataPrivacyAdvisory1 = 'I\'ve read the'
        this.dataPrivacyAdvisory2 = 'privacy policy'
        this.dataPrivacyAdvisory3 = 'and agree to the processing of my data as outlined.'
        this.dataPrivacyAdivsory4 = 'This is required for sending a message.'
        this.sendMessageBtn = 'Send message'
        this.sendingMessageNotification = 'Sending message...'
        this.sendingMessageSuccess = 'Message sent successfully.'
        this.sendingMessageError = 'Error sending message: '
      }
    })
  }

  async sendMail() {
    this.formSubmitted = true;
    this.statusMessage = "";
    let fd = new FormData();
    fd.append('name', this.userName);
    fd.append('email', this.userEmail);
    fd.append('message', this.userMessage);
    try {
      await fetch('https://jan-killburger.de/api/send_mail.php',
        {
          method: 'POST',
          body: fd
        });
      this.statusMessage = ""
      this.contactForm.reset();
    } catch (error) {
      this.statusMessage = "" + error;
    }
    setTimeout(() => {
      this.formSubmitted = false;
      this.statusMessage = '';
    }, 2000);
    this.formSubmitted = false;
  }

  toggleFocus(event: any) {
    let newValue: boolean;
    event.type === 'focus' ? newValue = true : newValue = false;
    switch (event.currentTarget!.id) {
      case 'name':
        this.nameHasFocus = newValue;
        break;
      case 'email':
        this.emailHasFocus = newValue;
        break;
      case 'message':
        this.messageHasFocus = newValue;
        break;
    }
  }
}
