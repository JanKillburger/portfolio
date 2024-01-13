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
  @ViewChild('contactForm') contactForm!: ElementRef;

  sendMail() {
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
