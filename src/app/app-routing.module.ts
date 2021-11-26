import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './layouts/auth/components/landing-page/landing-page.component';
import { LoginComponent } from './layouts/auth/components/login/login.component';
import { AuthGuard } from './layouts/auth/guards/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ChangePasswordComponent } from './modules/profile/components/change-password/change-password.component';
import { EditProfileComponent } from './modules/profile/components/edit-profile/edit-profile.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: DashboardComponent,
      },
      {
        path: 'edit-profile',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: EditProfileComponent,
      },

      {
        path: 'admin',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: AdminComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
