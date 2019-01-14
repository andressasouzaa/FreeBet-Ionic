import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,ToastController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { NotificationsPage } from '../notifications/notifications';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { UsuarioProvider } from './../../providers/usuario/usuario';

import { SocialSharing } from '@ionic-native/social-sharing';
import { GamesPage } from '../games/games';
/**
 * Generated class for the SearchGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-game',
  templateUrl: 'search-game.html',
})
export class SearchGamePage {

  public listas = [];
  public a1gol = [];
  public a2gol = [];
  public myInput = '';


  constructor(private socialSharing: SocialSharing,public toast:ToastController,public firebase:FirebaseProvider,public usuario:UsuarioProvider,public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  this.carregaBoloesSnapshot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchGamePage');
  }

// PUSH PAGE PARA INSCREVER EM BOLÃO ESCOLHIDO
// imagino que vai precisar receber o parametro ou item clicado


// CONTROLE DE NOTIFICAÇÕES
presentNotifications(myEvent) {
  console.log(myEvent);
  let popover = this.popoverCtrl.create(NotificationsPage);
  popover.present({
    ev: myEvent
  });
}
onCancel(){
  this.myInput='';
}
onInput(object){
}
// CONTROLE DE CONFIGURAÇÕES
goToAccount(){
  this.navCtrl.push(SettingsPage);
}

socialS(){
  this.socialSharing.share().then(()=>{
  } ).catch(()=>{
  });
}



async adiciona(object){
  await this.firebase.db().collection("inscritosbolao").add({
    a1gols: object.a1gol,
    a2gols: object.a2gol,
    time1: object.adversario1,
    time2: object.adversario2,
    userId: this.usuario.get().uid
  });
  let t = this.toast.create({
    message: "Chute adicionado ao bolao",
    duration: 2000,
    position: 'top'
  });
  t.present();
  this.navCtrl.setRoot(GamesPage);
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
