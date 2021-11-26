import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

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

  items: MenuItem[] = [];
  activeItem!: MenuItem;
  currentUser: Observable<object | null> | undefined;
  username: any;

  constructor(private store: Store<AuthState>) {}

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
}
