import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AuthPageAction } from '../../state/actions';
import { AuthState } from '../../state/auth.reducer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {

  @Input() isLoading: boolean | undefined;
  @ViewChild('username') inputEl: ElementRef | undefined;

  loginFormGroup   = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    })
 

  constructor(private messageService: MessageService,
    private router: Router,
    private store: Store<AuthState>) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
     })
  }

  public login(): void {
    if(this.loginFormGroup.valid){
      this.isLoading=true;
      let payload = {
       ...this.loginFormGroup.value,
       
     };
     this.store.dispatch(AuthPageAction.startLogin(payload)); 
    // alert(JSON.stringify(this.loginFormGroup.value));
    this.messageService.add({severity:'success', summary:'Login Message', detail:'Login sucess'});
    this.router.navigate(['/dashboard'])

    }
  }
}
