import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController, MenuController, LoadingController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { Facebook } from '@ionic-native/facebook';
import { Http } from '@angular/http';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { UsuarioProvider } from './../../providers/usuario/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email ='';
  public senha ='';


  constructor(public facebook:Facebook,public http:Http,public nav: NavController,
     public forgotCtrl: AlertController, public menu: MenuController,
      public toastCtrl: ToastController,
      public usuario:UsuarioProvider,public firebase:FirebaseProvider, public loadingCtrl: LoadingController)  {
    this.menu.swipeEnable(false);

  }

  async verificaFace(){
    await this.facebook.getLoginStatus();
  }

  async loginEmail(){
    try{
      await this.firebase.auth().signInWithEmailAndPassword(this.email,this.senha);
      this.nav.setRoot(HomePage);
    }catch(e){
      throw new Error(e);
    }
    const loader = this.loadingCtrl.create({
      content: "",
      duration: 2000
    });
    loader.present();
  }

  async loginFace(){
    let me = this.verificaFace();
    let permissions = ['public_profile','email'];
    let response = await this.facebook.login(permissions);
    this.usuario['token'] = response.authResponse.accessToken;
    this.usuario['id'] = response.authResponse.userID;
    this.usuario['status'] = response.status;
    await this.dadosUsuario();
  }
    

  async dadosUsuario(){
    let dados = await this.facebook.api(`/me?fields=picture.width(320).height(320),name`,['public_profile']);
    this.usuario['foto'] = dados.picture.data.url;
    this.usuario['nome'] = dados.name;
    this.usuario['logado'] = 'conectado';
    this.firebase.auth().signInAnonymously();
    this.nav.setRoot(HomePage);
  }
  // chama a pagina de registro
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // chama a pagina de login 
  login() {
    const loader = this.loadingCtrl.create({
      content: "",
      duration: 2000
    });
    loader.present();
    this.nav.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  // esqueceu a senha

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Esqueceu sua senha?',
      message: "Insira seu e-mail para receber sua senha",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('clicou cancelar');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log('clicou enviar');
            let toast = this.toastCtrl.create({
              message: 'Verifique seu e-mail!',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
