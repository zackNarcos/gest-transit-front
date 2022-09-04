import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {SignUpComponent} from "../../pages/sign-up/sign-up.component";
import {UsersListComponent} from "../../pages/users-list/users-list.component";
import { DestinationsComponent } from '../../pages/destinations/destinations.component';
import { DestinationsNewComponent } from '../../pages/destinations-new/destinations-new.component';
import { DestinationsDetailComponent } from '../../pages/destinations-detail/destinations-detail.component';
import { ColisListComponent } from '../../pages/colis-list/colis-list.component';
import { ColisNewComponent } from '../../pages/colis-new/colis-new.component';
import { ColisDetailComponent } from '../../pages/colis-detail/colis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    IconsComponent,
    NotificationsComponent,
    SignUpComponent,
    UsersListComponent,
    DestinationsComponent,
    DestinationsNewComponent,
    DestinationsDetailComponent,
    ColisListComponent,
    ColisNewComponent,
    ColisDetailComponent,

  ]
})

export class AdminLayoutModule {}
