import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
    @Output() projectEvent = new EventEmitter<any>();
    projects :any;
    showmore  :Boolean;
    ismore: Boolean;
    extra :any;
    constructor(private dataService:DataService){}
    ngOnInit(): void {
       setTimeout(()=>{
        let data= this.dataService.getData();
        if(data){
          this.projects = data.Projects;
          console.log("projects",this.projects)
          return;
        }
      },1000);
      this.showmore = this.projects.length>5;
      this.ismore = this.projects.length>5;
      if(this.showmore){
        this.extra = this.projects.slice(5,this.projects.length);
        this.projects = this.projects.slice(0,5);
      }
    }
    toggleprojects=()=>{
      this.showmore = ! this.showmore;
    }
    openpopup=(project)=>{
      this.projectEvent.emit(project);
    }
}
