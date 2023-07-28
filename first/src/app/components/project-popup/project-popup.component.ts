import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-project-popup',
  templateUrl: './project-popup.component.html',
  styleUrls: ['./project-popup.component.css']
})
export class ProjectPopupComponent implements OnInit {
  @Input() projectdata:any={};  
  @Input() popup:Boolean;
  @Output() closedpopupEvent = new EventEmitter();
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Html',
    'Css',
    'Js',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
  ngOnInit(): void {
    this.projectdata['title'] = ''
    this.projectdata.date = ''
  }
  togglepopup=()=>{
    this.popup = !this.popup;
    this.closedpopupEvent.emit(true);
  }
}
