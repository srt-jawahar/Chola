import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { TicketService } from './ticketservice';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  providers: [TicketService, MessageService, ConfirmationService],
})
export class TicketComponent implements OnInit, AfterViewInit {
  @ViewChild('opMenu') op: OverlayPanel | any;

  toggleOverlay = ({ originalEvent }: any) => this.op.toggle(originalEvent);

  tickets: any = [];
  selectedTickets: any;
  cols: any;
  _selectedColumns: any;
  items: any;
  editTicketScreen: boolean = false;
  header: any;
  replyitems: any;
  moreitems: any;
  menuitems: any;
  opPanel: any;
  menuItemDisplay: boolean = false;
  actualtarget: any;
  agentitems: any;

  constructor(
    private router: Router,
    private ticketService: TicketService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngAfterViewInit(): void {
    this.ticketService.getTickets().then((data) => (this.tickets = data));
  }

  ngOnInit(): void {
    this.agentitems = [
      { label: 'ATA Support(Me)' },
      { label: 'ATA SD' },
      { label: 'FICO Support' },
      { label: 'PP Support' },
      { label: 'ABAP Support' },
      { label: 'MM Support' },
    ];

    this.menuitems = [
      {
        label: 'ATA BASIS',
        value: 'de',
        items: [
          { label: 'ATA support', value: 'ata ss' },
          { label: 'ATA squard', value: 'ata sa' },
        ],
      },
      {
        label: 'ATA ABAP',
        value: 'us',
        items: [
          { label: 'ABAP support(me)', value: 'sup' },
          { label: 'ATA', value: 'ata' },
        ],
      },
      {
        label: 'ATA MM',
        value: 'jp',
        items: [
          { label: 'MM support', value: 'mm ss' },
          { label: 'MM', value: 'mm' },
        ],
      },
    ];

    // this.menuitems = [
    //   {
    //     label: 'ATA ABAP',
    //     command: this.toggleOverlay,
    //     // command: (event: any) => {
    //     //   this.menuClick(event);
    //     // },
    //   },
    //   {
    //     label: 'ATA BB',
    //     command: this.toggleOverlay,
    //   },
    // ];
    this.items = [
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Pick Up',
      },
      {
        label: 'Assign to',
      },
      {
        label: 'Bulk update',
      },
      {
        label: 'Merge',
      },
      {
        label: 'Execute Scenario',
      },
      {
        label: 'Close',
      },
      {
        label: 'Mark as spam',
      },
    ];

    this.cols = [
      { field: 'requester', header: 'requester' },
      { field: 'subject', header: 'subject' },
      { field: 'created_date', header: 'created_date' },
      { field: 'status', header: 'status' },
      { field: 'state', header: 'state' },
      { field: 'priority', header: 'priority' },
      { field: 'assigned_to', header: 'assigned_to' },
      { field: 'status_details', header: 'status_details' },
      { field: 'department', header: 'department' },
      { field: 'source', header: 'source' },
      { field: 'last_modified_date', header: 'last_modified_date' },
      { field: 'due_date', header: 'due_date' },
      { field: 'closed_date', header: 'closed_date' },
      { field: 'approval_status', header: 'approval_status' },
      { field: 'impact', header: 'impact' },
      { field: 'urgency', header: 'urgency' },
      { field: 'category', header: 'category' },
      { field: 'sub_category', header: 'sub_category' },
      { field: 'item', header: 'item' },
      { field: 'child_ticket', header: 'child_ticket' },
    ];
    this._selectedColumns = [
      { field: 'requester', header: 'requester' },
      { field: 'subject', header: 'subject' },
      { field: 'created_date', header: 'created_date' },
    ];
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col: any) => val.includes(col));
  }
  editTicket(ticket: any) {
    // this.editTicketScreen = true;
    this.header = ticket.id;
    this.router.navigate(['/dashboard/tickets', ticket.id]);
  }
  menuClick(e: any) {
    console.log(e);
    // this.menuItemDisplay = true;
    this.op.show(e, this.actualtarget);
  }
}
