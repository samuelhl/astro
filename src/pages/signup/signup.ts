import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { Events } from '../../pages/events/events';
//import { User } from '../../providers/user';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {name: string, email: string, password: string, userType: string} = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test',
    userType: 'observer'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
              //public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService) {

    //this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      //this.signupErrorString = value;
    //})
  }

  /*
  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(Page1);
    }, (err) => {

      this.navCtrl.push(Page1); // TODO: Remove this when you add your signup endpoint

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  */

  // TODO: Remove when sign up works
  doSignup() {
    this.navCtrl.setRoot(Events);
  }
}

