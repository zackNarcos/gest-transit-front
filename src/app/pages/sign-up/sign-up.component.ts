import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Pays} from "../../shared/models/pays";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user : User
  pays : Pays[]

  wrongCredential = false;
  notUniqMail = false;

  userForm = new UntypedFormGroup({
    email : new UntypedFormControl(''),
    password : new UntypedFormControl('keasexpress'),
    nom: new UntypedFormControl(''),
    prenom: new UntypedFormControl(''),
    telephone: new UntypedFormControl(''),
    adresse: new UntypedFormControl(''),
    pays: new UntypedFormControl(''),
  });


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    this.user = this.userForm.value
    this.user.isLocked = false
    this.user.roles = ["ROLE_USER"]
    console.log(this.user)
  }

  checkEmail() {
    this.notUniqMail = false
    // this.userService.findByEmail(this.user.email).subscribe(user => {
    //   if (user){
    //     this.notUniqMail = true
    //   }
    // })
  }
}
