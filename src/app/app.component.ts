import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { WelcomePage } from '../pages/welcome/welcome'
import { Events } from '../pages/events/events';
import { MyEvents } from '../pages/my_events/my_events';
import { CreationPage } from '../pages/creation/creation';
import { Observacion } from '../pages/observacion/observacion';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public translate: TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'OBSERVATIONS', component: Events },
      { title: 'MY_OBSERVATIONS', component: MyEvents },
      { title: 'CREATE_OBSERVATION', component: CreationPage },
    ];

    this.translateConfig();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  translateConfig() {
    let userLang = navigator.language.split('-')[0];
    userLang = /(en|es)/gi.test(userLang) ? userLang : 'es';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);
  }
}
