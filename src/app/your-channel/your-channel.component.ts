import { Component } from '@angular/core';
import { CardComponent } from "../yt-home/card/card.component";
import { LeftNavbarComponent } from "../navbar/left-navbar/left-navbar.component";

@Component({
    selector: 'app-your-channel',
    standalone: true,
    templateUrl: './your-channel.component.html',
    styleUrl: './your-channel.component.css',
    imports: [CardComponent, LeftNavbarComponent]
})
export class YourChannelComponent {

}
