import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sertificate',
  templateUrl: './sertificate.component.html',
  styleUrls: ['./sertificate.component.scss']
})
export class SertificateComponent implements OnInit {
  id;
  sertificate;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      console.log('SertificateComponent params=', params);
      this.id = +params.id;
      this.sertificate = this.dataService.getData().sertificates[this.id];
      console.log('SertificateComponent sertificate=', this.sertificate);
    })
  }

}
