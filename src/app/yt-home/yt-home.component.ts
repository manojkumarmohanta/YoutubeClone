import { Component } from '@angular/core';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-yt-home',
  standalone: true,
  imports: [LeftNavbarComponent,CardComponent],
  templateUrl: './yt-home.component.html',
  styleUrl: './yt-home.component.css'
})
export class YtHomeComponent {

}
