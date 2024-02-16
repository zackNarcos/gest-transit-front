import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  $users = this.moduleStoreService.selectEmployees()

  constructor(
    private moduleStoreService: ModuleStoreService,
  ) {
  }


  lockUser(user: User, lock: boolean) {
    user.isLocked = lock
    this.moduleStoreService.updateEmployee(user)
  }
}
