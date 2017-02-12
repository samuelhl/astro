import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observacion } from '../../pages/observacion/observacion';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class Events {

	Observation1: {title: string, location: string, address: string, description: string, date: string, hour: string, nPlaces: number, limitDate: string, nPlacesPerPerson: number, img: string} = {
		title: 'Observatorio Astronómico de El Torcal',
		location: "36°57′10″N 4°32′41″O",
	    description: "Son muchas las razones que hacen del Observatorio Astronómico de El Torcal un lugar privilegiado desde donde descubrir el Universo.",
		address: '(Antequera - Málaga) Carretera de acceso MA-9016, km 3,5 - Junto al Centro de Visitantes "Torcal Alto"',
		date: '14/02/2017',
		hour: '00:00',
		img: 'assets/img/observatorios/antequeraMalaga.jpg',
		nPlaces: 150,
	    limitDate: '13/02/2017',
	    nPlacesPerPerson: 5
	};

	Observation2: {title: string, location: string, address: string, description: string, date: string, hour: string, nPlaces: number, limitDate: string, nPlacesPerPerson: number, img: string} = {
		title: 'Observatorio Astronómico de La Sagra',
		location: "37°58′58″N 2°33′57″O",
	    description: "El Observatorio Astronómico de La Sagra está situado cerca de la población de la Puebla de Don Fadrique, y es operado por el Observatorio Astronómico de Mallorca y el Instituto de Astrofísica de Andalucía.",
		address: '(Puebla de Don Fadrique - Granada) Carretera de la Sagra',
		date: '14/02/2017',
		hour: '23:00',
		img: 'assets/img/observatorios/pueblaGranada.jpg',
		nPlaces: 80,
	    limitDate: '14/02/2017',
	    nPlacesPerPerson: 4
	};

	Observation3: {title: string, location: string, address: string, description: string, date: string, hour: string, nPlaces: number, limitDate: string, nPlacesPerPerson: number, img: string} = {
		title: 'Observatorio Astronómico de Sierra Nevada',
		location: "37°3′46″N 3°23′9″O",
	    description: "El Observatorio Astrónomico de Sierra Nevada, el más alto de Europa -2.896 m.-, está situado dentro del paraje de la Loma de Dílar.",
		address: '(Monachil - Granada) Sierra Nevada',
		date: '16/02/2017',
		hour: '20:00',
		img: 'assets/img/observatorios/monachilGranada.jpg',
		nPlaces: 50,
	    limitDate: '16/02/2017',
	    nPlacesPerPerson: 2
	};

	Observation4: {title: string, location: string, address: string, description: string, date: string, hour: string, nPlaces: number, limitDate: string, nPlacesPerPerson: number, img: string} = {
		title: 'Observatorio Astronómico de Capilerilla',
		location: "36°56′21″N 3°19′48″O",
	    description: "La escasa contaminación lumínica del cielo de nuestra comarca ha llevado a un instituto sueco a instalar en La Tahá el Observatorio Astronómico de Capilerilla",
		address: '(Capilerilla - Granada) Calle Fuente Escarda , 5',
		date: '16/02/2017',
		hour: '23:00',
		img: 'assets/img/observatorios/capilerillaGranada.jpg',
		nPlaces: 120,
	    limitDate: '16/02/2017',
	    nPlacesPerPerson: 6
	};

	Observation5: {title: string, location: string, address: string, description: string, date: string, hour: string, nPlaces: number, limitDate: string, nPlacesPerPerson: number, img: string} = {
		title: 'Observatorio Andaluz de Astronomía',
		location: "37°24′53″N 3°57′12″O",
	    description: "En la aldea de La Pedriza, a 8 km de Alcalá la Real con un cielo oscuro impresionante, la Sociedad Einstein de Astronomía, con la colaboración del Ayuntamiento de Alcalá la Real, dispone de unas instalaciones de primer orden para la observación y divulgación astronómica, el Observatorio Andaluz de Astronomía.",
		address: '(Alcalá la Real - Jaén) Calle Alta, s/n - Las Pedriza',
		date: '18/02/2017',
		hour: '22:00',
		img: 'assets/img/observatorios/alcalaRealJaen.jpg',
		nPlaces: 100,
	    limitDate: '18/02/2017',
	    nPlacesPerPerson: 4
	};

	Observation6: {title: string, location: string, address: string, description: string, date: string, hour: string, nPlaces: number, limitDate: string, nPlacesPerPerson: number, img: string} = {
		title: 'Observatorio Astronómico de La Fresnedilla',
		location: "39°3′39″N 2°56′39″O",
	    description: "El Observatorio Astronómico de La Fresnedilla, desarrollado en colaboración con el Ayuntamiento de Villacarrillo, el patrocinio de la Consejería de Turismo, Comercio y Deporte de la Junta de Andalucía",
		address: '(Villacarrillo - Jaén)',
		date: '20/02/2017',
		hour: '23:30',
		img: 'assets/img/observatorios/villacarrilloJaen.jpg',
		nPlaces: 160,
	    limitDate: '20/02/2017',
	    nPlacesPerPerson: 8
	};

	Observation7: {title: string, location: string, address: string, description: string, date: string, hour: string, nPlaces: number, limitDate: string, nPlacesPerPerson: number, img: string} = {
		title: 'Observatorio Astronómico Hispano-Alemán Calar Alto (CAHA)',
		location: "37°13′15″N 2°32′48″O",
	    description: "El Observatorio Astronómico Hispano-Alemán de Calar Alto (CAHA) está situado en la Sierra de Los Filabres, al norte de la provincia de Almería, y es operado conjuntamente por el Instituto Max-Planck de Astronomía en Heidelberg.",
		address: '(Gérgal - Almería) Sierra de Los Filabres',
		date: '24/02/2017',
		hour: '23:00',
		img: 'assets/img/observatorios/gergalAlmeria.jpg',
		nPlaces: 80,
	    limitDate: '24/02/2017',
	    nPlacesPerPerson: 2
	};

	constructor(public navCtrl: NavController) {

	}

	goObservation(id: number) {
		switch (id) {
  			case 1:
    			this.navCtrl.push(Observacion, this.Observation1);
    			break;
  			case 2:
    			this.navCtrl.push(Observacion, this.Observation2);
    			break;
			case 3:
    			this.navCtrl.push(Observacion, this.Observation3);
    			break;
			case 4:
    			this.navCtrl.push(Observacion, this.Observation4);
    			break;
			case 5:
    			this.navCtrl.push(Observacion, this.Observation5);
    			break;
			case 6:
    			this.navCtrl.push(Observacion, this.Observation6);
    			break;
			case 7:
    			this.navCtrl.push(Observacion, this.Observation7);
    			break;
		}
	}

}
