import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class Events {

	Observation1: {name: string, description: string, coordinates: string, seats: string, seatsPerPerson: string, hour: string, date: string, limitDate: string} = {
		name: 'Observatorio Astronómico de El Torcal',
		description: 'Son muchas las razones que hacen del Observatorio Astronómico de El Torcal un lugar privilegiado desde donde descubrir el Universo',
		coordinates: '(Antequera - Málaga) Carretera de acceso MA-9016, km 3,5 - Junto al Centro de Visitantes "Torcal Alto"',
		seats: '150',
		seatsPerPerson: '12',
		hour: '00:00',
		date: '14/02/2017',
		limitDate: '13/02/2017'
	};

	Observation2: {name: string, description: string, coordinates: string, seats: string, seatsPerPerson: string, hour: string, date: string, limitDate: string} = {
		name: 'Observatorio Andaluz de Astronomía',
		description: 'En la aldea de La Pedriza, a 8 km de Alcalá la Real con un cielo oscuro impresionante, la Sociedad Einstein de Astronomía, con la colaboración del Ayuntamiento de Alcalá la Real',
		coordinates: '(Alcalá la Real - Jaén) Calle Alta, s/n - Las Pedriza',
		seats: '100',
		seatsPerPerson: '10',
		hour: '22:00',
		date: '18/02/2017',
		limitDate: '18/02/2017'
	};

	Observation3: {name: string, description: string, coordinates: string, seats: string, seatsPerPerson: string, hour: string, date: string, limitDate: string} = {
		name: 'Observatorio Astronómico de Capilerilla',
		description: 'La escasa contaminación lumínica del cielo de nuestra comarca ha llevado a un instituto sueco a instalar en La Tahá el Observatorio Astronómico de Capilerilla',
		coordinates: '(Capilerilla - Granada) Calle Fuente Escarda , 5',
		seats: '120',
		seatsPerPerson: '8',
		hour: '23:00',
		date: '16/02/2017',
		limitDate: '16/02/2017'
	};

	Observation4: {name: string, description: string, coordinates: string, seats: string, seatsPerPerson: string, hour: string, date: string, limitDate: string} = {
		name: 'Observatorio Astronómico de La Fresnedilla',
		description: 'El Observatorio Astronómico de La Fresnedilla, desarrollado en colaboración con el Ayuntamiento de Villacarrillo, el patrocinio de la Consejería de Turismo, Comercio y Deporte de la Junta de Andalucía',
		coordinates: '(Villacarrillo - Jaén)',
		seats: '160',
		seatsPerPerson: '10',
		hour: '23:30',
		date: '20/02/2017',
		limitDate: '20/02/2017'
	};

	Observation5: {name: string, description: string, coordinates: string, seats: string, seatsPerPerson: string, hour: string, date: string, limitDate: string} = {
		name: 'Observatorio Astronómico de La Sagra',
		description: 'El Observatorio Astronómico de La Sagra está situado cerca de la población de la Puebla de Don Fadrique, y es operado por el Observatorio Astronómico de Mallorca y el Instituto de Astrofísica de Andalucía',
		coordinates: '(Puebla de Don Fadrique - Granada) Carretera de la Sagra',
		seats: '80',
		seatsPerPerson: '2',
		hour: '23:00',
		date: '14/02/2017',
		limitDate: '14/02/2017'
	};

	Observation6: {name: string, description: string, coordinates: string, seats: string, seatsPerPerson: string, hour: string, date: string, limitDate: string} = {
		name: 'Observatorio Astronómico de Sierra Nevada',
		description: 'El Observatorio Astrónomico de Sierra Nevada, el más alto de Europa -2.896 m.-, está situado dentro del paraje de la Loma de Dílar',
		coordinates: '(Monachil - Granada) Sierra Nevada',
		seats: '50',
		seatsPerPerson: '2',
		hour: '20:00',
		date: '16/02/2017',
		limitDate: '16/02/2017'
	};

	Observation7: {name: string, description: string, coordinates: string, seats: string, seatsPerPerson: string, hour: string, date: string, limitDate: string} = {
		name: 'Observatorio Astronómico Hispano-Alemán Calar Alto (CAHA)',
		description: 'El Observatorio Astronómico Hispano-Alemán de Calar Alto (CAHA) está situado en la Sierra de Los Filabres, al norte de la provincia de Almería, y es operado conjuntamente por el Instituto Max-Planck de Astronomía en Heidelberg',
		coordinates: '(Gérgal - Almería) Sierra de Los Filabres',
		seats: '80',
		seatsPerPerson: '2',
		hour: '23:00',
		date: '24/02/2017',
		limitDate: '24/02/2017'
	};

  constructor(public navCtrl: NavController) {
    
  }

}
