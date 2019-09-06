import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';


@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        LoginComponent,
        HomeComponent,
        TrainersComponent,
        TrainerProfileComponent,
      ],
    exports: [
        RouterModule,
        LoginComponent
    ],
    providers: [
    ]
})
export class CoreModule { }
