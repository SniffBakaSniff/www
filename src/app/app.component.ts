import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent, RouterModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
