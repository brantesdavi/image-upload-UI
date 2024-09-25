import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './screens/home/home.module';
import { IconsModule } from './icons/icons.module';
import { HeaderModule } from './components/header/header.module';
import { ImageLoadedModule } from './screens/image-loaded/image-loaded.module';
import { CommonModule } from '@angular/common';
import { UploadService } from './service/uploadservice/uploadservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './service/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeModule,
    ImageLoadedModule,
    IconsModule,
    HeaderModule, 
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [UploadService, ThemeService]
})
export class AppComponent {
  title = 'image-upload';
}
