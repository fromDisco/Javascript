// sometimes it is nessesary to install a type-definitin file
// for communication between TS and external libraries
// @types
import { faker } from '@faker-js/faker';

// import interface and implement it in class
// errors in class are shown here, instead of
// where it is used.
import { Loctionable } from './CustomMap';

// by implementing Locationable
// the class can already be checked if it fits
// the requirements of 'interface Locationable'
export class Company implements Loctionable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerDescription(): string {
        return this.catchPhrase;
    }
}
