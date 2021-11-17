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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';


export function clearState(reducer: (arg0: any, arg1: { type: string; }) => any) {
  return function (state: any, action: { type: string; }) {
    if (action.type === 'logout') {
      state = undefined;
    }

    return reducer(state, action);
  };
}



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
    BrowserAnimationsModule,
    StoreModule.forRoot({}, { metaReducers: [clearState] }),
    StoreDevtoolsModule.instrument({
      name: 'Ticket Management Application',
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppRoutingModule,
    SharedModule,
    EffectsModule.forRoot([]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
