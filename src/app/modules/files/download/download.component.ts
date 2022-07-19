import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DownloadService } from '../download.service';
import { ToastModule } from 'primeng/toast';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit 
{

  public isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private downloadService : DownloadService,
    private primengConfig : PrimeNGConfig,
    private message : MessageService) { }

  ngOnInit(): void 
  {
    this.primengConfig.ripple = true;
  }


 

  // clear()
  // {
  //   this.message.clear();
  // }

  downloadFile()
  {
    this.isLoading.next(true);
    let payload = {};
    this.downloadService.DownloadReports(payload)
        .subscribe((res : any) => this.handleLoading(res),
        (err) => this.handleError(err));
  }

  handleLoading(res: any)
  {
    console.log('Successfully')
  }

  handleError(err:any)
  {
    this.isLoading.next(false);
    if(err.status.toString() === '400')
    {
      console.log('No data found')
    }
    else
    {
      console.log('Error Occured')
    }
  }

  addSingle()
  {
    this.message.add({
      severity : 'warn', 
      summary : 'Download File', 
      detail : 'Your Download is started',
    sticky:true})
  }

}
