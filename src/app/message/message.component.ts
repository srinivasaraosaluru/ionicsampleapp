import { Component, Input } from '@angular/core';
import { Message } from '../services/data.service';
import { ContactPlugin } from 'contacts-plugin';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message?: Message;
  contacts: any[] = [];

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  // async loadContacts(){
  //   this.contacts =  (await ContactPlugin.getContacts('Whatever filter')).results;

  //   console.log("My Contacts", this.contacts);
  // }

}
