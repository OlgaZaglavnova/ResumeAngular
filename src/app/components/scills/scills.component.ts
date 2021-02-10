import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-scills',
  templateUrl: './scills.component.html',
  styleUrls: ['./scills.component.scss']
})
export class ScillsComponent implements OnInit {
  scills;
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.scills = this.dataService.getData().mainScills;
    if (!this.scills){
      this.router.navigate(['/']);
    }
  }

}
