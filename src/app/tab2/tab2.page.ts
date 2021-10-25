import { Component } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( ) {}
  ionViewDidEnter() {
    this.plotSimplePieChart();
  }


  plotSimplePieChart() {
    let myChart = HighCharts.chart('dynamicSpline', {
      chart: {
        plotBackgroundColor: "#fff",
        plotBorderWidth: null ,
        plotShadow: false,
        type: 'pie',
        
        
      },
      title: {
        text: 'Your Promotions',
        style: {
          color: '#5C5C5C',
          
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black',
              
            }
          }
        }
      },
      series: [{
        name: 'Promotion Status',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Viewd',
          y: 61.41,
          color: '#29C17E',
          width: 1500,
          height:2000,
          sliced: true,
          selected: true
        }, {
          name: 'Not viewd',
          color: '#FEC501',
          y: 11.84
        }, {
          name: 'Expired',
          color: '#5BC0EB',
          y: 10.85
        }]
      }]
    });
  }
}
