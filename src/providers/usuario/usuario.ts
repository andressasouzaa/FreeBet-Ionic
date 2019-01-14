
import { FirebaseProvider } from '../firebase/firebase';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public usuario = { uid: '', email: '',
  foto:'',token:'',id:'',status:'',logado:'false'};

  
  constructor(public firebase:FirebaseProvider) {
    this.firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.usuario.uid = user.uid;
        this.usuario.email = user.email;
      }
    })
  }

  get(){
    return this.usuario;
  }
  
}
