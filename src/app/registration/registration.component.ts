import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators, AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

// const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registrationForm:FormGroup;
  verificationForm:FormGroup;
  accountForm:FormGroup;
  showRegisterForm:boolean = true;
  showVerificationForm:boolean = false;
  showAccountForm:boolean = false;
  constructor(private fb:FormBuilder, private router:Router, private appService:AppService) { 
    
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });

    this.verificationForm = this.fb.group({
      verificationCode: ['', Validators.compose([Validators.required])]
    });

    this.accountForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      role: [''],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
    this.accountForm.validator = this.matchingPasswords;
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

  backtoRegister(){
    this.showRegisterForm = true;
    this.showVerificationForm = false;
  }

  registration() {
    if(this.registrationForm.valid){
      this.showRegisterForm = false;
      this.showVerificationForm = true;
    }
  }

  backtoVerification(){
    this.showVerificationForm = true;
    this.showAccountForm = false;
  }

  goToAccount(){
    this.showVerificationForm = false;
    this.showAccountForm = true;
  }

  createAccount(){
    if(this.accountForm.valid){
      this.router.navigateByUrl('login');
    }
  }


}