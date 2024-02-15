import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import {SignUpComponent} from "../../pages/sign-up/sign-up.component";
import {UsersListComponent} from "../../pages/users-list/users-list.component";
import {DestinationsComponent} from "../../pages/destinations/destinations.component";
import {DestinationsNewComponent} from "../../pages/destinations-new/destinations-new.component";
import {DestinationsDetailComponent} from "../../pages/destinations-detail/destinations-detail.component";
import {ColisListComponent} from "../../pages/colis-list/colis-list.component";
import {ColisNewComponent} from "../../pages/colis-new/colis-new.component";
import {ColisDetailComponent} from "../../pages/colis-detail/colis-detail.component";
import {MeComponent} from "../../pages/me/me.component";
import {MesColisComponent} from "../../pages/mes-colis/mes-colis.component";
import {FindColiComponent} from "../../pages/find-coli/find-coli.component";
import {PaysListComponent} from "../../pages/pays-list/pays-list.component";
import {PaysDetailsComponent} from "../../pages/pays-details/pays-details.component";
import {PaysNewComponent} from "../../pages/pays-new/pays-new.component";

export const AdminLayoutRoutes: Routes = [
  {path : '', redirectTo: 'nouveau-coli', pathMatch: 'full'},
  { path: 'inscription',      component: SignUpComponent },
  { path: 'utilisateurs',      component: UsersListComponent},
  { path: 'colis',      component: ColisListComponent },
  { path: 'colis/:id',      component: ColisDetailComponent },
  { path: 'nouveau-coli',      component: ColisNewComponent },
  { path: 'utilisateurs/:id',   component: UserProfileComponent },
  { path: 'destinations',      component: DestinationsComponent },
  { path: 'destinations/:id',   component: DestinationsDetailComponent },
  { path: 'nouvelle-destination',      component: DestinationsNewComponent },
  { path: 'pays',      component: PaysListComponent },
  { path: 'pays/:id',   component: PaysDetailsComponent },
  { path: 'nouveau-pays',      component: PaysNewComponent },
  { path: 'me',      component: MeComponent },
  { path: 'me/colis',      component: MesColisComponent },
  { path: 'notifications',  component: NotificationsComponent },
  { path: 'rechercher/coli',  component: FindColiComponent },
];
