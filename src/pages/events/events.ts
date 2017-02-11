import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class Events {

	Observation1: {title: string, address: string, date: string, hour: string, img: string, nPlaces: number} = {
		title: 'Observatorio Astronómico de El Torcal',
		address: '(Antequera - Málaga) Carretera de acceso MA-9016, km 3,5 - Junto al Centro de Visitantes "Torcal Alto"',
		date: '14/02/2017',
		hour: '00:00',
		img: 'assets/img/observatorios/antequeraMalaga.jpg',
		nPlaces: 150
	};

	Observation2: {title: string, address: string, date: string, hour: string, img: string, nPlaces: number} = {
		title: 'Observatorio Astronómico de La Sagra',
		address: '(Puebla de Don Fadrique - Granada) Carretera de la Sagra',
		date: '14/02/2017',
		hour: '23:00',
		img: 'assets/img/observatorios/pueblaGranada.jpg',
		nPlaces: 80
	};

	Observation3: {title: string, address: string, date: string, hour: string, img: string, nPlaces: number} = {
		title: 'Observatorio Astronómico de Sierra Nevada',
		address: '(Monachil - Granada) Sierra Nevada',
		date: '16/02/2017',
		hour: '20:00',
		img: 'assets/img/observatorios/monachilGranada.jpg',
		nPlaces: 50
	};

	Observation4: {title: string, address: string, date: string, hour: string, img: string, nPlaces: number} = {
		title: 'Observatorio Astronómico de Capilerilla',
		address: '(Capilerilla - Granada) Calle Fuente Escarda , 5',
		date: '16/02/2017',
		hour: '23:00',
		img: 'assets/img/observatorios/capilerillaGranada.jpg',
		nPlaces: 120
	};

	Observation5: {title: string, address: string, date: string, hour: string, img: string, nPlaces: number} = {
		title: 'Observatorio Andaluz de Astronomía',
		address: '(Alcalá la Real - Jaén) Calle Alta, s/n - Las Pedriza',
		date: '18/02/2017',
		hour: '22:00',
		img: 'assets/img/observatorios/alcalaRealJaen.jpg',
		nPlaces: 100
	};

	Observation6: {title: string, address: string, date: string, hour: string, img: string, nPlaces: number} = {
		title: 'Observatorio Astronómico de La Fresnedilla',
		address: '(Villacarrillo - Jaén)',
		date: '20/02/2017',
		hour: '23:30',
		img: 'assets/img/observatorios/villacarrilloJaen.jpg',
		nPlaces: 160
	};

	Observation7: {title: string, address: string, date: string, hour: string, img: string, nPlaces: number} = {
		title: 'Observatorio Astronómico Hispano-Alemán Calar Alto (CAHA)',
		address: '(Gérgal - Almería) Sierra de Los Filabres',
		date: '24/02/2017',
		hour: '23:00',
		img: 'assets/img/observatorios/gergalAlmeria.jpg',
		nPlaces: 80
	};

	constructor(public navCtrl: NavController) {

	}

	goObservation() {
		this.navCtrl.setRoot(Observacion);
	}

}
