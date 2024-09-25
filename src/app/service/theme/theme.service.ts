import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme = 'light'
  
  constructor() {
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
  }

  private applyTheme() {
    document.body.setAttribute('data-theme', this.currentTheme);
  }

}
