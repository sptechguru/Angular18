import * as Highcharts from 'highcharts';

export const highchartsOptions = {
  getColumnChartOptions(
    title: string,
    categories: string[],
    series: { name: string; data: number[]; color: string }[]
  ): Highcharts.Options {
    return {
      chart: {
        type: 'column',
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        title: {
          text: 'Count',
        },
      },
      series: series.map((s) => ({
        name: s.name,
        type: 'column',
        data: s.data,
        color: s.color,
      })),
    };
  },

  getPieChartOptions(
    title: string,
    seriesName: string,
    data: { name: string; y: number; color: string }[]
  ): Highcharts.Options {
    return {
      chart: {
        type: 'pie',
      },
      title: {
        text: title,
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
          name: seriesName,
          type: 'pie',
          data: data,
        },
      ],
    };
  },
};
