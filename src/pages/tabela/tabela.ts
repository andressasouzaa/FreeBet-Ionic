import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabela',
  templateUrl: 'tabela.html',
})
export class TabelaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabelaPage');
  }
  // CONTROLE DE NOTIFICAÇÕES
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
  // CONTROLE DE CONFIGURAÇÕES
  goToAccount(){
    this.navCtrl.push(SettingsPage);
  }
}
