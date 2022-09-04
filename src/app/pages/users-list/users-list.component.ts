import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private userService:ApiUserService,
    private router: Router
  ) { }

  users:User[]=[]

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = res
    })
  }

  lockUser(id: number, b: boolean, $event: MouseEvent) {
    let user: User = new User()
    user.isLocked = b
    user.id = id
    this.userService.putUser(user).subscribe( resuslt => {
      this.router.navigate(['/utilisateurs/'+id])
    },error => {

    })
  }
}
