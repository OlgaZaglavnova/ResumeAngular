import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { Qualification } from 'src/app/models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  qualification: Qualification[];
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    combineLatest([this.dataService.getData()])
      .pipe(take(1))
      .subscribe(([data]) => {
        this.qualification = data.qualification;
        if (!this.qualification){
          this.router.navigate(['/']);
        }
      });
  }

}
