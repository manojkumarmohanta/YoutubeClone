import { Routes } from '@angular/router';
import { YtHomeComponent } from './yt-home/yt-home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    { path: "", component: YtHomeComponent },
    { path: "home", component: YtHomeComponent },
    { path: "shorts", component: ShortsComponent },
    { path: "subscription", component: SubscriptionsComponent },
    { path: "user-profile", component: UserProfileComponent }
    
];
