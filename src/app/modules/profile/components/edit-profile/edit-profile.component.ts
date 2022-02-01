import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

import {
  AuthState,
  selectUsername,
} from 'src/app/layouts/auth/state/auth.reducer';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  display: boolean = false;
  breadcrumb: any;
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  currentUser: Observable<object | null> | undefined;
  username: any;

  constructor(
    private store: Store<AuthState>,
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.store.select(selectUsername);
    this.currentUser.subscribe((res: any) => {
      this.username = res ? res.username : null;
    });

    this.items = [
      { label: 'General', icon: 'pi pi-fw pi-user-edit' },
      {
        label: 'Change Password',
        icon: 'pi pi-fw pi-lock',
        visible: false,
        routerLinkActiveOptions: { exact: true },
      },
    ];
    this.activeItem = this.items[0];
  }

  showDialog() {
    this.display = true;
  }
  closeItem(e: any, a: any) {}

  handleChange(e: any) {
    if (e.index == 0) {
      this.breadcrumb = [
        {
          label: 'Profile/General',
          url: '',
        },
      ];
    } else if (e.index == 1) {
      this.breadcrumb = [
        {
          label: 'Profile/Change Password',
          url: '',
        },
      ];
    }
    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumb);
  }
}
