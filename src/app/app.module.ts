import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SearchGamePage } from '../pages/search-game/search-game';
import { GamesPage } from '../pages/games/games';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';

import {InAppBrowser } from '@ionic-native/in-app-browser'
import {Screenshot } from '@ionic-native/screenshot';
import { Facebook } from '@ionic-native/facebook';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { TabelaPage } from '../pages/tabela/tabela';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage, 
    RegisterPage,
    SearchGamePage, 
    GamesPage, 
    NotificationsPage,
    SettingsPage, 
    TabelaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SearchGamePage,
    GamesPage, 
    NotificationsPage,
    SettingsPage,
    TabelaPage
  
  ],
  providers: [
    StatusBar,
    FirebaseProvider,
    UsuarioProvider,
    SocialSharing,
    Facebook,
    Screenshot,
    InAppBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
