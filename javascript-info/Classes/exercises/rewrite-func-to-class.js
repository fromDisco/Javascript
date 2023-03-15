// function Clock1({ template }) {
    
//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }

// let clock = new Clock({
//     template: 'h:m:s'
// });
// clock.start();


class Clock {

    constructor({ template }) {
        this.template = template;
    }

    get start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }

    render() {
        let date = new Date();
        
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        console.log(this.template);
        
        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        
        console.log(output);
    }

}

let clock = new Clock({ template: 'h:m:s' });
// clock.start;

// bind clock, so this doesnt get lost
setTimeout(clock.stop.bind(clock), 5000);



class ExtendedClock extends Clock {
    constructor(options) {
        super(options); // call parent constructor
        let { precision = 1000 }  = options; // destructuring assignment
        this.precision = precision;
    }

    get start() {
        this.render();
        // arrow-function for passing "this" 
        setInterval( () => this.render(), this.precision );
    }
}

let newClock = new ExtendedClock({ template: 'h:m:s', precision: 2000 });
newClock.start;