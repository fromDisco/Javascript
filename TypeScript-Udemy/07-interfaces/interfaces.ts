interface Output {
    /*
    // these are not needed for the logVehicle-function 
    name: string;
    year: number;
    broken: boolean; 
    */
    summary(): string;
}

const oldBike = {
    name: 'Ghost',
    year: 2000,
    broken: true,
    summary(): string {
        return `The ${this.name} was bought in ${this.year}. Right now it is ${this.broken ? "not" : "still"} riding.` 
    }
}

const logVehicle = (vehicle: Output): void => {
    console.log(vehicle.summary());
};

logVehicle(oldBike);