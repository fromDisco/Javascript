// automatic inference tells that only strings are allowed in Array bikeManufacturers
const bikeManufacturers  = ['Trek', 'Fairlight'];

// initializing later on makes annotations required
const computers: string[] = [];
computers[1] = "Lenovo";

// creating a two-dimensional array
const computerModels: string[][] = [];

// help with .map etc
bikeManufacturers.map( (manu: string): string  => {
    // because TS knows which type the return value is
    // it can help with autocomplete-suggestions while typing
    return manu.toUpperCase(); 
})

//Flexible types
const importantDates: ( string | Date )[] = [new Date(), new Date(), "26.08.1978"];

console.log(importantDates);