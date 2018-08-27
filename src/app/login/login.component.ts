import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CredentialsService } from '../shared/credentials/credentials.service';
import { Router } from '@angular/router'; // Router class for dynamic url
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor (private _ser: CredentialsService, private router: Router, private fb: FormBuilder) { }
  public login(login_details): any {
    this._ser.authenticate(login_details).subscribe(res => {
      if (res.login) {
        this.router.navigate(['/adminhome']);
        alert('login succefully');
      } else {
        alert('login fail');
      }
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('client side error');
      } else {
        console.log('server side error');
      }
    });
  }
  public forGot(fgmail) {
    this._ser.frgot(fgmail).subscribe(res => {
    });
    }
    ngOnInit() {
  this.loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [ null, [Validators.required]],
  });
    }
 cancel() {
      this.router.navigate(['/']);
  }
  }
