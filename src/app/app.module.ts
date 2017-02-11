import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { MyApp } from './app.component';
import { Events } from '../pages/events/events';
import { MyEvents } from '../pages/my_events/my_events';
import { WelcomePage } from '../pages/welcome/welcome'
import { LoginPage } from '../pages/login/login'
import { SignupPage } from '../pages/signup/signup'
import { Observacion } from '../pages/observacion/observacion'

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Events,
    MyEvents,
    WelcomePage,
    LoginPage,
    SignupPage,
    Observacion
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Events,
    MyEvents,
    WelcomePage,
    LoginPage,
    SignupPage,
    Observacion
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

export class AppModule {}
