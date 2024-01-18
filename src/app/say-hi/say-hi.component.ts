import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-say-hi',
  templateUrl: './say-hi.component.html',
  styleUrl: './say-hi.component.scss'
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
  @ViewChild('contactForm') contactForm: any;


  async sendMail() {
    this.formSubmitted = true;
    this.statusMessage = "Nachricht wird gesendet...";
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
      this.statusMessage = "Nachricht erfolgreich gesendet."
      this.contactForm.reset();
    } catch (error) {
      this.statusMessage = "Nachricht konnte nicht gesendet werden: " + error;
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
