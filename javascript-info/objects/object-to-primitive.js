let user = {
    name: "michel",
}

let user2 = {
    name: "ranzen",
}

user[user2] = "relative";

console.log(user);
console.log(user + user2); // [object Object][object Object]
console.log(1 + user2); // 1[object Object]


let userConversion = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  console.log(userConversion); // toString -> {name: "John"}
  console.log(+userConversion); // valueOf -> 1000
  console.log(userConversion + 500); // valueOf -> 1500


// ___________________________________________
// all JS-Objects inherit "valueOf" by default
// but this method returns the oject itself -> console.log(obj) -> [object Object]
// it is possible to return a self chosen value by overriding this
function population(country, pop) {
	return {
		country: country,
		pop: pop,
		
		toString: function () {
			return "[Population " + 
				"\"" + country + "\" " +
				pop +
			"]";
		},
		
		valueOf: function () {
			return pop;
		}
	};
}

var america_pop = population("USA", 350e6);
var mexico_pop = population("Mexico", 200e6);
var canada_pop = population("Canada", 200e6);

console.log(america_pop); // [Population "USA" 350000000
var north_america_pop = america_pop + mexico_pop + canada_pop;
console.log(north_america_pop); // 750000000



// newer and good for both: number and string
let userToPrim = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// conversions demo:
console.log(userToPrim); // hint: string -> {name: "John"}
console.log(+userToPrim); // hint: number -> 1000
console.log(userToPrim + 500); // hint: default -> 1500


