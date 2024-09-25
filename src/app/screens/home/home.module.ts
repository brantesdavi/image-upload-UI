import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
