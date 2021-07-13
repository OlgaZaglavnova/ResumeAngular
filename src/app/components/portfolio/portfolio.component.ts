import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { Portfolio } from 'src/app/models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[];
  constructor(
    public dataService: DataService,
    private router: Router
    ) {}

  ngOnInit(): void {
    combineLatest([this.dataService.getData()])
      .pipe(take(1))
      .subscribe(([data]) => {
        this.portfolio = data.portfolio;
        if (!this.portfolio){
          this.router.navigate(['/']);
        }
      });
  }

}
