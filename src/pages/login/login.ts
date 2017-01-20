import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { Page1 } from '../../pages/page1/page1';
//import { User } from '../../providers/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {email: string, password: string} = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
              //public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService) {

    //this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      //this.loginErrorString = value;
    //})
  }

  /*
  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(Page1);
    }, (err) => {
      this.navCtrl.push(Page1);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }*/

  // TODO: Remove when login works
  doLogin() {
    this.navCtrl.setRoot(Page1);
  }
}
