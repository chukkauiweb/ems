import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from '../shared/credentials/credentials.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private _service: CredentialsService , private _router: Router) {
  }
  public logout() {
    this._service.logout().subscribe(res => {
        if (res.logout === 'success') { // code wrong
            this._router.navigate(['/app-admin-login']);
        } else {
            alert('OOps.....!');
        }
    }, err => {
        console.log(err);
    });
}
}
