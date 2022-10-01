import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {NgForm} from "@angular/forms";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Destinations} from "../../shared/models/destinations";
import {MonthStatistique} from "../../shared/models/monthStatistique";
import {MonthStatsService} from "../../shared/services/api/stats/monthStats/month-stats.service";
import {PaysService} from "../../shared/services/api/pays/pays.service";
import {Pays} from "../../shared/models/pays";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private wrongCredential: boolean;
  monthStatistique = new MonthStatistique()
  destinations : Pays[]

  constructor(
    private destinationsService: PaysService,
    private userService:ApiUserService,
    private monthStatistiquesService: MonthStatsService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  user:User = new User()
  private id = this.route.snapshot.params['id']

  ngOnInit(): void {
    this.destinationsService.getPayss().subscribe( result => {
      this.destinations = result
    })
    this.userService.getUser(this.id).subscribe(user => this.user = user)

    this.monthStatistique.month = new Date().getMonth()+1;
    this.monthStatistique.year = new Date().getFullYear();
    this.monthStatistiquesService.getSumgains(this.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.gains = sum)
    this.monthStatistiquesService.getSumAvances(this.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.avances = sum)
    this.monthStatistiquesService.getQtes(this.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(qte => this.monthStatistique.qte = qte)
    this.monthStatistiquesService.getSumReliquats(this.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.reliquats = sum)
  }

  upgrade(form: NgForm) {
    this.wrongCredential = false

    this.userService.putUser(this.user).subscribe( resuslt => {
      this.router.navigate(['/utilisateurs/'+this.id])
    },error => {
      this.wrongCredential = true
    })
  }

  reloadData() {
    this.monthStatistiquesService.getSumgains(this.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.gains = sum)
    this.monthStatistiquesService.getSumAvances(this.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.avances = sum)
    this.monthStatistiquesService.getQtes(this.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(qte => this.monthStatistique.qte = qte)
    this.monthStatistiquesService.getSumReliquats(this.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.reliquats = sum)
  }
}
