import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { GamesPage } from '../games/games';
import { SettingsPage } from '../settings/settings';

import { Http} from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import {Screenshot } from '@ionic-native/screenshot';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { SearchGamePage } from '../search-game/search-game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public search = {
    date: new Date().toISOString()
  }
  public tabelas =[];
  public message = null;
  public subject = null;
  public file = '';
  public link ='';
  public a1 = '';
  public a2 = '';
  public dateini = Date;
  public datefim = Date;

  
  constructor(public usuario:UsuarioProvider,public firebase:FirebaseProvider,private screenshot:Screenshot,private socialSharing: SocialSharing,public http:Http,public navCtrl: NavController, public popoverCtrl: PopoverController,public iab:InAppBrowser) {
    this.modeloGet();
  }
  modeloGet(){
    this.tabelas = [];
    let parametros = 'sports';
    let headers = '';
    let url = `https://content.guardianapis.com/search?sports&api-key=cf6a10c6-3991-452a-8cb3-a0cbb6c589bc`;

    this.http.get(url, headers).subscribe(
      sucesso => { 
        let news = sucesso.json().response.results;
        console.log(sucesso.json());
        for( let i=0;i < news.length ; i++){
          this.tabelas.push({
            titulo: news[i].webTitle,
            categoria: news[i].sectionName,
            url: news[i].webUrl
          });
        }
      },
      erro => { console.error(erro); }
    );
  }

  abrirPagina(object){
    let url  = object.url;
    const browser = this.iab.create(url);
    browser.show();
  }

  socialS(object){
    let msg = object.webTitle;
    let url = object.url;
    this.socialSharing.share(msg,this.subject,this.file,url).then(()=>{
    } ).catch(()=>{

    });
  }

  salvarFoto(){
    this.screenshot.save('jpg',80,'myscreenshot.jpg');
  }

  // FUNÇÃO PARA CRIAR NOVO BOLÃO
async doCreate(){
    await this.firebase.db().collection("bolao").add({
      adversario1: this.a1,
      adversario2: this.a2,
      dataInicio: this.dateini,
      dataFim: this.datefim,
      userId: this.usuario.get().uid
    });
    this.a1 = '';
    this.a2 = '';
    this.datefim = Date;
    this.dateini = Date;
    this.navCtrl.setRoot(SearchGamePage);
  }

  // FUNÇÃO PARA LISTAR BOLÕES ATIVOS
  doSearch(){
    this.navCtrl.push(GamesPage);
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
