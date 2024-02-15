import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {FormControl, FormGroup} from "@angular/forms";
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

  userForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('keasexpress'),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    adresse: new FormControl(''),
    pays: new FormControl(''),
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
