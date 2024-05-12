import { Component } from '@angular/core';
import { LeftNavbarComponent } from "../navbar/left-navbar/left-navbar.component";
import { CardComponent } from "../yt-home/card/card.component";

@Component({
    selector: 'app-subscriptions',
    standalone: true,
    templateUrl: './subscriptions.component.html',
    styleUrl: './subscriptions.component.css',
    imports: [LeftNavbarComponent, CardComponent]
})
export class SubscriptionsComponent {

}
