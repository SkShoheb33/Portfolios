import { Component,Input,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  // @Input() data:any;
  constructor(private dataService:DataService){}
  data:any={};
  ngOnInit(): void {
    this.data['desc']=''
    setTimeout(()=>{
      this.data = this.dataService.getData();
      if(this.data)return;
    },1000);
  }
}
