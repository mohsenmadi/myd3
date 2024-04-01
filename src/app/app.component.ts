import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Chart1Component} from "./charts/chart1/chart1.component";
import {OnSvgComponent} from "./charts/on-svg/on-svg.component";
import {ApiService} from "./services/api.service";
import {map, Observable} from "rxjs";
import {Chart3Component} from "./charts/chart3/chart3.component";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Chart1Component, OnSvgComponent, Chart3Component, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  data1 = [125, 100, 50, 75, 200, 150, 400];
  data2 = [];

  apiService = inject(ApiService);
  protected data3$!: Observable<any>;

  ngOnInit() {
    this.apiService.getEmployees()
      .pipe(
        map(data =>
          data.map((emp:any) => emp.employee_age))
      )
      .subscribe(data => {
        this.data2 = data
      })

    this.data3$ = this.apiService.getEmployees();
  }

  // constructor() {
  //   setTimeout(() => {
  //     this.chart = [...this.chart, 150]
  //   }, 2000)
  // }
}
