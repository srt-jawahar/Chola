import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http : HttpClient) { }

  DownloadReports(payload: any)
  {
    let options : any = {
      observe : 'response',
      responseType : 'blob',
    };
    return this.http.post<Blob>
        (`/DealerPortal/api/Order/Service/getPendingStatusExcelReport`, payload,options)
        .pipe(map((response) => response));
  }

}
