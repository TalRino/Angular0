import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Profile } from 'selenium-webdriver/firefox';

const ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: 'user-profile', pathMatch: 'full'},
];

export { ROUTES };