import { Component } from '@angular/core';
import { ThemeService } from '../../service/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
})
export class HeaderComponent {
  
  constructor(private themeService: ThemeService) {}
  

  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    // Alterna a classe 'dark' no elemento <html>
    if (this.isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

