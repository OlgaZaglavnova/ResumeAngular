import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(
    public dataService: DataService,
    private router: Router
    ) { }
 

  ngOnInit(): void {
    this.uploadData()

  }

  uploadData(){
    let tmpData = this.dataService.getData();
    if(!tmpData){
      this.router.navigate(['/']);
    } 
  }



}
