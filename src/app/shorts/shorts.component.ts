import { Component } from '@angular/core';
import { LeftNavbarComponent } from '../navbar/left-navbar/left-navbar.component';


@Component({
  selector: 'app-shorts',
  standalone: true,
  imports: [LeftNavbarComponent],
  templateUrl: './shorts.component.html',
  styleUrl: './shorts.component.css'
})
export class ShortsComponent {

}
