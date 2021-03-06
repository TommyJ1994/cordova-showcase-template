import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { authProvider } from '../../services/auth.service';
import { AuthService } from '@aerogear/auth';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-auth',
    templateUrl: 'auth.html',
    providers: [authProvider]
})
export class AuthPage {
    authButtonState: boolean;

    constructor(public toastCtrl: ToastController, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {
        this.auth = auth;
        this.authButtonState = true;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }

    login() {
        this.auth.login()
    }

    ionViewDidEnter(): void {
    }
}
