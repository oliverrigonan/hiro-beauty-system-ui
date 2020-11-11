import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { SysLoginModel } from './../../models/sys-login.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  public sysLoginModel: SysLoginModel = {
    Username: "",
    Password: ""
  };

  public entryDisabled: boolean = false;

  public login(): void {
    // this.disabled = true;

    // this.sysLoginService.login(this.sysLoginModel).subscribe(
    //   data => {

    //     if (data[0] == true) {
    //       this.toastr.success("Login Successful", 'Login');
    //       setTimeout(() => {
    //         this.router.navigate(['/software']);
    //       }, 500);
    //     } else {
    //       this.toastr.error(data[1], 'Login');
    //       this.disabled = false;
    //     }

    //   }
    // );
  }

  ngOnInit(): void {

  }

}
