import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './layouts/auth/components/landing-page/landing-page.component';
import { LoginComponent } from './layouts/auth/components/login/login.component';
import { AuthGuard } from './layouts/auth/guards/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EditProfileComponent } from './modules/edit-profile/edit-profile.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
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
    ]
   
   
  },


    
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
