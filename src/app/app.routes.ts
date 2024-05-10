import { Routes } from '@angular/router';
import { YtHomeComponent } from './yt-home/yt-home.component';
import { ShortsComponent } from './shorts/shorts.component';

export const routes: Routes = [
    { path: "", component: YtHomeComponent },
    { path: "home", component: YtHomeComponent },
    { path: "shorts", component: ShortsComponent}
    
];
