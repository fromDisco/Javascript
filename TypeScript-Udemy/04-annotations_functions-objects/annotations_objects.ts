const person = {
    name: 'Michel',
    age: 20,
    coords: {
        lat: 20,
        lng: 49,
    },

    setAge(age: number): void {
        this.age = age;
    }
}

// destructuring declaration needs to
// replicate the exact structur of person.age
const { age }: { age: number } = person;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = person;
