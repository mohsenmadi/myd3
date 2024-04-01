import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart3',
  standalone: true,
  imports: [],
  templateUrl: './chart3.component.html',
  styleUrl: './chart3.component.scss'
})
export class Chart3Component implements OnInit, OnChanges {
  host: any;
  svg: any;

  @Input() data: any;

  rectWidth = 30;
  padding = 5;

  constructor(element: ElementRef) {
    this.host = d3.select(element.nativeElement);
    console.log(this);
  }

  ngOnInit() {
    this.svg = this.host.select('svg');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.draw();
  }

  private draw() {
    this.svg.selectAll('rect')
      .data(this.data || [])
      .enter().append('rect')
      .attr('x', (d: number, i: number) => i * (this.rectWidth + this.padding))
      .attr('width', this.rectWidth)
      .attr('height', (d: any) => d.employee_age);
  }
}
