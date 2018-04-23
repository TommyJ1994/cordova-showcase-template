import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AuthService } from '@aerogear/auth';
import { authProvider } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [authProvider]
})

export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthService, public toastCtrl: ToastController) {
    this.auth = auth;
    this.toastCtrl = toastCtrl;
  }

  checkIfAuthenticated() {
    if (this.auth.isAuthenticated()) {
      let toast = this.toastCtrl.create({
        message: 'Authenticated Successfully',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
  }

  ionViewDidEnter(): void {
    this.checkIfAuthenticated();
  }


}
