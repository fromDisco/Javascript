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
export class User implements Loctionable {
    // the following fields are only declared.
    // they have to be initialized in the constructor.
    // until then, they are not existant
    firstName: string;
    lastName: string;
    description: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.firstName = faker.name.firstName('female');
        this.lastName = faker.name.lastName();
        this.description = faker.name.jobTitle();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerDescription(): string {
        return this.description;
    }
}
