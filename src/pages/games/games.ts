import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { NotificationsPage } from '../notifications/notifications';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  public listas= [];

  constructor(public firebase:FirebaseProvider,public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  this.carregaBoloesSnapshot();
  this.carregaInscritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
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
async carregaInscritos(){
  this.firebase.db().collection("inscritosbolao").onSnapshot((snapshot) =>{
    this.listas = [];
    snapshot.docs.forEach(doc =>{
      this.listas.push({ id: doc.id, ...doc.data()
      });
    })
  });
}


async carregaBoloesSnapshot(){
  this.firebase.db().collection("bolao").onSnapshot((snapshot) =>{
    this.listas = [];
    snapshot.docs.forEach(doc =>{
      this.listas.push({ id: doc.id, ...doc.data()
      });
    })
  });
}

}