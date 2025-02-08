import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:true,
    imports:[ReactiveFormsModule,CommonModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  authForm: FormGroup;
  isLoginMode = true;
  @Output() out=new EventEmitter();


  
router:Router | undefined;
  constructor(private fb: FormBuilder,private actvtRoute:ActivatedRoute,router:Router) {
  this.router=router;
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });

  }

  onSwitchMode() {
this.out.emit('hi');
    this.isLoginMode = !this.isLoginMode;
    if (this.isLoginMode) {
      this.authForm.get('confirmPassword')?.clearValidators();
    } else {
      this.authForm.get('confirmPassword')?.setValidators([Validators.required, Validators.minLength(6)]);
    }
    this.authForm.get('confirmPassword')?.updateValueAndValidity();
  }

  onSubmit() {
    console.log("login")
this.router?.navigate(['/dashboard']);
  //   if (this.authForm.invalid) {
  //     return;
  //   }

  //   const email = this.authForm.value.email;
  //   const password = this.authForm.value.password;

  //   if (this.isLoginMode) {
  //     // Handle login
  //     console.log('Login:', { email, password });
  //   } else {
  //     const confirmPassword = this.authForm.value.confirmPassword;
  //     if (password !== confirmPassword) {
  //       console.error('Passwords do not match');
  //       return;
  //     }
  //     // Handle registration
  //     console.log('Register:', { email, password });
  //   }
   }
}