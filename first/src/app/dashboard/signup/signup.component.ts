import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sections : any;
  current:any;
  data :any;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  skills: any;
  projects: any;
  link:string = window.location.host;
  iscreated:Boolean;
  constructor(private fb: FormBuilder,private http: HttpClient) {}
  ngOnInit(): void {
    this.iscreated = false;
    this.sections = [true,false,false,false];
    this.current = 0;
    this.data = {};
    this.firstForm = this.fb.group({
      fname: ['',],
      mname: ['',],
      lname: ['',],
      username : ['',],
      number: ['',],
      email: ['',],
      password : ['',],
      cpassword : ['',],
      github: ['',]
    });
    this.secondForm = this.fb.group({
      desc: ['',]
    });
    this.thirdForm = this.fb.group({
      skills: [[],]
    })
    this.skills = [];
    this.projects = [];
  }
  submit1=()=>{
      this.next();
  }
  submit2=()=>{
    this.next();
  }
  submit3=()=>{
    console.log(this.thirdForm);
  }
  next=()=>{
    if(this.current>=3)return;
    this.sections[this.current] = false;
    this.current += 1;
    this.sections[this.current] = true;
  }
  prev=()=>{
    if(this.current<=0)return;
    this.sections[this.current] = false;
    this.current -= 1;
    this.sections[this.current] = true;
  }
  addSkill=(newSkill,value)=>{
    this.skills = [...this.skills,[newSkill.value,value.value]];
  }
  removeSkill(skill){
    let newskills = [];
    for(let i =0;i<this.skills.length;i++){
      if(this.skills[i]===skill){
        continue;
      }
      newskills = [...newskills,this.skills[i]];
    }
    this.skills = newskills;
  }
  addProject=(title,theme,date,link,desc)=>{
    let project = {

      title: title.value,
      theme: theme,
      date: date.value,
      source: link.value,
      desc: desc
      // links: [link1.value,link2.value,link3.value]
    }
    this.projects = [...this.projects,project];
  }
  removeProject(project){
    let newprojects = [];
    for(let i =0;i<this.projects.length;i++){
      if(this.projects[i]===project){
        continue;
      }
      newprojects = [...newprojects,this.projects[i]];
    }
    this.projects = newprojects;
  }
  create=()=>{
    let data = {
      firstName:this.firstForm.value.fname,
      middleName:this.firstForm.value.mname,
      lastName:this.firstForm.value.lname,
      userName:this.firstForm.value.username,
      number:this.firstForm.value.number,
      email:this.firstForm.value.email,
      password:this.firstForm.value.password,
      desc: this.secondForm.value.desc,
      github: this.secondForm.value.github,
      Skills:this.skills,
      Projects:this.projects
    };
    this.http.post('http://localhost:8090/new', data).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
      this.sections[3] = false;
      this.link = 'https://'+this.link + '/portfolio?user='+this.firstForm.value.username;
      this.iscreated = true;
  }
  
}
