// type annotations on a function
// after defining the type of the arguments
// we are telling what type the returning value is =>
// (arguments: number) : number 

const add = (a: number, b:number) : number => {
    return a + b;
}

// a function without a return value has the annotation 'void'
const logger = (message: string): void => {
    console.log("mäh");
}

// a function, that never reaches its end
const throwErr = (message: string): never => {
    throw new Error(message);
}


const todaysWeather = {
    date: new Date(),
    weather: 'rainy',
}

const weatherForCast = (forecast: { date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

const weatherForCastES6 = ({ date, weather }: { date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

weatherForCast(todaysWeather);