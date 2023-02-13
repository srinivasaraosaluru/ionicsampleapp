import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../services/data.service';
import { ContactPlugin } from 'contacts-plugin';

// const { ContactPlugin } = Plugin;

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})

export class ViewMessagePage implements OnInit {
  contacts: string[] = [];
  // const result : string[] = [];

  public message!: Message;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // this.message = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  async loadContacts(){
    this.contacts =  (await ContactPlugin.getContacts('Whatever filter')).results;
    console.log("My Contacts", this.contacts);
  }
}
