import { Routes } from '@angular/router';

//import { BookExistsGuard } from './guards/book-exists';
import { AAAPageComponent } from './containers/AAA-page';
//import { NotFoundPageComponent } from './containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: AAAPageComponent
  },
  /*{
    path: 'book/find',
    component: FindBookPageComponent
  },
  {
    path: 'book/:id',
    canActivate: [ BookExistsGuard ],
    component: ViewBookPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }*/
];
