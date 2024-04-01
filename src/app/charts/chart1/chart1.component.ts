import {
  Component, ElementRef, HostListener, inject, Input, OnChanges, OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-chart1',
  standalone: true,
  imports: [],
  templateUrl: './chart1.component.html',
  styleUrl: './chart1.component.scss'
})
export class Chart1Component implements OnInit, OnChanges {

  elRef = inject(ElementRef);

  @Input() chart: number[] = [];
  xLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  rectWidth = 50;
  maxHeight!: number;
  heightFactor!: number;
  dimensions!: DOMRect;

  padding = 0;
  paddingOuter = 20;
  bandwidth = 0;
  bandwidthCoef = 0.8;

  margin = {
    left: 10,
    right: 20,
    bottom: 16,
    top: 15
  }
  innerWidth!: number;
  innerHeight!: number;

  ngOnInit() {
    this.resizeHorizontal();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeHorizontal();
  }

  private resizeHorizontal() {
    this.dimensions =
      ((this.elRef.nativeElement as HTMLElement)
        .getElementsByTagName('svg')[0]).getBoundingClientRect();

    this.innerWidth = this.dimensions.width - this.margin.left - this.margin.right;
    this.innerHeight = this.dimensions.height - this.margin.top - this.margin.bottom;

    this.maxHeight = 1.2 * Math.max(...this.chart);
    this.rectWidth = (this.innerWidth - 2 * this.paddingOuter) / this.chart.length;
    this.heightFactor = this.innerHeight / this.maxHeight;
    this.bandwidth = this.bandwidthCoef * this.rectWidth;
    this.padding = (1 - this.bandwidthCoef) * this.rectWidth;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.resizeHorizontal();
  }
}
