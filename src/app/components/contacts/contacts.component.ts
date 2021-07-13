import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { Contact } from 'src/app/models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    combineLatest([this.dataService.getData()])
      .pipe(take(1))
      .subscribe(([data]) => {
        this.contacts = data.contacts;
      });
  }
}

