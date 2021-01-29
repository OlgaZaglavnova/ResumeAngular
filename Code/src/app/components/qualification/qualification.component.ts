import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  qualification;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.qualification = this.dataService.getData().qualification;
  }

}
