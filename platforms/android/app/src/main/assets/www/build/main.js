webpackJsonp([6],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
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
            selector: 'page-settings',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- -->\n<!-- -->\n<ion-header class="no-shadow">\n\n    <ion-navbar class="no-border">\n      <ion-title>\n        <ion-icon name="cog" class="text-primary"></ion-icon>\n        <span class="text-primary">Configurações</span>\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content class="common-bg">\n    <!--ÁREA DE CONFIGURAÇÕES DE USUÁRIO-->\n    <ion-item-group>\n      <ion-item-divider color="lightgrey" class="bold">Configurações de Usuário</ion-item-divider>\n      <ion-item>\n        <ion-label>Linguagem</ion-label>\n        <ion-select [(ngModel)]="language" cancelText="Cancelar" okText="OK">\n          <ion-option value="pt-BR" selected="true">Português (PT-BR)</ion-option>\n          <ion-option value="en-US">English (US)</ion-option>\n          <ion-option value="en-GB">English (UK)</ion-option>\n          <ion-option value="en-CA">English (CA)</ion-option>\n          <ion-option value="en-AU">English (AU)</ion-option>\n          <ion-option value="en-IN">English (IN)</ion-option>\n          <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n          <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n          <ion-option value="es-ES">Spanish (ES)</ion-option>\n          <ion-option value="es-AR">Spanish (AR)</ion-option>\n          <ion-option value="es-CO">Spanish (CO)</ion-option>\n          <ion-option value="es-CL">Spanish (CL)</ion-option>\n          <ion-option value="es-MX">Spanish (MX)</ion-option>\n          <ion-option value="zh-CN">Chinese (CN)</ion-option>\n          <ion-option value="zh-TW">Chinese (TW)</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Região/Cidade</ion-label>\n        <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n          <ion-option value="1" selected="true">Ponta-Grossa</ion-option>\n          <ion-option value="2">Carambeí</ion-option>\n          <ion-option value="3">Castro</ion-option>\n          <ion-option value="4">Curitiba</ion-option>\n          <ion-option value="5">Imbituva</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-item-group>\n\n    <!-- ÁREA DE CONFIGURAÇÕES DO APLICATIVO -->\n    <ion-item-group>\n      <ion-item-divider color="lightgrey" class="bold">Configurações</ion-item-divider>\n      <ion-item>\n        <span>Limpar Histórico</span> <!-- será que conseguimos limpar o histórico de "recente"na busca?-->\n      </ion-item>\n      <ion-item>\n        <ion-label>Permitir Notificações?</ion-label>\n        <ion-toggle checked="false"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <span>Política de Privacidade</span> <!-- depois coloco um textinho padrão aqui hahaha só pra ganharmos uns pontos-->\n      </ion-item>\n    </ion-item-group>  \n  \n    <!--ÁREA DE LOGOUT-->\n    <button ion-button color="primary" full tappable (click)="logout()">SAIR</button>\n  </ion-content>\n  '/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(170);
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
    function RegisterPage(navCtrl, navParams, firebase, usuario) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
        this.usuario = usuario;
        this.email = '';
        this.senha = '';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.criarConta = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
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
                    case 3: return [2 /*return*/];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/games/games.module": [
		299,
		5
	],
	"../pages/login/login.module": [
		300,
		4
	],
	"../pages/notifications/notifications.module": [
		301,
		3
	],
	"../pages/register/register.module": [
		302,
		2
	],
	"../pages/search-game/search-game.module": [
		304,
		1
	],
	"../pages/settings/settings.module": [
		303,
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function UsuarioProvider() {
        this.usuario = { nome: '', foto: '' };
    }
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_game_search_game__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_games_games__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screenshot__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_usuario_usuario__ = __webpack_require__(170);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */]
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
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-game/search-game.module#SearchGamePageModule', name: 'SearchGamePage', segment: 'search-game', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */]
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_game_search_game__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_games_games__ = __webpack_require__(55);
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
    function MyApp(facebook, platform, statusBar, splashScreen) {
        this.facebook = facebook;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Procurar Bolão', component: __WEBPACK_IMPORTED_MODULE_6__pages_search_game_search_game__["a" /* SearchGamePage */] },
            { title: 'Bolões Inscritos', component: __WEBPACK_IMPORTED_MODULE_8__pages_games_games__["a" /* GamesPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-card>\n        <ion-item>\n          <ion-icon item-start>\n            <img src="assets/imgs/logo.png">\n          </ion-icon>\n        </ion-item>\n        <h2 padding >Freebet</h2>\n        \n      </ion-card>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n        <button menuClose ion-item (click)="logoutFace()">Logout</button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__ = __webpack_require__(86);
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
    function LoginPage(facebook, http, nav, forgotCtrl, menu, toastCtrl, firebase) {
        this.facebook = facebook;
        this.http = http;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.firebase = firebase;
        this.usuario = { logado: 'false', token: '', id: '', status: '', foto: '', nome: '' };
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
            var e_1;
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
                    case 3: return [2 /*return*/];
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
                        this.usuario.token = response.authResponse.accessToken;
                        this.usuario.id = response.authResponse.userID;
                        this.usuario.status = response.status;
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
                        this.usuario.foto = dados.picture.data.url;
                        this.usuario.nome = dados.name;
                        this.usuario.logado = 'conectado';
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="animated fadeIn login auth-page">\n    <div class="login-content">\n  \n      <!-- ÁREA DA LOGO -->\n      <div padding-horizontal text-center class="animated fadeInDown">\n        <div class="logo"></div>\n        <h4 ion-text class="text-white">\n          <strong>OLÁ,</strong> SEJA BEM VINDO!\n        </h4>\n      </div>\n  \n      <!-- ÁREA DE LOGIN -->\n      <form class="list-form">\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="md-mail" item-start class="text-white"></ion-icon>\n            Email\n          </ion-label>\n          <ion-input [(ngModel)]="email"  name="Email" type="email" ></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label  floating>\n            <ion-icon name="md-lock" item-start class="text-white"></ion-icon>\n            Senha\n          </ion-label>\n          <ion-input type="password" name="Senha" [(ngModel)]="senha"></ion-input>\n        </ion-item>\n      </form>\n  \n      <p text-right ion-text color="white" tappable (click)="forgotPass()"><strong>Esqueceu a senha?</strong></p>\n  \n      <div>\n        <button ion-button icon-start block color="dark" tappable (click)="loginEmail()">\n          <ion-icon name="log-in"></ion-icon>\n          ENTRAR\n        </button>\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <button ion-button icon-only block class="btn-facebook" (click)="loginFace()">\n                <ion-icon name="logo-facebook"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              \n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-only block class="btn-twitter">\n                  <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <!-- ÁREA DE REGISTRO-->\n      </div>\n      <div text-center margin-top>\n        <span ion-text color="white" tappable (click)="register()"><strong>Criar conta</strong></span>\n      </div>\n      \n      <div text-center margin-top>\n      <span ion-text color="white" tappable (click)="login()"><strong>Entrar Anonimo</strong></span>\n        </div>\n  \n    </div>\n  </ion-content>\n  \n'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_game_search_game__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__games_games__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screenshot__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Storage } from '@ionic/storage';








var HomePage = /** @class */ (function () {
    // tenho que add private storage: Storage no construtor mas fica dando erro ainda
    function HomePage(screenshot, socialSharing, http, navCtrl, popoverCtrl, iab) {
        this.screenshot = screenshot;
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.iab = iab;
        this.search = {
            name: "BRASIL vs SUIÇA",
            date: new Date().toISOString()
        };
        this.tabelas = [];
        this.message = null;
        this.subject = null;
        this.file = '';
        this.link = '';
        this.modeloGet();
    }
    HomePage.prototype.modeloGet = function () {
        var _this = this;
        this.tabelas = [];
        var parametros = 'futebol';
        var headers = '';
        var url = "https://content.guardianapis.com/search?q=" + parametros + "&api-key=test";
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
    // ESCOLHER CONFRONTO
    HomePage.prototype.chooseBet = function (from) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_game_search_game__["a" /* SearchGamePage */], from);
    };
    // FUNÇÃO PARA CRIAR NOVO BOLÃO (ajeita aqui) 
    HomePage.prototype.doCreate = function () {
    };
    // FUNÇÃO PARA LISTAR BOLÕES ATIVOS (ajeita aqui)
    HomePage.prototype.doSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__games_games__["a" /* GamesPage */]);
    };
    // CONTROLE DE NOTIFICAÇÕES
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.goToAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/home/home.html"*/'\n<ion-header color="primary">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>FREE</strong>BET\n    </ion-title>\n    <ion-buttons end>\n\n      <!--ÁREA DE NOTIFICAÇÕES E CONFIGURAÇÕES-->\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!--ÁREA PARA NOTÍCIAS SOBRE ESPORTES NO THE GUARDIAN-->\n<ion-content padding class="animated fadeIn common-bg" color="white">\n\n    <ion-card no-margin margin-bottom class="full-width">\n        <p padding>NOTÍCIAS</p>\n      <ion-slides>\n<!-- FAZ A MÁGICA ACONTECER AQUI DAS NOTÍCIAS DO THE GUARDIAN KKKK-->\n        <ion-slide color="white" *ngFor="let tabela of tabelas">\n          {{tabela.titulo}}\n          <ion-item>\n              <button ion-button full block color="white" (click)="abrirPagina(tabela)">Abrir Link\n                  <ion-icon padding name="md-paper"></ion-icon>\n                </button>\n          </ion-item>\n          <ion-item>\n              <button ion-button full block color="white" (click)="socialS(tabela)">Compartilhar\n                  <ion-icon padding name="ios-share-alt-outline"></ion-icon>\n                </button>\n          </ion-item>\n      </ion-slide>\n      </ion-slides>\n    </ion-card>\n\n\n<!--ÁREA DE CRIAÇÃO DE NOVAS APOSTAS-->\n\n  <ion-card no-margin margin-bottom class="full-width">\n    <p padding>Confronto:</p>\n    <ion-item tappable (click)="chooseBet(\'from\')" class="border-bottom">\n      <ion-icon name="md-football" color="primary" item-left></ion-icon>\n      <span>{{ search.name }}</span>\n    </ion-item>\n    <p padding>Início:</p>\n    <ion-item> \n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime class="no-pl" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" [(ngModel)]="search.date"></ion-datetime>\n    </ion-item>\n    <p padding>Fim:</p>\n    <ion-item> \n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime class="no-pl" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" [(ngModel)]="search.date"></ion-datetime>\n    </ion-item>\n    \n  </ion-card>\n\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doCreate()">\n    <ion-icon name="md-add-circle"></ion-icon> Criar Novo Bolão\n  </button>\n  <ion-item>\n\n  </ion-item>\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n      <ion-icon name="md-search"></ion-icon> Buscar Bolão\n    </button>\n    <button ion-button (click)="salvarFoto()">SalvarFoto</button>\n</ion-content>'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamesPage = /** @class */ (function () {
    function GamesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GamesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamesPage');
    };
    GamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-games',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/games/games.html"*/'<!--\n  Generated template for the GamesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!--TELA DESTINA A LISTAR OS BOLÕES ATIVOS-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FREEBET</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/games/games.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GamesPage);
    return GamesPage;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
 * Generated class for the SearchGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchGamePage = /** @class */ (function () {
    function SearchGamePage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
    }
    SearchGamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchGamePage');
    };
    SearchGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-game',template:/*ion-inline-start:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/search-game/search-game.html"*/'<!--\n  Generated template for the SearchGamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- # -->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-input placeholder="Encontre o confronto" padding-left autofocus></ion-input>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/lamarca/Desktop/FREEBET/myApp/src/pages/search-game/search-game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchGamePage);
    return SearchGamePage;
}());

//# sourceMappingURL=search-game.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__(280);
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

/***/ })

},[212]);
//# sourceMappingURL=main.js.map