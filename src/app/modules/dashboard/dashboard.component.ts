import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  data: any;
  viewChart: any;
  tickets: any;
  viewPriorityChart: any;
  prioritytickets: any;
  healthChart:any;
  viewHealthChart: any;

  constructor() {}

  ngOnInit(): void {
    this.prioritytickets = [
      { priority: 'Micro', tickets: '36' },
      { priority: 'Small', tickets: '40' },
      { priority: 'Medium', tickets: '25' },
    ];
    this.tickets = [
      { status: 'Car Insurance', tickets: '56' },
      { status: 'Two Wheeler Insurance', tickets: '35' },
      { status: 'Own Damage Car Insurance', tickets: '15' },
      { status: 'Third Party Car Insurance', tickets: '8' },
      { status: 'Comprehensive Car Insurance', tickets: '6' },
      { status: 'Commercial Vehicle Insurance', tickets: '20' },
      { status: 'Comprehensive Two Wheeler Insurance', tickets: '10' },
      { status: 'Commercial Vehicle Insurance', tickets: '10' },
    ];

    this.healthChart = [
      { type : 'Arogya Sanjeevani', count: '12'},
      { type : 'Chola Healthline', count: '17'},
      { type : 'Accident Protection', count: '10'},
      { type : 'Corona Rakshak', count: '32'},
    ]

    this.chartOptions = {
      series: [56, 35, 15, 8, 6, 20, 10, 10],
      chart: {
        type: 'donut',
      },
      labels: [
        'Car',
        'Two Wheeler',
        'Third Party',
        'Own Damage',
        'Third Party',
        'CCI',
        'CTI',
        'CVI',
      ],
      plotOptions: {
        pie: {
          expandOnClick: true,
          offsetX: 4,
          offsetY: 0,
          customScale: 1,

          donut: {
            size: '50%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true,
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
                fontSize: '20px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: '#373d3f',
                formatter: function (w: any) {
                  return w.globals.seriesTotals.reduce((a: any, b: any) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
      },

      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (seriesName: any, opts: any) {
          return seriesName + ' - ' + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }
  ticketByStatus() {
    this.viewChart = true;
  }
  ticketByPriority() {
    this.viewPriorityChart = true;
  }

  healthCharts() {
    this.viewHealthChart = true;
  }
}
