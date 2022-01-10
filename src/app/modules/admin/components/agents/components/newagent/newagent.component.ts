import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-newagent',
  templateUrl: './newagent.component.html',
  styleUrls: ['./newagent.component.scss'],
  providers: [MessageService],
})
export class NewagentComponent implements OnInit {
  selectedAgent: string = 'Ocassional';

  isCustomUpload: boolean = true;
  filteredManager: any;
  uploadedFiles: any[] = [];
  text1: string | undefined;
  text2: string | undefined;
  timeZone: any;
  language: any;
  level: any;
  timeFormat: any;
  cascadeSelectCountries: any;
  manager: any;
  groups: any;
  roles: any;
  groupsdropDown: any;
  rolesObj: any;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.timeZone = [
      { Zone: '(GMT-09:00) Gambier Islands', code: 'Ca Hrs' },
      {
        Zone: '[UTC + 5:30] Indian Standard Time, Sri Lanka Time',
        code: 'Ca Hrs',
      },
      { Zone: '(GMT-07:00) Mountain Time (US & Canada)', code: 'Bss Hrs' },
    ];

    this.language = [
      {
        language: 'English',
        code: 'EN',
      },
      { language: 'English', code: 'EN' },
      { language: 'English', code: 'EN' },
    ];

    this.level = [
      {
        level: 'Beginner',
        code: 'EN',
      },
      { level: 'Intermediate', code: 'EN' },
      { level: 'Guru', code: 'EN' },
    ];

    this.timeFormat = [
      {
        Format: '12-hour',
        code: 'EN',
      },
      { Format: '24-hour', code: 'EN' },
    ];

    this.cascadeSelectCountries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' },
              { cname: 'Wollongong', code: 'A-WO' },
            ],
          },
          {
            name: 'Queensland',
            cities: [
              { cname: 'Brisbane', code: 'A-BR' },
              { cname: 'Townsville', code: 'A-TO' },
            ],
          },
        ],
      },
      {
        name: 'Canada',
        code: 'CA',
        states: [
          {
            name: 'Quebec',
            cities: [
              { cname: 'Montreal', code: 'C-MO' },
              { cname: 'Quebec City', code: 'C-QU' },
            ],
          },
          {
            name: 'Ontario',
            cities: [
              { cname: 'Ottawa', code: 'C-OT' },
              { cname: 'Toronto', code: 'C-TO' },
            ],
          },
        ],
      },
      {
        name: 'United States',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles', code: 'US-LA' },
              { cname: 'San Diego', code: 'US-SD' },
              { cname: 'San Francisco', code: 'US-SF' },
            ],
          },
          {
            name: 'Florida',
            cities: [
              { cname: 'Jacksonville', code: 'US-JA' },
              { cname: 'Miami', code: 'US-MI' },
              { cname: 'Tampa', code: 'US-TA' },
              { cname: 'Orlando', code: 'US-OR' },
            ],
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Austin', code: 'US-AU' },
              { cname: 'Dallas', code: 'US-DA' },
              { cname: 'Houston', code: 'US-HO' },
            ],
          },
        ],
      },
    ];
    this.manager = [
      { name: 'Thangamani', code: 'M' },
      { name: 'Mohan', code: 'M' },
      { name: 'Aathirai', code: 'M' },
      { name: 'Mugunthan', code: 'M' },
    ];

    this.groupsdropDown = [
      { group: 'ATA-FICO', code: 'M' },
      { group: 'ATA -PP', code: 'M' },
      { group: 'Change Team', code: 'M' },
      { group: 'ATA SD', code: 'M' },
    ];
    this.rolesObj = [
      { name: '18000185616', label: 'Account Admin' },
      { name: '18000185617', label: 'Admin' },
      { name: '18000185618', label: 'SD Supervisor' },
      { name: '18000185619', label: 'SD Agent' },
      { name: '18000185620', label: 'Problem Manager' },
      { name: '18000185621', label: 'Change Manager' },
      { name: '18000185622', label: 'Release Manager' },
      { name: '18000185623', label: 'Configuration Manager' },
      { name: '18000185624', label: 'Contract Manager' },
      { name: '18000185625', label: 'IT Ops Agent' },
      { name: '18000185626', label: 'Project Manager' },
      { name: '18000185627', label: 'Project Member' },
      { name: '18000185628', label: 'Procurement Manager' },
    ];
  }

  onUpload(e: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }

  searchManager(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.manager.length; i++) {
      let manager = this.manager[i];
      if (manager.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(manager);
      }
    }

    this.filteredManager = filtered;
  }

  addMultipleGroups() {
    if (this.groups) {
      this.groups.push(this.groups);
    } else {
      this.groups = [{}];
    }
  }

  addMultipleRoles() {
    if (this.roles) {
      this.roles.push(this.roles);
    } else {
      this.roles = [{}];
    }
  }

  deleteGroup() {
    this.groups.pop();
  }

  deleteRole() {
    this.roles.pop();
  }
}
