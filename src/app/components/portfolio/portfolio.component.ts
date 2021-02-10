import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio;
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.portfolio = this.dataService.getData().portfolio;
    if (!this.portfolio){
      this.router.navigate(['/']);
    }
  }

}
