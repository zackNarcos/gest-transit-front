import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../core/services/auth.service";
import {LocalStorageService} from "../../core/services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  wrongCredential =  false;
  password:string;
  email:string;
  error = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    this.wrongCredential = false
    const email = form.value.email as string;
    const password = form.value.password as string;
    this.authService.login(email, password).subscribe({
      next: (res: any) => {
        this.localStorageService.setItem('token', res['auth-token']);
        this.localStorageService.setItem('userId', res.userId);
        const returnUrl = this.localStorageService.getItem('returnUrl');
        this.router.navigate([returnUrl || '/admin']);
      },
      error: (err) => {
        this.wrongCredential = true
        this.error = err.error.message || err.error;
      }
    });
  }


}
