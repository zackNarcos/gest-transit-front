import { Component, OnInit } from '@angular/core';
import {ApiUserService} from "../../shared/services/api/user/api-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../shared/models/user";
import {NgForm} from "@angular/forms";
import {ProfileService} from "../../shared/services/profile/profile.service";
import {MonthStatsService} from "../../shared/services/api/stats/monthStats/month-stats.service";
import {MonthStatistique} from "../../shared/models/monthStatistique";
import {DestinationsService} from "../../shared/services/api/destinations/destinations.service";
import {Destinations} from "../../shared/models/destinations";
import {PaysService} from "../../shared/services/api/pays/pays.service";
import {Pays} from "../../shared/models/pays";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  private wrongCredential: boolean;
  monthStatistique = new MonthStatistique()
  destinations : Pays[]
  destination : Destinations = new Destinations()

  constructor(
    private destinationsService: PaysService,
    private profilService:ProfileService,
    private userService:ApiUserService,
    private monthStatistiquesService: MonthStatsService,
  ) { }

  user:User = new User()

  ngOnInit(): void {
    this.destinationsService.getPayss().subscribe( result => {
      this.destinations = result
    })
    this.profilService.getMe().subscribe(user => {
      this.user = user
      this.monthStatistique.month = new Date().getMonth()+1;
      this.monthStatistique.year = new Date().getFullYear();
      this.monthStatistiquesService.getSumgains(this.user.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.gains = sum)
      this.monthStatistiquesService.getSumAvances(this.user.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.avances = sum)
      this.monthStatistiquesService.getQtes(this.user.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(qte => this.monthStatistique.qte = qte)
      this.monthStatistiquesService.getSumReliquats(this.user.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.reliquats = sum)
    })

  }

  upgrade(form: NgForm) {
    this.wrongCredential = false

    this.userService.putUser(this.user).subscribe( resuslt => {
      this.profilService.getMe().subscribe(user => this.user = user)
    },error => {
      this.wrongCredential = true
    })
  }

  reloadData() {
    this.profilService.getMe().subscribe(user => {
      this.user = user
      this.monthStatistiquesService.getSumgains(this.user.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.gains = sum)
      this.monthStatistiquesService.getSumAvances(this.user.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.avances = sum)
      this.monthStatistiquesService.getQtes(this.user.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(qte => this.monthStatistique.qte = qte)
      this.monthStatistiquesService.getSumReliquats(this.user.id, this.monthStatistique.year, this.monthStatistique.month).subscribe(sum => this.monthStatistique.reliquats = sum)
    })
  }

}
