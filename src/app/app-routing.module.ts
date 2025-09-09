import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  // { path: '', component: BookListComponent }, // home
  // { path: 'books', component: BookListComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'add', component: AddBookComponent },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
