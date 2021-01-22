import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sertificates',
  templateUrl: './sertificates.component.html',
  styleUrls: ['./sertificates.component.scss']
})
export class SertificatesComponent implements OnInit {
  sertificates = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // let data = this.dataService.getData();
    // if (data.sertificates){
      this.sertificates = this.dataService.getData().sertificates;
    // }
  }

}
