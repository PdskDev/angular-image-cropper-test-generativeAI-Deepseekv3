import { ImageAddComponent } from './components/image-add/image-add.component';
import { ImageEditComponent } from './components/image-edit/image-edit.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: ImageListComponent }, // Default route (Image List)
  { path: 'add', component: ImageAddComponent }, // Route for adding an image
  { path: 'edit/:id', component: ImageEditComponent }, // Route for editing an image by ID
  { path: '**', redirectTo: '' }, // Redirect to the default route if the path doesn't match
];
