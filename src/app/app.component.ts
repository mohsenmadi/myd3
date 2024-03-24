import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Chart1Component} from "./charts/chart1/chart1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Chart1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard-one';
}
