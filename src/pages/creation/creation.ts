import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'page-creation',
  templateUrl: 'creation.html'
})
export class CreationPage {

  public timeoutId: number;

  private toastString: string;
  private errorString: string;
  private timeoutString: string;

  places: {total: number, person: number} = {
    total: 0,
    person: 0
  }

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public translateService: TranslateService) {
    this.translateService.get('CREATED').subscribe((value) => {
      this.toastString = value;
    });

    this.translateService.get('CREATION_ERROR').subscribe((value) => {
      this.errorString = value;
    });

    this.translateService.get('TIMEOUT').subscribe((value) => {
      this.timeoutString = value;
    })

    // Timeout (1 minute)
    this.timeoutId = setTimeout(() => {
      this.timeout();
    }, 60000);
  }

  createObservation(){
    if(this.places.person > this.places.total){
      let toast = this.toastCtrl.create({
        message: this.errorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }else{
      let toast = this.toastCtrl.create({
        message: this.toastString,
        duration: 3000,
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
    clearTimeout(this.timeoutId);
  }

}
