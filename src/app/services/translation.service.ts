import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  readonly selectedLanguage: WritableSignal<'en' | 'de'> = signal('de');

  changeLanguage(language: 'en' | 'de') {
    this.selectedLanguage.set(language);
    document.documentElement.setAttribute('lang', language);
  }
}
