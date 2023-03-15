const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
}

// it is possible to write an object as an array.
// but because there is no naming property anymore
// it is possible to mix up the order of the elements
// and loosing track of the values
const sugarWater = ['brown', true, 40];

// here tuples come into place
// the annotation ensures, that the array (tuple) has a specific order
const cola: [string, boolean, number] = ['brown', true, 40];

// Type alias
// a shortcut for defining tuples
type Drink = [string, boolean, number];
const limo: Drink = ['yellow', true, 40]