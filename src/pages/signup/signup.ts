import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Events } from '../../pages/events/events';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {
  account: {email: string, username: string, password: string, telephone: string, userType: string, name: string, surname: string, address: string, description: string} = {
    email: '',
    username: '',
    password: '',
    telephone: '',
    userType: '',
    name: '',
    surname: '',
    address: '',
    description: ''
  };

  // Translated strings
  private signupSuccessString: string;
  private emptyFieldsString: string;
  private timeoutString: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public translateService: TranslateService) {
    // String translations
    this.translateService.get('SIGNUP_SUCCESS').subscribe((value) => {
      this.signupSuccessString = value;
    });

    this.translateService.get('EMPTY_FIELDS').subscribe((value) => {
      this.emptyFieldsString = value;
    });

    this.translateService.get('TIMEOUT').subscribe((value) => {
      this.timeoutString = value;
    });

    // Timeout (1 minute)
    let timeoutId = setTimeout(() => {  
      this.timeout();
    }, 60000);
  }

  doSignup() {
    if(this.account.email && this.account.password && this.account.userType) {
      let toast = this.toastCtrl.create({
          message: this.signupSuccessString,
          duration: 2000,
          position: 'top'
      });
      toast.present();
      this.navCtrl.setRoot(Events);
    } else {
      let toast = this.toastCtrl.create({
          message: this.emptyFieldsString,
          duration: 2000,
          position: 'top'
        });
      toast.present();
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
  }
}

