import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  opened = false;
  togglePanel:boolean = true;
  display = true;
  items: MenuItem[] = []; 

  constructor() {
 
  }

  ngOnInit() {
    this.items = [
        {label: 'Chart', icon: 'custom-icon', routerLink: 'charts'}]
    }

  openTab() {
    this.opened = true;
  }

  panelClick(){
    this.opened = true;
    this.togglePanel = false;
  }

  menuPanelClose(){
    this.opened = false;
    this.togglePanel = true;
  }

  

  
}
