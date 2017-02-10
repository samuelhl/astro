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

  private signupSuccessString: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public translateService: TranslateService) {
    this.translateService.get('SIGNUP_SUCCESS').subscribe((value) => {
      this.signupSuccessString = value;
    })
  }

  doSignup() {
    let toast = this.toastCtrl.create({
        message: this.signupSuccessString,
        duration: 2000,
        position: 'top'
    });
    toast.present();
    this.navCtrl.setRoot(Events);
  }
}

