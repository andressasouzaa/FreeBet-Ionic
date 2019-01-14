webpackJsonp([7],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, firebase, usuario, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.usuario = usuario;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.senha = '';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.criarConta = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)];
                    case 1:
                        _a.sent();
                        this.register();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 3:
                        loader = this.loadingCtrl.create({
                            content: "Cadastrando...",
                            duration: 3000
                        });
                        loader.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // após registro vai para a página inicial
    RegisterPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // vai para a pagina de login
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/register/register.html"*/'\n<ion-content class="auth-page">\n    <div class="login-content">\n  \n      <!--ÁREA DE LOGO-->\n      <div padding text-center>\n        <div class="logo"></div>\n      </div>\n  \n      <!--FORMULÁRIO DE LOGIN-->\n      <form class="list-form">\n          <h4 ion-text class="text-white">\n            <P text-center>CADASTRE-SE</P>\n          </h4>\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="md-mail" item-start class="text-white"></ion-icon>\n              Email\n          </ion-label>\n          <ion-input [(ngModel)]="email"  name="Email" type="email"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="md-lock" item-start class="text-white"></ion-icon>\n              Senha\n          </ion-label>\n          <ion-input type="password" name="Senha" [(ngModel)]="senha"></ion-input>\n        </ion-item>\n      </form>\n  \n      <div margin-top>\n        <button ion-button icon-start block color="dark" tappable (click)="criarConta()">\n            <ion-icon name="log-in"></ion-icon>\n              ENTRAR\n        </button>\n  \n        <!--LOGIN COM REDES SOCIAIS (FACEBOOK E TWITTER)-->\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-facebook">\n                <ion-icon name="logo-facebook"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-only block class="btn-twitter">\n                  <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  \n      <!-- VOLTAR PARA PÁGINA -->\n      <div text-center margin-top>\n        <span ion-text color="white" tappable (click)="login()">Já possuo uma conta!</span>\n      </div>\n  \n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabelaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabelaPage = /** @class */ (function () {
    function TabelaPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    TabelaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabelaPage');
    };
    // CONTROLE DE NOTIFICAÇÕES
    TabelaPage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    // CONTROLE DE CONFIGURAÇÕES
    TabelaPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    TabelaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabela',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/tabela/tabela.html"*/'<!--\n  Generated template for the TabelaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <strong>FREE</strong>BET\n      </ion-title>\n      <ion-buttons end>\n  \n        <!--ÁREA DE NOTIFICAÇÕES E CONFIGURAÇÕES-->\n        <button ion-button tappable (click)="presentNotifications($event)">\n          <ion-icon name="notifications"></ion-icon>\n        </button>\n        <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content class="card-background-page">\n\n      <ion-card>\n        <img src="assets/imgs/1.png"/>\n      </ion-card>\n    \n      <ion-card>\n          <img src="assets/imgs/2.png">\n      </ion-card>\n    \n      <ion-card>\n        <img src="assets/imgs/3.png"/>\n      </ion-card>\n    \n    </ion-content>\n'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/tabela/tabela.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], TabelaPage);
    return TabelaPage;
}());

//# sourceMappingURL=tabela.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/games/games.module": [
		300,
		6
	],
	"../pages/login/login.module": [
		301,
		5
	],
	"../pages/notifications/notifications.module": [
		302,
		4
	],
	"../pages/register/register.module": [
		303,
		3
	],
	"../pages/search-game/search-game.module": [
		304,
		2
	],
	"../pages/settings/settings.module": [
		305,
		1
	],
	"../pages/tabela/tabela.module": [
		306,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_game_search_game__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_games_games__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screenshot__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_usuario_usuario__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabela_tabela__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_game_search_game__["a" /* SearchGamePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_games_games__["a" /* GamesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabela_tabela__["a" /* TabelaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'GamesPage', segment: 'games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-game/search-game.module#SearchGamePageModule', name: 'SearchGamePage', segment: 'search-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabela/tabela.module#TabelaPageModule', name: 'TabelaPage', segment: 'tabela', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_game_search_game__["a" /* SearchGamePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_games_games__["a" /* GamesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabela_tabela__["a" /* TabelaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__["a" /* FirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_usuario_usuario__["a" /* UsuarioProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_game_search_game__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_games_games__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabela_tabela__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var MyApp = /** @class */ (function () {
    function MyApp(usuario, facebook, platform, statusBar, splashScreen) {
        this.usuario = usuario;
        this.facebook = facebook;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Procurar Bolão', component: __WEBPACK_IMPORTED_MODULE_6__pages_search_game_search_game__["a" /* SearchGamePage */] },
            { title: 'Bolões Inscritos', component: __WEBPACK_IMPORTED_MODULE_8__pages_games_games__["a" /* GamesPage */] },
            { title: 'Resultados Copa', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabela_tabela__["a" /* TabelaPage */] }
        ];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logoutFace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.verificaFace()];
                    case 1:
                        me = _a.sent();
                        if (!me) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.facebook.logout()];
                    case 2:
                        _a.sent();
                        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
                        return [3 /*break*/, 4];
                    case 3:
                        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.verificaFace = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.facebook.getLoginStatus()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-card>\n        <ion-item>\n          <ion-icon item-start>\n            <img src="assets/imgs/logo.png">\n          </ion-icon>\n        </ion-item>\n        <h2 padding >{{usuario.nome}}</h2>\n        \n      </ion-card>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n        <button menuClose ion-item (click)="logoutFace()">Deslogar</button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider() {
        var config = {
            apiKey: "AIzaSyB7NNRvq7xoUdWA-sFDdFWcU8s6zhGP2rw",
            authDomain: "projetofinalmoveis.firebaseapp.com",
            databaseURL: "https://projetofinalmoveis.firebaseio.com",
            projectId: "projetofinalmoveis",
            storageBucket: "projetofinalmoveis.appspot.com",
            messagingSenderId: "547658280865"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](config);
    }
    FirebaseProvider.prototype.db = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]();
    };
    FirebaseProvider.prototype.auth = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]();
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.usuario = { uid: '', email: '',
            foto: '', token: '', id: '', status: '', logado: 'false' };
        this.firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.usuario.uid = user.uid;
                _this.usuario.email = user.email;
            }
        });
    }
    UsuarioProvider.prototype.get = function () {
        return this.usuario;
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__firebase_firebase__["a" /* FirebaseProvider */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    // CHAMADA PARA LOGOUT
    SettingsPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- -->\n<!-- -->\n<ion-header class="no-shadow">\n\n    <ion-navbar class="no-border">\n      <ion-title>\n        <ion-icon name="cog" class="text-primary"></ion-icon>\n        <span class="text-primary">Configurações</span>\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content class="common-bg">\n    <!--ÁREA DE CONFIGURAÇÕES DE USUÁRIO-->\n    <ion-item-group>\n      <ion-item-divider color="lightgrey" class="bold">Configurações de Usuário</ion-item-divider>\n      <ion-item>\n        <ion-label>Linguagem</ion-label>\n        <ion-select [(ngModel)]="language" cancelText="Cancelar" okText="OK">\n          <ion-option value="pt-BR" selected="true">Português (PT-BR)</ion-option>\n          <ion-option value="en-US">English (US)</ion-option>\n          <ion-option value="en-GB">English (UK)</ion-option>\n          <ion-option value="en-CA">English (CA)</ion-option>\n          <ion-option value="en-AU">English (AU)</ion-option>\n          <ion-option value="en-IN">English (IN)</ion-option>\n          <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n          <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n          <ion-option value="es-ES">Spanish (ES)</ion-option>\n          <ion-option value="es-AR">Spanish (AR)</ion-option>\n          <ion-option value="es-CO">Spanish (CO)</ion-option>\n          <ion-option value="es-CL">Spanish (CL)</ion-option>\n          <ion-option value="es-MX">Spanish (MX)</ion-option>\n          <ion-option value="zh-CN">Chinese (CN)</ion-option>\n          <ion-option value="zh-TW">Chinese (TW)</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Região/Cidade</ion-label>\n        <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n          <ion-option value="1" selected="true">Ponta-Grossa</ion-option>\n          <ion-option value="2">Carambeí</ion-option>\n          <ion-option value="3">Castro</ion-option>\n          <ion-option value="4">Curitiba</ion-option>\n          <ion-option value="5">Imbituva</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-item-group>\n\n    <!-- ÁREA DE CONFIGURAÇÕES DO APLICATIVO -->\n    <ion-item-group>\n      <ion-item-divider color="lightgrey" class="bold">Configurações</ion-item-divider>\n      <ion-item>\n        <span>Limpar Histórico</span> <!-- será que conseguimos limpar o histórico de "recente"na busca?-->\n      </ion-item>\n      <ion-item>\n        <ion-label>Permitir Notificações?</ion-label>\n        <ion-toggle checked="false"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <span>Política de Privacidade</span> <!-- depois coloco um textinho padrão aqui hahaha-->\n      </ion-item>\n    </ion-item-group>  \n\n      <!-- ÁREA DE INFORMAÇÕES DO APLICATIVO -->\n      <ion-item-group>\n        <ion-item-divider color="lightgrey" class="bold">Sobre o Aplicativo</ion-item-divider>\n            <ion-item>\n                <span>API\'s UTILIZADAS:</span>\n                <ion-item>\n                    <span>InAppBrowser</span>\n                </ion-item>\n                <ion-item>\n                  <span>HTTP</span>\n                </ion-item>\n                <ion-item>\n                    <span>Facebook</span>\n                </ion-item>\n                <ion-item>\n                    <span>Firebase</span>\n                </ion-item>\n                <ion-item>\n                    <span>SocialSharing</span>\n                </ion-item>\n               <ion-item>\n                  <span>TheGuardian</span>\n               </ion-item>\n                <ion-item>\n                    <span>Toast</span>\n                </ion-item>\n              </ion-item>\n          </ion-item-group>\n      <!-- ÁREA DE DESENVOLVEDORES -->\n      <ion-item-group>\n          <ion-item-divider color="lightgrey" class="bold">Desenvolvedores:</ion-item-divider>\n              <ion-item>\n                <span>Andressa Oliveira</span>\n                </ion-item>\n                <ion-item>\n                  <span>Kaique Moraes</span>\n                </ion-item>\n              </ion-item-group>\n  \n    <!--ÁREA DE LOGOUT-->\n    <button ion-button color="primary" full tappable (click)="logout()">SAIR</button>\n  </ion-content>\n  '/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/notifications/notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--ÁREA DE NOTIFICAÇÕES-->\n<ion-list class="no-margin">\n    <ion-list-header class="no-margin">\n      <ion-icon name="notifications" color="primary"></ion-icon>\n      <span ion-text color="primary" class="bold">Notificações</span>\n    </ion-list-header>\n    <!--ÁREA DE NOTIFICAÇÕES NÃO LIDAS-->\n    <button ion-item color="danger" class="text-1x" tappable (click)="close()">\n      <ion-icon name="mail"></ion-icon>\n      Novo bolão na área!\n    </button>\n    <button ion-item color="danger" class="text-1x" tappable (click)="close()">\n      <ion-icon name="mail"></ion-icon>\n      Resultado de bolão\n    </button>\n    <!-- ÁREA DE NOTIFICAÇÕES LIDAS-->\n    <button ion-item class="text-1x" tappable (click)="close()">\n      <ion-icon name="mail-open" color="dark"></ion-icon>\n      <span ion-text color="dark">Convite para bolão</span>\n    </button>\n    <button ion-item class="text-1x" tappable (click)="close()">\n      <ion-icon name="mail-open" color="dark"></ion-icon>\n      <span ion-text color="dark">Convite para bolão</span>\n    </button>\n  </ion-list>'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(31);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamesPage = /** @class */ (function () {
    function GamesPage(firebase, navCtrl, navParams, popoverCtrl) {
        this.firebase = firebase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.listas = [];
        this.carregaBoloesSnapshot();
        this.carregaInscritos();
    }
    GamesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamesPage');
    };
    // CONTROLE DE NOTIFICAÇÕES
    GamesPage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    // CONTROLE DE CONFIGURAÇÕES
    GamesPage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    GamesPage.prototype.carregaInscritos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.firebase.db().collection("inscritosbolao").onSnapshot(function (snapshot) {
                    _this.listas = [];
                    snapshot.docs.forEach(function (doc) {
                        _this.listas.push(__assign({ id: doc.id }, doc.data()));
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    GamesPage.prototype.carregaBoloesSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.firebase.db().collection("bolao").onSnapshot(function (snapshot) {
                    _this.listas = [];
                    snapshot.docs.forEach(function (doc) {
                        _this.listas.push(__assign({ id: doc.id }, doc.data()));
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    GamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-games',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/games/games.html"*/'<!--\n  Generated template for the GamesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!--TELA DESTINA A LISTAR OS BOLÕES ATIVOS-->\n<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <strong>FREE</strong>BET\n      </ion-title>\n      <ion-buttons end>\n  \n        <!--ÁREA DE NOTIFICAÇÕES E CONFIGURAÇÕES-->\n        <button ion-button tappable (click)="presentNotifications($event)">\n          <ion-icon name="notifications"></ion-icon>\n        </button>\n        <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n <!--ÁREA DE BUSCA DE BOLÕES-->\n <ion-content>\n    <!--SEARCHBAR PARA FILTRAR RESULTADOS-->\n      <ion-searchbar\n      [(ngModel)]="myInput" \n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n    <ion-card>\n        <p padding>BOLÕES INSCRITOS</p>\n    </ion-card>\n    <ion-card *ngFor="let lista of listas" >\n            <ion-item text-uppercase class="start">  \n                <ion-label>{{lista.time1 }}</ion-label>\n                <ion-label>{{lista.time2 }}</ion-label>\n          </ion-item>\n          <ion-item text-uppercase class="start">  \n              <ion-label>{{lista.a1gols }}</ion-label>\n              <ion-label>{{lista.a2gols }}</ion-label>\n        </ion-item>\n    </ion-card>\n    \n\n    <!--ÁREA DE BOLÕES DISPONÍVEIS-->\n    <!--NÃO COLOQUEI NENHUM TIPO AQUI PQ IMAGINO QUE VC VAI ESCOLHER COMO VAI LISTAR-->\n\n\n</ion-content>'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/games/games.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], GamesPage);
    return GamesPage;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(facebook, http, nav, forgotCtrl, menu, toastCtrl, usuario, firebase, loadingCtrl) {
        this.facebook = facebook;
        this.http = http;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.usuario = usuario;
        this.firebase = firebase;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.senha = '';
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.verificaFace = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.facebook.getLoginStatus()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.firebase.auth().signInWithEmailAndPassword(this.email, this.senha)];
                    case 1:
                        _a.sent();
                        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 3:
                        loader = this.loadingCtrl.create({
                            content: "",
                            duration: 2000
                        });
                        loader.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginFace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me, permissions, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        me = this.verificaFace();
                        permissions = ['public_profile', 'email'];
                        return [4 /*yield*/, this.facebook.login(permissions)];
                    case 1:
                        response = _a.sent();
                        this.usuario['token'] = response.authResponse.accessToken;
                        this.usuario['id'] = response.authResponse.userID;
                        this.usuario['status'] = response.status;
                        return [4 /*yield*/, this.dadosUsuario()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.dadosUsuario = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dados;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.facebook.api("/me?fields=picture.width(320).height(320),name", ['public_profile'])];
                    case 1:
                        dados = _a.sent();
                        this.usuario['foto'] = dados.picture.data.url;
                        this.usuario['nome'] = dados.name;
                        this.usuario['logado'] = 'conectado';
                        this.firebase.auth().signInAnonymously();
                        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    // chama a pagina de registro
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // chama a pagina de login (precisa tratar)
    LoginPage.prototype.login = function () {
        var loader = this.loadingCtrl.create({
            content: "",
            duration: 2000
        });
        loader.present();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // esqueceu a senha
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
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
                    handler: function (data) {
                        console.log('clicou cancelar');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        console.log('clicou enviar');
                        var toast = _this.toastCtrl.create({
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
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="animated fadeIn login auth-page">\n    <div class="login-content">\n  \n      <!-- ÁREA DA LOGO -->\n      <div padding-horizontal text-center class="animated fadeInDown">\n        <div class="logo"></div>\n        <h4 ion-text class="text-white">\n          <strong>OLÁ,</strong> SEJA BEM VINDO!\n        </h4>\n      </div>\n  \n      <!-- ÁREA DE LOGIN -->\n      <form class="list-form">\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="md-mail" item-start class="text-white"></ion-icon>\n            Email\n          </ion-label>\n          <ion-input [(ngModel)]="email"  name="Email" type="email" ></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label  floating>\n            <ion-icon name="md-lock" item-start class="text-white"></ion-icon>\n            Senha\n          </ion-label>\n          <ion-input type="password" name="Senha" [(ngModel)]="senha"></ion-input>\n        </ion-item>\n      </form>\n  \n      <p text-right ion-text color="white" tappable (click)="forgotPass()"><strong>Esqueceu a senha?</strong></p>\n  \n      <div>\n        <button ion-button icon-start block color="dark" tappable (click)="loginEmail()">\n          <ion-icon name="log-in"></ion-icon>\n          ENTRAR\n        </button>\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-facebook" (click)="loginFace()">\n                <ion-icon name="logo-facebook"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              \n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-only block class="btn-twitter">\n                  <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <!-- ÁREA DE REGISTRO-->\n      </div>\n      <div text-center margin-top>\n        <span ion-text color="white" tappable (click)="register()"><strong>Criar conta</strong></span>\n      </div>\n      \n      <div text-center margin-top>\n      <span ion-text color="white" tappable (click)="login()"><strong>Entrar Anônimo</strong></span>\n        </div>\n  \n    </div>\n  </ion-content>\n  \n'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__games_games__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screenshot__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_firebase_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_game_search_game__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var HomePage = /** @class */ (function () {
    // tenho que add private storage: Storage no construtor mas fica dando erro ainda
    function HomePage(usuario, firebase, screenshot, socialSharing, http, navCtrl, popoverCtrl, iab) {
        this.usuario = usuario;
        this.firebase = firebase;
        this.screenshot = screenshot;
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.iab = iab;
        this.search = {
            date: new Date().toISOString()
        };
        this.tabelas = [];
        this.message = null;
        this.subject = null;
        this.file = '';
        this.link = '';
        this.a1 = '';
        this.a2 = '';
        this.dateini = Date;
        this.datefim = Date;
        this.modeloGet();
    }
    HomePage.prototype.modeloGet = function () {
        var _this = this;
        this.tabelas = [];
        var parametros = 'sports';
        var headers = '';
        var url = "https://content.guardianapis.com/search?sports&api-key=cf6a10c6-3991-452a-8cb3-a0cbb6c589bc";
        this.http.get(url, headers).subscribe(function (sucesso) {
            var news = sucesso.json().response.results;
            console.log(sucesso.json());
            for (var i = 0; i < news.length; i++) {
                _this.tabelas.push({
                    titulo: news[i].webTitle,
                    categoria: news[i].sectionName,
                    url: news[i].webUrl
                });
            }
        }, function (erro) { console.error(erro); });
    };
    HomePage.prototype.abrirPagina = function (object) {
        var url = object.url;
        var browser = this.iab.create(url);
        browser.show();
    };
    HomePage.prototype.socialS = function (object) {
        var msg = object.webTitle;
        var url = object.url;
        this.socialSharing.share(msg, this.subject, this.file, url).then(function () {
        }).catch(function () {
        });
    };
    HomePage.prototype.salvarFoto = function () {
        this.screenshot.save('jpg', 80, 'myscreenshot.jpg');
    };
    // FUNÇÃO PARA CRIAR NOVO BOLÃO (ajeita aqui) 
    HomePage.prototype.doCreate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebase.db().collection("bolao").add({
                            adversario1: this.a1,
                            adversario2: this.a2,
                            dataInicio: this.dateini,
                            dataFim: this.datefim,
                            userId: this.usuario.get().uid
                        })];
                    case 1:
                        _a.sent();
                        this.a1 = '';
                        this.a2 = '';
                        this.datefim = Date;
                        this.dateini = Date;
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__search_game_search_game__["a" /* SearchGamePage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    // FUNÇÃO PARA LISTAR BOLÕES ATIVOS (ajeita aqui)
    HomePage.prototype.doSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__games_games__["a" /* GamesPage */]);
    };
    // CONTROLE DE NOTIFICAÇÕES
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    // CONTROLE DE CONFIGURAÇÕES
    HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/home/home.html"*/'\n<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>FREE</strong>BET\n    </ion-title>\n    <ion-buttons end>\n\n      <!--ÁREA DE NOTIFICAÇÕES E CONFIGURAÇÕES-->\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!--ÁREA PARA NOTÍCIAS SOBRE ESPORTES NO THE GUARDIAN-->\n<ion-content padding class="animated fadeIn common-bg" color="white">\n\n    <ion-card no-margin margin-bottom class="full-width">\n        <p padding>NOTÍCIAS</p>\n      <ion-slides>\n<!-- FAZ A MÁGICA ACONTECER AQUI DAS NOTÍCIAS DO THE GUARDIAN KKKK-->\n        <ion-slide color="white" *ngFor="let tabela of tabelas">\n          {{tabela.titulo}}\n          <ion-item>\n              <button ion-button full block color="white" (click)="abrirPagina(tabela)">Abrir Link\n                  <ion-icon padding name="md-paper"></ion-icon>\n                </button>\n          </ion-item>\n          <ion-item>\n              <button ion-button full block color="white" (click)="socialS(tabela)">Compartilhar\n                  <ion-icon padding name="ios-share-alt-outline"></ion-icon>\n                </button>\n          </ion-item>\n      </ion-slide>\n      </ion-slides>\n    </ion-card>\n\n\n<!--ÁREA DE CRIAÇÃO DE NOVAS APOSTAS-->\n      <ion-card no-margin margin-bottom class="full-width">\n        <p padding>CRIE SEU BOLÃO</p>\n        <ion-item>\n            <ion-label>Adversário 1</ion-label>\n            <ion-select [(ngModel)]="a1">\n              <ion-option value="alemanha">Alemanha</ion-option>\n              <ion-option value="arabia">Arábia Saudita</ion-option>\n              <ion-option value="argentina">Argentina</ion-option>\n              <ion-option value="australia">Austrália</ion-option>\n              <ion-option value="belgica">Bélgica</ion-option>\n              <ion-option value="brasil">Brasil</ion-option>\n              <ion-option value="colombia">Colombia</ion-option>\n              <ion-option value="coreiadosul">Coreia do Sul</ion-option>\n              <ion-option value="costarica">Costa Rica</ion-option>\n              <ion-option value="croacia">Croacia</ion-option>\n              <ion-option value="dinamarca">Dinamarca</ion-option>\n              <ion-option value="egito">Egito</ion-option>\n              <ion-option value="espanha">Espanha</ion-option>\n              <ion-option value="franca">França</ion-option>\n              <ion-option value="inglaterra">Inglaterra</ion-option>\n              <ion-option value="ira">Irã</ion-option>\n              <ion-option value="islandia">Islandia</ion-option>\n              <ion-option value="japao">Japao</ion-option>\n              <ion-option value="marrocos">Marrocos</ion-option>\n              <ion-option value="mexico">Mexico</ion-option>\n              <ion-option value="nigeria">Nigéria</ion-option>\n              <ion-option value="panama">Panamá</ion-option>\n              <ion-option value="peru">Peru</ion-option>\n              <ion-option value="polonia">Polônia</ion-option>\n              <ion-option value="portugal">Portugal</ion-option>\n              <ion-option value="russia">Rússia</ion-option>\n              <ion-option value="senegal">Senegal</ion-option>\n              <ion-option value="servia">Sérvia</ion-option>\n              <ion-option value="suecia">Suécia</ion-option>\n              <ion-option value="suica">Suiça</ion-option>\n              <ion-option value="tunisia">Tunísia</ion-option>\n              <ion-option value="uruguai">Uruguai</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label>Adversário 2</ion-label>\n              <ion-select [(ngModel)]="a2">\n                <ion-option value="alemanha">Alemanha</ion-option>\n                <ion-option value="arabia">Arábia Saudita</ion-option>\n                <ion-option value="argentina">Argentina</ion-option>\n                <ion-option value="australia">Austrália</ion-option>\n                <ion-option value="belgica">Bélgica</ion-option>\n                <ion-option value="brasil">Brasil</ion-option>\n                <ion-option value="colombia">Colombia</ion-option>\n                <ion-option value="coreiadosul">Coreia do Sul</ion-option>\n                <ion-option value="costarica">Costa Rica</ion-option>\n                <ion-option value="croacia">Croacia</ion-option>\n                <ion-option value="dinamarca">Dinamarca</ion-option>\n                <ion-option value="egito">Egito</ion-option>\n                <ion-option value="espanha">Espanha</ion-option>\n                <ion-option value="franca">França</ion-option>\n                <ion-option value="inglaterra">Inglaterra</ion-option>\n                <ion-option value="ira">Irã</ion-option>\n                <ion-option value="islandia">Islandia</ion-option>\n                <ion-option value="japao">Japao</ion-option>\n                <ion-option value="marrocos">Marrocos</ion-option>\n                <ion-option value="mexico">Mexico</ion-option>\n                <ion-option value="nigeria">Nigéria</ion-option>\n                <ion-option value="panama">Panamá</ion-option>\n                <ion-option value="peru">Peru</ion-option>\n                <ion-option value="polonia">Polônia</ion-option>\n                <ion-option value="portugal">Portugal</ion-option>\n                <ion-option value="russia">Rússia</ion-option>\n                <ion-option value="senegal">Senegal</ion-option>\n                <ion-option value="servia">Sérvia</ion-option>\n                <ion-option value="suecia">Suécia</ion-option>\n                <ion-option value="suica">Suiça</ion-option>\n                <ion-option value="tunisia">Tunísia</ion-option>\n                <ion-option value="uruguai">Uruguai</ion-option>\n              </ion-select>\n            </ion-item>\n    <p padding>Início:</p>\n    <ion-item> \n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime class="no-pl" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" [(ngModel)]="dateini"></ion-datetime>\n    </ion-item>\n    <p padding>Fim:</p>\n    <ion-item> \n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime class="no-pl" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" [(ngModel)]="datefim"></ion-datetime>\n    </ion-item>\n    \n  </ion-card>\n\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doCreate()">\n    <ion-icon name="md-add-circle"></ion-icon> Criar Novo Bolão\n  </button>\n\n <!-- <button ion-button (click)="salvarFoto()">SalvarFoto</button> -->\n \n</ion-content>'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__games_games__ = __webpack_require__(47);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the SearchGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchGamePage = /** @class */ (function () {
    function SearchGamePage(socialSharing, toast, firebase, usuario, navCtrl, navParams, popoverCtrl) {
        this.socialSharing = socialSharing;
        this.toast = toast;
        this.firebase = firebase;
        this.usuario = usuario;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.listas = [];
        this.a1gol = [];
        this.a2gol = [];
        this.myInput = '';
        this.carregaBoloesSnapshot();
    }
    SearchGamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchGamePage');
    };
    // PUSH PAGE PARA INSCREVER EM BOLÃO ESCOLHIDO
    // imagino que vai precisar receber o parametro ou item clicado
    // CONTROLE DE NOTIFICAÇÕES
    SearchGamePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    SearchGamePage.prototype.onCancel = function () {
        this.myInput = '';
    };
    SearchGamePage.prototype.onInput = function (object) {
    };
    // CONTROLE DE CONFIGURAÇÕES
    SearchGamePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    SearchGamePage.prototype.socialS = function () {
        this.socialSharing.share().then(function () {
        }).catch(function () {
        });
    };
    SearchGamePage.prototype.adiciona = function (object) {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebase.db().collection("inscritosbolao").add({
                            a1gols: object.a1gol,
                            a2gols: object.a2gol,
                            time1: object.adversario1,
                            time2: object.adversario2,
                            userId: this.usuario.get().uid
                        })];
                    case 1:
                        _a.sent();
                        t = this.toast.create({
                            message: "Chute adicionado ao bolao",
                            duration: 2000,
                            position: 'top'
                        });
                        t.present();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__games_games__["a" /* GamesPage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchGamePage.prototype.carregaBoloesSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.firebase.db().collection("bolao").onSnapshot(function (snapshot) {
                    _this.listas = [];
                    snapshot.docs.forEach(function (doc) {
                        _this.listas.push(__assign({ id: doc.id }, doc.data()));
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SearchGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-game',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/search-game/search-game.html"*/'<!--\n  Generated template for the SearchGamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- # -->\n<ion-header color="primary">\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <strong>FREE</strong>BET\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <!--ÁREA DE BUSCA DE BOLÕES-->\n  <ion-content>\n    <ion-card>\n        <p padding>BOLÕES DISPONÍVEIS</p>\n    </ion-card>\n\n    <ion-card *ngFor="let lista of listas">\n      <ion-card-content>\n        <ion-item text-uppercase class="start">  \n            <ion-label>{{lista.adversario1 }}</ion-label>\n            <ion-select [(ngModel)]="lista.a1gol">\n              <ion-option value="0">0</ion-option>\n              <ion-option value="1">1</ion-option>\n              <ion-option value="2">2</ion-option>          \n              <ion-option value="3">3</ion-option>\n              <ion-option value="4">4</ion-option>          \n              <ion-option value="5">5</ion-option>\n              <ion-option value="6">6</ion-option>\n              <ion-option value="7">7</ion-option>          \n              <ion-option value="8">8</ion-option>\n              <ion-option value="9">9</ion-option>\n            </ion-select>\n            <!-- POE O PAU AQUI  O XIZINHO PFV -->\n      </ion-item>    \n      <ion-item>\n           <ion-icon name="md-close"></ion-icon>\n        </ion-item>\n      <ion-item text-uppercase class="start">    \n          <ion-label>{{lista.adversario2 }}</ion-label>\n            <!-- POE O PAU AQUI  O ESPACAMENTO AQUI ENTRE OS SELETORES N SEI FAZER SE CONSEGUIR EH GOD  PFV -->\n            <ion-select [(ngModel)]="lista.a2gol">\n                <ion-option value="0">0</ion-option>\n                <ion-option value="1">1</ion-option>\n                <ion-option value="2">2</ion-option>          \n                <ion-option value="3">3</ion-option>\n                <ion-option value="4">4</ion-option>          \n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>          \n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n              </ion-select>\n            </ion-item>\n        <button ion-button outline block item-end icon-start (click)="adiciona(lista)">\n          <ion-icon name="star"></ion-icon>\n          Participar\n        </button>\n        <ion-item>\n            <button ion-button full block color="white" (click)="socialS(tabela)">Compartilhar\n                <ion-icon padding name="ios-share-alt-outline"></ion-icon>\n              </button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/search-game/search-game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], SearchGamePage);
    return SearchGamePage;
}());

//# sourceMappingURL=search-game.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map