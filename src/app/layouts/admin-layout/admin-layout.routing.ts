import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import {SignUpComponent} from "../../pages/sign-up/sign-up.component";
import {UsersListComponent} from "../../pages/users-list/users-list.component";
import {DestinationsComponent} from "../../pages/destinations/destinations.component";
import {DestinationsNewComponent} from "../../pages/destinations-new/destinations-new.component";
import {DestinationsDetailComponent} from "../../pages/destinations-detail/destinations-detail.component";
import {ColisListComponent} from "../../pages/colis-list/colis-list.component";
import {ColisNewComponent} from "../../pages/colis-new/colis-new.component";
import {ColisDetailComponent} from "../../pages/colis-detail/colis-detail.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'tableau-de-bord',      component: DashboardComponent },
    { path: 'inscription',      component: SignUpComponent },
    { path: 'utilisateurs',      component: UsersListComponent },
    { path: 'colis',      component: ColisListComponent },
    { path: 'colis/:id',      component: ColisDetailComponent },
    { path: 'nouveau-coli',      component: ColisNewComponent },
    { path: 'utilisateurs/:id',   component: UserProfileComponent },
    { path: 'destinations',      component: DestinationsComponent },
    { path: 'destinations/:id',   component: DestinationsDetailComponent },
    { path: 'nouvelle-destination',      component: DestinationsNewComponent },

    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
