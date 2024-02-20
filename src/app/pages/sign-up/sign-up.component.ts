import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Pays} from "../../shared/models/pays";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user : User = {email: '', password: '', nom: '', prenom: '', telephone: '', adresse: '', pays: null, ville: '', description: '', salaire: 0, isLocked: false, roles: []}
  pays$ = this.moduleStoreService.selectPays()

  wrongCredential = false;
  notUniqMail = false;

  userForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('keasexpress', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    adresse: new FormControl(''),
    pays: new FormControl(null, Validators.required),
    ville: new FormControl(''),
    description: new FormControl(''),
    salaire: new FormControl(0),
  });


  constructor(
    private router: Router,
    private moduleStoreService: ModuleStoreService,
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    this.user.email = this.userForm.get('email').value
    this.user.password = this.userForm.get('password').value
    this.user.nom = this.userForm.get('nom').value
    this.user.prenom = this.userForm.get('prenom').value
    this.user.telephone = this.userForm.get('telephone').value
    this.user.adresse = this.userForm.get('adresse').value
    this.user.pays = this.userForm.get('pays').value
    this.user.ville = this.userForm.get('ville').value
    this.user.description = this.userForm.get('description').value
    this.user.salaire = this.userForm.get('salaire').value
    this.user.isLocked = false
    this.user.roles = ["ROLE_EMPLOYE"]

    this.moduleStoreService.addEmployee(this.user)
    this.router.navigate(['/utilisateurs'])
  }

  checkEmail() {
    this.notUniqMail = false
    this.moduleStoreService.selectEmployees().subscribe(users => {
      users.forEach(user => {
        if (user.email == this.userForm.get('email').value) {
          this.notUniqMail = true
        }
      })
    })
  }
}
