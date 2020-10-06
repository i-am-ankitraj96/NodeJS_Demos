import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LibraryDetailsComponent } from './library-details/library-details.component';
import { FormsModule } from '@angular/forms';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AssignReleaseBookComponent } from './assign-release-book/assign-release-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddMemberComponent } from './add-member/add-member.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { NotFoundComponent } from './not-found/not-found.component';

import { HttpErrorInterceptor } from './shared/httperror.interceptor';

import { HttpAuthInterceptor } from './shared/httpauth.interceptor';
import { AuthGuard } from './shared/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'viewbooks', redirectTo: 'books'},
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent ,
  canActivate: [AuthGuard] },
  { path: 'addbook', component: AddBookComponent },
  { path: 'assign-release', component: AssignReleaseBookComponent },
  { path: 'assign-release/:bookId', component: AssignReleaseBookComponent },
  { path: '**',  component: NotFoundComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LibraryDetailsComponent,
    ViewBookComponent,
    ViewMemberComponent,
    BooksComponent,
    MembersComponent,
    AssignReleaseBookComponent,
    AddBookComponent,
    AddMemberComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
