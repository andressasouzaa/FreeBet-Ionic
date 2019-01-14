import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { FirebaseProvider } from './../../providers/firebase/firebase';

import { UsuarioProvider } from './../../providers/usuario/usuario';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  public email = '';
  public senha = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase:FirebaseProvider,public usuario:UsuarioProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async criarConta(){
    try{
      await this.firebase.auth().createUserWithEmailAndPassword(this.email, this.senha);
      this.register();
    }catch(e){
      throw new Error(e);
    }
    const loader = this.loadingCtrl.create({
      content: "Cadastrando...",
      duration: 3000
    });
    loader.present();
  }
    // após registro vai para a página inicial
    register() {
      this.navCtrl.setRoot(HomePage);
    }
    // vai para a pagina de login
    login() {
      this.navCtrl.setRoot(LoginPage);
    }

}
