import { Component, OnInit,Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // @Input() data:any;
  constructor(private dataService:DataService){}
  data:any;
  skills:any;
  showmore:boolean;
  extras:any;
  ngOnInit(): void {
    setTimeout(()=>{
      this.data = this.dataService.getData();
      if(this.data){
        this.skills = this.data.Skills;
        console.log(this.skills);
        this.showmore = this.skills.length > 3? true:false;
        if(this.showmore){
          this.extras = this.skills.slice(3,this.skills.length);
          this.skills = this.skills.slice(0,3);

        }
      return;
      }
    },1000);
    
  }
  toggleshow=()=>{
    this.showmore = ! this.showmore;
  }
}
