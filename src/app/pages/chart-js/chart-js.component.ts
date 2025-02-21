import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-chart-js',
  imports: [FormsModule, CommonModule],
  templateUrl: './chart-js.component.html',
  styleUrl: './chart-js.component.css'
})
export class ChartJsComponent implements OnInit {

  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;

  barChartType: any = ['line', 'bar', 'bubble', 'pie', 'doughnut', 'polarArea', 'radar', 'scatter'];
  chart!: Chart;
  chartType: any = "bar";


  ngOnInit(): void {
    this.barChart();
  }

  allBarChart(type: any) {
    this.chartType = type;
    this.barChart();
  }

  barChart() {
    if (this.chart) {
      this.chart.destroy(); 
    }
    this.chart = new Chart("canvas", {  //this.barCanvas?.nativeElement
      type: this.chartType, 
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Bar of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
        }
      }
    }
    )
  }
}
