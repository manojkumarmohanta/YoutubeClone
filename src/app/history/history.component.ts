import { Component } from '@angular/core';
import { LeftNavbarComponent } from "../navbar/left-navbar/left-navbar.component";

@Component({
    selector: 'app-history',
    standalone: true,
    templateUrl: './history.component.html',
    styleUrl: './history.component.css',
    imports: [LeftNavbarComponent]
})
export class HistoryComponent {

}
