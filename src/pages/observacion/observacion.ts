import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-observacion',
  templateUrl: 'observacion.html'
})
export class Observacion {
  data: {
    title: string, 
    location: string, 
    address: string, 
    description: string, 
    date: string,
    hour: string, 
    nPlaces: number, 
    limitDate: string, 
    nPlacesPerPerson: number, 
    img: string
  };
  
/*
  data: {title: string, location: string, address: string, description: string, date: string, hour: string, nPlaces: number, limitDate: string, nPlacesPerPerson: number, img: string} = {
    title: 'El cometa Halley hará aparición el próximo fin de semana',
    location: "36°49′00″N 4°23′00″O",
    description: "No te pierdas esta ocasión única, únete a nosotros y contempla el avistamiento del cometa Halley. Estaremos en los montes de Málaga celebrando una reunión con todos los aficionados de la provincia.",
    address: 'Montes de Málaga',
    date: '18/02/2017',
    hour: '20:00',
    img: 'assets/img/halley.jpg',
    nPlaces: 50,
    limitDate: '15/02/2017',
    nPlacesPerPerson: 5,
  };
  */
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public params: NavParams) {
    this.data = {
      title: params.get('title'),
      location: params.get('location'),
      description: params.get('description'),
      address: params.get('address'),
      date: params.get('date'),
      hour: params.get('hour'),
      img: params.get('img'),
      nPlaces: params.get('nPlaces'),
      limitDate: params.get('limitDate'),
      nPlacesPerPerson: params.get('nPlacesPerPerson'),
    };
  }
  
  presentAlert() {
    let alert = this.alertCtrl.create({
        title: 'Reserva realizada',
        subTitle: 'Si lo desea, puede cancelar la reserva',
        buttons: [" Ok "]
    });
    alert.present();
  }
  

  doReserve() {
    this.presentAlert();
    this.navCtrl.pop();
  }

}
