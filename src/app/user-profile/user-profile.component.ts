import { Component } from '@angular/core';
import { LeftNavbarComponent } from "../navbar/left-navbar/left-navbar.component";
import { CardComponent } from "../yt-home/card/card.component";

@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [LeftNavbarComponent, CardComponent]
})
export class UserProfileComponent {

}
