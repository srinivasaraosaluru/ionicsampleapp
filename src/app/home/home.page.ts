import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService } from '../services/data.service';
import { ContactPlugin } from 'contacts-plugin';

import { Plugins , Capacitor} from '@capacitor/core'

// import {Em}
import { Emarsys } from '@rollershop/capacitor-emarsys-sdk';


export interface Contacts1 {
  // fromName: string;
  // subject: string;
  // date: string;
  // id: number;
  // read: boolean;
  firstName: string,
  lastName: string,
  telephone: string

}

const { EmarsysNotifications } = Plugins

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  constructor(private data: DataService) { }
  public contacts: Contacts1[] = [];
  public value!: string;


  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  async getContacts(){
    this.contacts =  (await ContactPlugin.getContacts('Whatever filter')).results;
    console.log("My Contacts", this.contacts);

  }

  async getUUID(){
    this.value =  (await ContactPlugin.getUUID('test')).value;
    console.log("My UUID", this.value);

    Emarsys.addListener('pushMessageEvent', message => {
      // do something
      alert("asdsad")
    });
  }

}
