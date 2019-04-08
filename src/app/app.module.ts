import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DisplayGuestsDirective } from './display-guests.directive';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { HighlightDirective } from './highlight.directive';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    DisplayGuestsDirective,
    ListMovieComponent,
    HighlightDirective,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
