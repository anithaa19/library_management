import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'bms-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm !: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]) , // || [''],
      password: ['']
    });
  }

  authLogin() {
    console.log(this.loginForm.value);
  }

  // getErrorMessage() {
  //   if (this.username.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.username.hasError('email') ? 'Not a valid email' : '';
  // }
}


// export class Login {
//   username: string;
//   password: string;
// }
