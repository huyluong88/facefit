// modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'trainers',
    component: TrainersComponent
  },
  {
    path: 'trainers/profile/:trainerId',
    component: TrainerProfileComponent
  },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      AngularFontAwesomeModule
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
