import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts;
  constructor(
    public dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.contacts = this.dataService.getData().contacts;
    if (!this.contacts){
      this.router.navigate(['/']);
    }
  }

}
