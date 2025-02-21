import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { CommonModule } from '@angular/common';
import { SortableTableComponent } from '../../Core/sortable-table/sortable-table.component';
import { highchartsOptions } from './highcharts-options';

@Component({
  selector: 'app-dounut-chart',
  imports: [HighchartsChartModule, CommonModule, SortableTableComponent],
  templateUrl: './dounut-chart.component.html',
  styleUrl: './dounut-chart.component.css',
})
export class DounutChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any;
  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Top 5 Vendor Critical Vulnerability Count',
    },
    xAxis: {
      categories: ['Cisco', 'F5', 'Fortinet', 'Palo Alto'],
    },
    yAxis: {
      title: {
        text: 'Count',
      },
    },
    series: [
      {
        name: 'Critical Vulnerability',
        type: 'column',
        data: [7, 23, 7, 0],
        color: '#007bff',
      },
      {
        name: 'Device Count',
        type: 'column',
        data: [6, 20, 13, 0],
        color: '#add8e6',
      },
    ],
  };

  chartOptions3: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Top 5 Vendors with Vulnerability-Impacted Devices',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}',
        },
      },
    },
    series: [
      {
        name: 'Devices',
        type: 'pie',
        data: [
          { name: 'Cisco', y: 24, color: '#007bff' },
          { name: 'F5', y: 14, color: '#00a65a' },
          { name: 'Fortinet', y: 13, color: '#ff851b' },
          { name: 'Palo Alto', y: 5, color: '#add8e6' },
        ],
      },
    ],
  };

  ngOnInit(): void {
    this.chartOptions = highchartsOptions.getColumnChartOptions(
      'Top 5 Vendor High Vulnerability Count',
      ['Cisco', 'F5', 'Fortinet', 'Palo Alto'],
      [
        { name: 'High Vulnerability', data: [125, 136, 28, 11], color: '#007bff' },
        { name: 'Device Count', data: [24, 38, 13, 5], color: '#add8e6' },
      ]
    );
  }

  // chartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'column'
  //   },
  //   title: {
  //     text: 'Top 5 Vendor High Vulnerability Count'
  //   },
  //   xAxis: {
  //     categories: ['Cisco', 'F5', 'Fortinet', 'Palo Alto']
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Count'
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'High Vulnerability',
  //       type: 'column',
  //       data: [125, 136, 28, 11],
  //       color: '#007bff' // Dark Blue
  //     },
  //     {
  //       name: 'Device count',
  //       type: 'column',
  //       data: [24, 38, 13, 5],
  //       color: '#add8e6' // Light Blue
  //     }
  //   ]
  // };
  
  deviceTableList: any = [
    { Location: 'Germany', 'Critical Severity': 1, 'High Severity': 6 },
    { Location: 'United Kingdom', 'Critical Severity': 20, 'High Severity': 297 },
    { Location: 'Unknown', 'Critical Severity': 20, 'High Severity': 271 },
  ];
  
  tableColumns = ['Location', 'Critical Severity', 'High Severity'];

  
  onSortChange(event: { column: string; direction: 'asc' | 'desc' }) {
    console.log('Sorted Column:', event.column);
  }
}
