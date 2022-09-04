import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private wrongCredential: boolean;

  constructor(
    private userService:ApiUserService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  user:User
  private id = this.route.snapshot.params['id']

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe(user => this.user = user)
  }

  upgrade(form: NgForm) {
    this.wrongCredential = false

    this.userService.putUser(this.user).subscribe( resuslt => {
      this.router.navigate(['/utilisateurs/'+this.id])
    },error => {
      this.wrongCredential = true
    })
  }
}
