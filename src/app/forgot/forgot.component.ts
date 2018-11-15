import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

// const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm:FormGroup;
  passwordForm:FormGroup;
  showEmailForm:boolean = true;
  showPasswordForm:boolean = false;
  constructor(private fb:FormBuilder, private router:Router, private appService:AppService) { 
    
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });

    this.passwordForm = this.fb.group({
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
  }

  emailContinue(){
    if(this.emailForm.valid){
      this.showEmailForm = false;
      this.showPasswordForm = true;
    }
  }

  backtoEmail(){
    this.showEmailForm = true;
    this.showPasswordForm = false;
  }
  

  changePassword(){
    if(this.passwordForm.valid){
      this.router.navigateByUrl('login');
    }
  }

}