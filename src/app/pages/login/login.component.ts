import { Component, OnInit } from '@angular/core';
import {SessionLoginService} from "../../shared/services/session-login/session-login.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  wrongCredential =  false;
  password:string;
  email:string;

  constructor(
    private sessionLogin: SessionLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    this.wrongCredential = false
    this.sessionLogin.login(form.value.email,form.value.password).subscribe( resuslt => {
      this.router.navigate(['/'])
    },error => {
      this.wrongCredential = true
    })
  }

}
