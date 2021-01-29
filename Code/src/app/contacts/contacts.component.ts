import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.contacts = this.dataService.getData().contacts;
  }

}
