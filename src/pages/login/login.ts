import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Events } from '../../pages/events/events';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  // User examples
  user1: {email: string, password: string} = {
    email: 'test1@example.com',
    password: 'test'
  };
  user2: {email: string, password: string} = {
    email: 'test2@example.com',
    password: 'test'
  };
  user3: {email: string, password: string} = {
    email: 'test3@example.com',
    password: 'test'
  };

  account: {email: string, password: string} = {
    email: '',
    password: ''
  };

  public timeoutId: number;

  // Translated strings
  private loginErrorString: string;
  private loginSuccessString: string;
  private emptyFieldsString: string;
  private timeoutString: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public translateService: TranslateService) {
    // String translations
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });

    this.translateService.get('LOGIN_SUCCESS').subscribe((value) => {
      this.loginSuccessString = value;
    });

    this.translateService.get('EMPTY_FIELDS').subscribe((value) => {
      this.emptyFieldsString = value;
    });

    this.translateService.get('TIMEOUT').subscribe((value) => {
      this.timeoutString = value;
    });

    // Timeout (1 minute)
    this.timeoutId = setTimeout(() => {  
      this.timeout();
    }, 60000);
  }

  doLogin() {
    if (this.account.email && this.account.password) {
      if (this.sameUser(this.account, this.user1) || this.sameUser(this.account, this.user2) || this.sameUser(this.account, this.user3)) {
        let toast = this.toastCtrl.create({
          message: this.loginSuccessString,
          duration: 2000,
          position: 'top'
        });
        toast.present();
        clearTimeout(this.timeoutId);
        this.navCtrl.setRoot(Events);
      } else {
        let toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
    } else {
      let toast = this.toastCtrl.create({
          message: this.emptyFieldsString,
          duration: 2000,
          position: 'top'
        });
      toast.present();
    }
  }

  sameUser(user1, user2) {
    if (user1.email == user2.email && user1.password == user2.password) {
      return true;
    } else {
      return false;
    }
  }

  timeout() {
    let toast = this.toastCtrl.create({
          message: this.timeoutString,
          duration: 2000,
          position: 'top'
        });
    toast.present();
    this.navCtrl.pop();
    clearTimeout(this.timeoutId);
  }
}
