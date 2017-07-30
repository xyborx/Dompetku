import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-transaction-list',
  templateUrl: 'transaction-list.html',
})
export class TransactionListPage {

  constructor(public navCtrl: NavController, private menuCtrl: MenuController, public user: User) {
    this.menuCtrl.enable(true, 'myMenu');
  }

}