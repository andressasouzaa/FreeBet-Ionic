import { Component,ViewChild } from '@angular/core';
import { Nav ,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SearchGamePage } from '../pages/search-game/search-game';

import {Facebook} from '@ionic-native/facebook';
import { GamesPage } from '../pages/games/games';
import { TabelaPage } from '../pages/tabela/tabela';

import { UsuarioProvider } from './../providers/usuario/usuario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public usuario:UsuarioProvider,public facebook:Facebook,public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Procurar Bolão', component: SearchGamePage },
      { title: 'Bolões Inscritos', component: GamesPage },
      { title: 'Resultados Copa', component: TabelaPage }
    ];
    
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  async logoutFace(){
    let  me = await this.verificaFace();
    if( me ){
      await this.facebook.logout();
      this.nav.setRoot(LoginPage);
    }else{
      this.nav.setRoot(LoginPage);
    }
  }

  async verificaFace(){
    await this.facebook.getLoginStatus();
  }

}


