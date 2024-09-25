import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ImageLoadedComponent } from './screens/image-loaded/image-loaded.component';

export const routes: Routes = [
    {component:HomeComponent, path:""},
    {component: ImageLoadedComponent, path:"display"}
];
