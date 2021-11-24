import { NgModule } from "@angular/core";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import {MenuModule} from 'primeng/menu';
import { HeaderComponent } from './components/header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {DockModule} from 'primeng/dock';




@NgModule({

    
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports:[
    SidebarModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    PanelMenuModule,
    FormsModule,
    MenuModule,
    DockModule
    
    
    
  ],
  providers:[
    
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
   ],
  

}) 


export class SharedModule{
  

} 