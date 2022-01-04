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
import { CardModule } from 'primeng/card';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { EditProfileComponent } from './modules/profile/components/edit-profile/edit-profile.component';
import { DialogModule } from 'primeng/dialog';
// profile
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { SlaPolicyComponent } from './modules/admin/components/sla-policy/sla-policy.component';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { ChangePasswordComponent } from './modules/profile/components/change-password/change-password.component';

// admin
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

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
    SlaPolicyComponent,
    AdminComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    RouterModule,
    AppRoutingModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    CheckboxModule,
    PanelMenuModule,
    TableModule,
    PanelModule,
    PasswordModule,
    InputNumberModule,
    TabViewModule,
    CardModule,
    MenubarModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    TabMenuModule,
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
