import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Pays} from "../../shared/models/pays";
import {ModuleStoreService} from "../../core/store/module-store.service";
import {Params} from "../../shared/models/params";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  destinations : Pays[]
  user: User
  stats$ = this.moduleStoreService.selectColisStat()
  month = new Date().getMonth()+1;
  year = new Date().getFullYear();

  searchForm = new FormGroup({
    year: new FormControl(this.year, Validators.required),
    month: new FormControl(this.month, Validators.required),
  });
  wrongCredential: boolean = false

  constructor(
    private moduleStoreService: ModuleStoreService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const id = this.route.snapshot.params['id']
    this.moduleStoreService.loadColisStat({month: this.month, year: this.year, userId: id})
    this.searchForm.valueChanges.subscribe({
      next: () => {
        const params: Params = {
          year: this.searchForm.get('year').value,
          month: this.searchForm.get('month').value,
          userId: id
        }
        this.moduleStoreService.loadColisStat(params)
      }
    })

    if (id != null) {
      let trouve = false
      this.moduleStoreService.selectEmployees().subscribe(users => {
        users.forEach(user => {
          if (user.id == id) {
            this.user = user
            trouve = true
          }
        })
      })
      if (!trouve) {
        this.router.navigate(['/utilisateurs'])
      }
    } else {
      this.router.navigate(['/utilisateurs'])
    }
  }


  ngOnInit(): void {

  }

  upgrade(form: NgForm) {
    this.wrongCredential = false
    this.moduleStoreService.updateEmployee(this.user)
    this.router.navigate(['/utilisateurs'])
  }

}
