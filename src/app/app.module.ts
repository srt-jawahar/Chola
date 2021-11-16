import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { LandingPageComponent } from './layouts/auth/components/landing-page/landing-page.component';
import {RippleModule} from 'primeng/ripple';
import { LoginComponent } from './layouts/auth/components/login/login.component';
import {CheckboxModule} from 'primeng/checkbox';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,ButtonModule,
    RippleModule,
    CheckboxModule,
    PanelModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
