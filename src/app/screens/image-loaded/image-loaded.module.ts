import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageLoadedComponent } from './image-loaded.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageLoadedComponent],
  exports: [ImageLoadedComponent],
})
export class ImageLoadedModule {}
