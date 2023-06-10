import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  { DefaultpageinitComponent } from './defaultpageinit/defaultpageinit.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { BookAddComponent } from './books/book-add/book-add.component';

const routes: Routes = [
    { path: 'default', component: DefaultpageinitComponent},
    { path: '', component: HomeComponent},
    { path: 'books', component: BooksComponent},
    { path: 'book/:id', component: BookAddComponent },
    { path: 'book/add', component: BookAddComponent },
    { path: 'user', component: UsersComponent},
    { path: 'login', component: AuthComponent },
    { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
