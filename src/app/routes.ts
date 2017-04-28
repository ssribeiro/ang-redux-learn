import { Routes } from '@angular/router';

//import { BookExistsGuard } from './guards/book-exists';
import { OiPageComponent } from './containers/oi-page';
//import { NotFoundPageComponent } from './containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: OiPageComponent
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
