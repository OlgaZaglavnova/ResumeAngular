import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sertificates',
  templateUrl: './sertificates.component.html',
  styleUrls: ['./sertificates.component.scss']
})
export class SertificatesComponent implements OnInit {
  sertificates = [];
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // let data = this.dataService.getData();
    // if (data.sertificates){
      this.sertificates = this.dataService.getData().sertificates;
      if (this.sertificates.length === 0){
        this.router.navigate(['/'])
      }
    // }
  }

}
