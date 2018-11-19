import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

 const EMAIL_REGEX =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)])]
    });

    this.passwordForm = this.fb.group({
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });

   this.passwordForm.validator = this.matchingPasswords;
  }

  matchingPasswords(AC: AbstractControl) {
    if (AC.get('password') && AC.get('confirmPassword')) {
      const password = AC.get('password').value;
      const confirmPassword = AC.get('confirmPassword').value;
      if (password !== confirmPassword) {
        AC.get('confirmPassword').setErrors({matchingPasswords: true});
      } else {
        return null;
      }
    }
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