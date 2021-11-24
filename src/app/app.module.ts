import { NgModule } from '@angular/core';
import { MainInterceptor } from './interceptor/main.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LandingPageComponent } from './layouts/auth/components/landing-page/landing-page.component';
import { RippleModule } from 'primeng/ripple';
import { LoginComponent } from './layouts/auth/components/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthModule } from './layouts/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import {CardModule} from 'primeng/card';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { EditProfileComponent } from './modules/edit-profile/edit-profile.component';
import {DialogModule} from 'primeng/dialog';


export function clearState(
  reducer: (arg0: any, arg1: { type: string }) => any
) {
  return function (state: any, action: { type: string }) {
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
    DashboardComponent,
    DefaultComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    CheckboxModule,
    PanelMenuModule,
    PanelModule,
    CardModule,
    MenubarModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
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
  providers: [
    JwtHelperService,
   

    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
