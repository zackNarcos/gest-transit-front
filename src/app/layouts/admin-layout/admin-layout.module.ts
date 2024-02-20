import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
// import { NotificationsComponent } from '../../pages/notifications/notifications.component';
// import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import {SignUpComponent} from "../../pages/sign-up/sign-up.component";
import {UsersListComponent} from "../../pages/users-list/users-list.component";
import { DestinationsComponent } from '../../pages/destinations/destinations.component';
import { DestinationsNewComponent } from '../../pages/destinations-new/destinations-new.component';
import { DestinationsDetailComponent } from '../../pages/destinations-detail/destinations-detail.component';
import { ColisListComponent } from '../../pages/colis-list/colis-list.component';
import { ColisNewComponent } from '../../pages/colis-new/colis-new.component';
import { ColisDetailComponent } from '../../pages/colis-detail/colis-detail.component';
import { MeComponent } from '../../pages/me/me.component';
import { MesColisComponent } from '../../pages/mes-colis/mes-colis.component';
import { FindColiComponent } from '../../pages/find-coli/find-coli.component';
import { PaysNewComponent } from '../../pages/pays-new/pays-new.component';
import { PaysListComponent } from '../../pages/pays-list/pays-list.component';
import { PaysDetailsComponent } from '../../pages/pays-details/pays-details.component';
import {AllColisListComponent} from "../../pages/all-colis-list/all-colis-list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    // ChartsModule,
    NgbModule,
    // ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    UserProfileComponent,
    // NotificationsComponent,
    SignUpComponent,
    UsersListComponent,
    DestinationsComponent,
    DestinationsNewComponent,
    DestinationsDetailComponent,
    AllColisListComponent,
    ColisListComponent,
    ColisNewComponent,
    ColisDetailComponent,
    MeComponent,
    MesColisComponent,
    FindColiComponent,
    PaysNewComponent,
    PaysListComponent,
    PaysDetailsComponent,

  ]
})

export class AdminLayoutModule {}
