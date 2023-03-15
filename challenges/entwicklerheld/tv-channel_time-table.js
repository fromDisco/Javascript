// Scenario 1: Build the sorted timetable
// First we need a way to bring the TV shows in context with their time slot.
// Therefore you get two lists: one with the TV show objects and another 
// with time slot objects. The starttime parameter is given in minutes 
// from the beginning of the day, and the id parameter references the TV show.

// The function getSortedShows(shows, times) should return a list of objects. 
// An object contains the title of the show, the starttime formatted 
// as 24h-String (e.g. 08:24, hours and minutes should have a prefixed 0 
// if they are single digits) and the url of the show's logo.
// Please wrap the title with a HTML p tag and the CSS class title.

// Input for shows:
let shows = [{
        id: 1,
        title: "Once upon node.js",
        duration: 189,
        description: "A show about the beginning of Javascript",
        url: "https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/4.png"
    },
    {
        id: 2,
        title: "Code runner",
        duration: 95,
        description: "",
        url: "https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/3.png"
    }
];

// Input for times:
let times = [{
        starttime: 1080,
        id: 1
    },
    {
        starttime: 625,
        id: 2
    }
];

// The returned list should be sorted by the starttime (ascending). 
// The example above should return the following object:
[{
        title: "`Your HTML` Code runner `Your HTML`",
        starttime: "10:25",
        url: "https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/3.png"
    },
    {
        title: "`Your HTML` Once upon node.js `Your HTML`",
        starttime: "18:00",
        url: "https://task-static-files.s3.eu-central-1.amazonaws.com/tv-show/4.png"
    }
]


function getSortedShows(shows, times) {
    // find matching elements in shows and times
    const identifier = shows[1].id;
    const matchingTimesObj = times.find( time => time.id === identifier);

    const output = [];
    const bestOfBoth = new MergeObj(shows[1], matchingTimesObj);
    console.log(bestOfBoth);
}

function MergeObj(shows, times) {
    // starts at
    const starttime = new Date();
    // url 
    const url = shows.url;

    this.title = `<p class="title">${shows.title}</p>`;

    // reset time of today to 0:00
    starttime.setHours(0, 0, 0, 0);
    // set starttime
    starttime.setMinutes(times.starttime);
    // only output HH:MM
    this.starttime = `${starttime.getHours()}:${starttime.getMinutes()}`;


    return this;
}

getSortedShows(shows, times);