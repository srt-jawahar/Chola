import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';
import { catchError, map, Observable, scan } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http : HttpClient) { }

  upload(file : File, method : any): Observable<HttpEvent<any>>
  {
    const formData : FormData = new FormData();
    formData.append('file', file);
    formData.append('method',method);

    const req = new HttpRequest('POST', `/LoanProfitPortal/api/Profit/Service/uploadDriverData`, formData, {
      reportProgress: true,
      responseType : 'blob',
    });
    return this.http.request(req);
  }

  uploadBandSalary()
  {
    console.log("Your Salary Details");
  }

  targetBranches()
  {
    console.log("Your Target Branches");
  }

  methodMatrix()
  {
    console.log("Your Method Matrix");
  }

  // getFiles(): Observable<any>
  // {
  //   //return this.http.get(`/LoanProfitPortal/api/Profit/Service/uploadDriverData`);
  // }

}
