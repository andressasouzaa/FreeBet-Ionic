import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import "firebase/firestore";
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor() {
    let config = {
      apiKey: "AIzaSyB7NNRvq7xoUdWA-sFDdFWcU8s6zhGP2rw",
      authDomain: "projetofinalmoveis.firebaseapp.com",
      databaseURL: "https://projetofinalmoveis.firebaseio.com",
      projectId: "projetofinalmoveis",
      storageBucket: "projetofinalmoveis.appspot.com",
      messagingSenderId: "547658280865"
    }
    firebase.initializeApp(config);
  }

  db(){
    return firebase.firestore();
  }

  auth(){
    return firebase.auth();
  }

}
