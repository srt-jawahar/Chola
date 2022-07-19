import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import {
  AuthState,
  selectUsername,
} from 'src/app/layouts/auth/state/auth.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  opened = false;
  togglePanel: boolean = true;
  display = true;
  items: MenuItem[] = [];
  iconItems: MenuItem[] = [];
  currentUser: Observable<object | null> | undefined;

  activeItem: MenuItem | undefined;
  style: string | undefined;
  username: any;

  constructor(private router: Router, private store: Store<AuthState>) {}

  ngOnInit() {
    this.currentUser = this.store.select(selectUsername);
    this.currentUser.subscribe((res: any) => {
      this.username = res ? res.username : null;
    });
    if (this.username === 'rani') {
      this.iconItems = [
        {
          icon: 'pi pi-fw pi-users',
          routerLink: ['/usermanagement/user'],
          routerLinkActiveOptions: { exact: true },
          tooltipOptions: { tooltipLabel: 'usermanagement' },
        },
        {
          icon: 'pi pi-fw pi-user',
          routerLink: ['/usermanagement/edit-profile'],
          routerLinkActiveOptions: { exact: true },

          tooltipOptions: { tooltipLabel: 'profile' },
        },
      ];
      this.activeItem = this.iconItems[0];
      this.items = [
        {
          icon: 'pi pi-fw pi-users',
          id: '1',
          label: 'user',
          routerLink: ['/usermanagement/user'],
          routerLinkActiveOptions: { exact: true },
          tooltip: 'usermanagement',
        },
        {
          icon: 'pi pi-fw pi-user',
          id: '2',
          label: 'Profile',
          routerLink: ['/usermanagement/edit-profile'],
          routerLinkActiveOptions: { exact: true },
        },
      ];
    } else {
      this.iconItems = [
        {
          icon: 'pi pi-fw pi-compass',
          routerLink: ['/dashboard/dashboard'],
          routerLinkActiveOptions: { exact: true },
          tooltipOptions: { tooltipLabel: 'Dashboard' },
        },
        {
          icon: 'pi pi-fw pi-user',
          routerLink: ['/dashboard/edit-profile'],
          routerLinkActiveOptions: { exact: true },

          tooltipOptions: { tooltipLabel: 'profile' },
        },
        {
          icon: 'pi pi-fw pi-ticket',
          routerLink: ['/dashboard/records'],
          routerLinkActiveOptions: { exact: true },
          tooltipOptions: { tooltipLabel: 'records' },
        },
        // {
        //   icon: 'pi pi-fw pi-cog',
        //   routerLink: ['/dashboard/admin'],
        //   routerLinkActiveOptions: { exact: true },
        //   tooltipOptions: { tooltipLabel: 'Admin' },
        // },
        {
          icon:'pi pi-fw pi-file-o',
          routerLink: ['/dashboard/files'],
          routerLinkActiveOptions: {exact: true},
          tooltipOptions: { tooltipLabel : 'files'},
        }
      ];

      this.activeItem = this.iconItems[0];

      this.items = [
        {
          icon: 'pi pi-fw pi-compass',
          id: '1',
          label: 'Dashboard',
          routerLink: ['/dashboard/dashboard'],
          routerLinkActiveOptions: { exact: true },
          tooltip: 'Dashboard',
        },
        {
          icon: 'pi pi-fw pi-user',
          id: '2',
          label: 'Profile',
          routerLink: ['/dashboard/edit-profile'],
          routerLinkActiveOptions: { exact: true },
        },
        {
          icon: 'pi pi-fw pi-ticket',
          id: '3',
          label: 'Records',
          routerLink: ['/dashboard/records'],
          routerLinkActiveOptions: { exact: true },
        },
        {
          icon: 'pi pi-fw pi-file-o',
          label: 'Files',
          id: '4',
          routerLink: ['/dashboard/files'],
          routerLinkActiveOptions: { exact: true },
        },
      ];
    }
  }

  openTab() {
    this.opened = true;
  }

  panelClick() {
    this.opened = true;
    this.togglePanel = false;
  }

  menuPanelClose() {
    this.opened = false;
    this.togglePanel = true;
  }

  // checkActiveState(givenLink: string) {
  //   if (this.router.url.indexOf(givenLink) === -1) {
  //     return 'P-menu';
  //   } else {
  //     alert('same');
  //     return 'p-menuitem-link-active';
  //   }
  // }
}
