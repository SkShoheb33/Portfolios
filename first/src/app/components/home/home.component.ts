import { Component,OnInit ,Input} from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Input() data: any;
  data:any;
  ngOnInit(): void {
    setTimeout(()=>{
      this.data = this.dataService.getData();
      if(this.data)return;
    },1000);
    console.log("Hello",this.data);
  }
  constructor(private dataService: DataService){
    
  }
}
