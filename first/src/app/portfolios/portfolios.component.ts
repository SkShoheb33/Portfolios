import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent {
  data: any;
  openpopup: boolean;
  user :string;
  constructor(private http: HttpClient,private router: Router, private dataService: DataService,private route: ActivatedRoute) {}
  getCurrentPath() {
    const currentPath = this.route.snapshot.url.join('/');
    console.log('Current path:', currentPath);
    this.route.queryParamMap.subscribe((params) => {
      this.user = params.get('user'); // Get individual query parameters
      console.log('user:', this.user);
    });
  }
  
  ngOnInit() {
    this.getCurrentPath();
    this.openpopup = false;
    let url = `http://localhost:8090/portfolio/${this.user}`
    console.log(url)
    this.http.get(url).subscribe(
      (result) => {
        if(result){
          this.data = result;
          this.dataService.setData(this.data); 
        }else{
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

  recived = ($event) => {
    this.data = $event;
    this.openpopup = true;
  }

  change = ($event) => {
    this.openpopup = false;
  }
}
