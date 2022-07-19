import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UploadList } from '../uploadlist';

@Component({
  selector: 'app-demo-file-system',
  templateUrl: './demo-file-system.component.html',
  styleUrls: ['./demo-file-system.component.scss']
})
export class DemoFileSystemComponent implements OnInit 
{

  cities!: UploadList[];

  selectedCity1 : UploadList[] = [];

  citynames : boolean = true;

  public isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() 
  { 
    
    this.cities = [
      { dname: 'Band1Salary', dcode: 'B1S' },
      { dname: 'Target Branches', dcode: 'TB' },
      { dname: 'Method Matrix', dcode: 'MM' },
    ];
  }

  ngOnInit(): void {
  }

  onChange(event : any)
  {
    console.log(event.value.dcode);

    if(event.value.dcode === 'B1S')
    {
      this.citynames = false;
    } else if(event.value.dcode === 'TB') {
      this.citynames = false;
    } else if(event.value.dcode === 'DF') {
      this.citynames = false;
    } else
    {
      this.citynames = true;
    }
  }

  uploadFile(event : any)
  {
    console.log(event.value.dcode);
  }

}
