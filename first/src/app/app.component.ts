import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first';
  data :any;
  openpopup :boolean;
  ngOnInit(): void {
    this.openpopup = false;
  }
  recived=($event)=>{
    this.data = $event;
    this.openpopup = true;
  }
  change=($event)=>{
    this.openpopup = false;
  }
}
