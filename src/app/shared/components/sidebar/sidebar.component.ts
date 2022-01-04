import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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

  activeItem: MenuItem | undefined;

  constructor() {}

  ngOnInit() {
    this.iconItems = [
      {
        icon: 'pi pi-fw pi-compass',
        routerLink: ['/dashboard/dashboard'],
        routerLinkActiveOptions: { exact: true },
        tooltip: 'Dashboard',
      },
      {
        icon: 'pi pi-fw pi-user',
        routerLink: ['/dashboard/edit-profile'],
        routerLinkActiveOptions: { exact: true },
      },
      { icon: 'pi pi-fw pi-ticket' },
      {
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/dashboard/admin'],
        routerLinkActiveOptions: { exact: true },
      },
    ];

    this.activeItem = this.iconItems[0];

    this.items = [
      { label: 'Chart', icon: 'custom-icon', routerLink: 'charts' },
    ];
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
}
