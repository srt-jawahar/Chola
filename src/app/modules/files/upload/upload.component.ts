import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { MenuItem, MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';
import { BehaviorSubject, Observable } from 'rxjs';
import { UploadService } from '../upload.service';
import { UploadList } from '../uploadlist';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})


export class UploadComponent implements OnInit 
{

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  methodMess : any = 'TEST';
  progressbar ?: ProgressBar
  breadcrumb : any;
  items : MenuItem[] = [];
  activeItem!: MenuItem;
  display : boolean = false;

  uploadedFiles : any[] = [];

  cities: UploadList[];

  selectedCity1: UploadList[] = [];

  selectedCityCode!: string;

  citynames : boolean = true;

  // showMainContent : boolean = true;

  // selectedCity !: UploadList;

  public isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private uploadService : UploadService,
    private ngDynamicbreadcrumb : NgDynamicBreadcrumbService,
    private messageService : MessageService) 
    { 
      this.cities = [
        { dname: 'Average Assets', dcode: 'AA' },
        { dname: 'Disbursement Amount', dcode: 'DA' },
        { dname: 'Disbursement File', dcode: 'DF' },
        { dname: 'Total File', dcode: 'TF' },
        { dname: 'OD File', dcode: 'OD' }
      ];
    }

  ngOnInit(): void 
  {
    // this.fileInfos = this.uploadService.getFiles();
    this.items = [
      { label : 'Upload', icon : 'pi pi-fw pi-upload'},
      {
        label : 'Download',
        icon : 'pi pi-fw pi-download',
        visible : false,
        routerLinkActiveOptions : {exact : true},
      },
      {
        label : 'Demo',
        icon : 'pi pi-fw pi-upload',
        visible : false,
        routerLinkActiveOptions: {exact : true},
      }
    ];
    this.activeItem = this.items[0];
  }

  showDialog()
  {
    this.display = true;
  }

  closeItem(e : any, a : any){}

  selectFile(event : any): void
  {
    this.selectedFiles = event.target.files;
  }

  handleChange(e : any)
  {
    if(e.index == 0)
    {
      this.breadcrumb = [
        {
          label : 'Files/upload',
          url : '',
        },
      ];
    } else if(e.index == 1)
    {
      this.breadcrumb = [
        {
          label : 'Files/download',
          url : '',
        },
      ];
    }
    else if(e.index == 2)
    {
      this.breadcrumb = [
        {
          label : 'Files/demo',
          url  : '',
        },
      ]
    }
    this.ngDynamicbreadcrumb.updateBreadcrumb(this.breadcrumb);
  }

  upload(event : any) : void
  {
    this.progress = 0;
    // console.log('Dcode'+event.value.dcode);
    if(this.selectedFiles)
    {
      const file : File | null = this.selectedFiles.item(0);
      if (file)
      {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,this.methodMess).subscribe(  
          (event : any) => {
            if(event.type === HttpEventType.UploadProgress)
            {
              this.isLoading.next(true);
              this.progress = Math.round((100 / event.loaded || 0) * event.total);
              
            }

            else if(event instanceof HttpResponse)
            {
              this.isLoading.next(false);
              this.message = event.body.message;
              this.messageService.add({severity:'success', summary: 'Successfully', detail: 'uploaded the report`'});
              console.log(this.message);
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          (err : any) => {
            console.log(err);
            this.isLoading.next(false);
            this.progress = 0;
            this.messageService.add({severity:'error', summary:'Failure', detail:'Upload Failed'});
            if (err.error && err.error.message) {
              this.message = err.error.message;
              console.log(this.message);
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
          );
      }

      this.selectedFiles = undefined;

    }
  } 

  onChange(event : any)
  {
    // console.log(this.cities)

      // var _this = this;
  
      // _this.isDisabled = true;
  
     
  
      // console.log('event :' + event);
  
      console.log(event.value.dcode);

      if(event.value.dcode === 'AA')
    {
      this.citynames = false;
    } else if(event.value.dcode === 'DA') {
      this.citynames = false;
    } else if(event.value.dcode === 'DF') {
      this.citynames = false;
    } else
    {
      this.citynames = true;
    }
  
  
  }

  onUpload(event : any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }


  onBasicUploadAuto(event : any)
  {

  }
  

  // LIST OF VALUES DISPLAY 
  uploadListNames = [
    {
      dept_name : 'Average Assets',
      dept_code : 'AA'
    },
    {
      dept_name : 'Disbursement Amount',
      dept_code : 'DA'
    },
    {
      dept_name : 'Total File',
      dept_code : 'TF'
    },
  ]

  private filter(name : string): any[]
  {
    const filterValue = name.toLowerCase();

    return this.uploadListNames.filter(
      (res) => res.dept_code.toLowerCase().indexOf(filterValue) === 0
    );
  }


  lovupload()
  {
    // if ()
  }

}
