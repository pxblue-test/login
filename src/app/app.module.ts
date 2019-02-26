import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
   MatButtonModule,
   MatCheckboxModule,
   MatFormFieldModule,
   MatInputModule,
   MatOptionModule,
   MatSelectModule,
   MatSlideToggleModule,
   MatCardModule, 
   MatChipsModule,
   MatToolbarModule, 
   MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import {ForgotPasswordComponent} from './forgot/forgot.component';
import { appRoutes } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { AppService } from './app.service';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule, 
    MatInputModule,
    MatOptionModule, 
    MatSelectModule, 
    MatSlideToggleModule, 
    MatCardModule,
    MatChipsModule, 
    MatToolbarModule, 
     MatIconModule, 
    MatListModule, 
    FlexLayoutModule,
   RouterModule.forRoot(appRoutes)],

  declarations: [AppComponent, LoginComponent, HomeComponent, RegistrationComponent, ForgotPasswordComponent],
  bootstrap: [AppComponent],
  providers: [MatIconRegistry, AppService, AuthGuard, {provide: APP_BASE_HREF, useValue : '/'}]
})
export class AppModule {

}
