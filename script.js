const matches = [
    {
        date: "Fri,21 Jun",
        type: "Super Eight",
        team1: "Bangladesh",
        team2: "Australia",
        time: "Starts at 5:30am"
    },
    {
        date: "Fri,21 Jun",
        type: "Super Eight",
        team1: "England",
        team2: "South Africa",
        time: "Starts at 7:30pm"
    },
    {
        date: "Sat,22 Jun",
        type: "Super Eight",
        team1: "United States",
        team2: "West Indies",
        time: "Starts at 5:30am"
    },
    {
        date: "Sat,22 Jun",
        type: "Super Eight",
        team1: "India",
        team2: "Bangladesh",
        time: "Starts at 7:30pm"
    },
    {
        date: "Sun,23 Jun",
        type: "Super Eight",
        team1: "Afghanistan",
        team2: "Australia",
        time: "Starts at 5:30am"
    },
    {
        date: "Sun,23 Jun",
        type: "Super Eight",
        team1: "United States",
        team2: "England",
        time: "Starts at 7:30pm"
    },
]

let match1 = document.getElementById("match1");
let match2 = document.getElementById("match2");
let match3 = document.getElementById("match3");
let match4 = document.getElementById("match4");
let match5 = document.getElementById("match5");
let match6 = document.getElementById("match6");

match1.innerHTML = `
    <div class="date-1">${matches[0].date}</div>
    <div>${matches[0].type}</div>
    <div><span><img class="image" src="Images/bangladesh.png"></span>${matches[0].team1}</div>
    <div><span><img class="image" src="Images/australia.png"></span>${matches[0].team2}</div>
    <div>${matches[0].time}</div>

`;

match2.innerHTML = `
    <div class="date-1">${matches[1].date}</div>
    <div>${matches[1].type}</div>
    <div><span><img class="image" src="Images/england.png"></span>${matches[1].team1}</div>
    <div><span><img class="image" src="Images/south africa.png"></span>${matches[1].team2}</div>
    <div>${matches[1].time}</div>
`;

match3.innerHTML = `
    <div class="date-1">${matches[2].date}</div>
    <div>${matches[2].type}</div>
    <div><span><img class="image" src="Images/united states.png"></span>${matches[2].team1}</div>
    <div><span><img class="image" src="Images/west indies.png"></span>${matches[2].team2}</div>
    <div>${matches[2].time}</div>
`;

match4.innerHTML = `
    <div class="date-1">${matches[3].date}</div>
    <div>${matches[3].type}</div>
    <div><span><img class="image" src="Images/india.png"></span>${matches[3].team1}</div>
    <div><span><img class="image" src="Images/bangladesh.png"></span>${matches[3].team2}</div>
    <div>${matches[3].time}</div>
`;

match5.innerHTML = `
    <div class="date-1">${matches[4].date}</div>
    <div>${matches[4].type}</div>
    <div><span><img class="image" src="Images/afghanistan.png"></span>${matches[4].team1}</div>
    <div><span><img class="image" src="Images/australia.png"></span>${matches[4].team2}</div>
    <div>${matches[4].time}</div>
`;

match6.innerHTML = `
    <div class="date-1">${matches[5].date}</div>
    <div>${matches[5].type}</div>
    <div><span><img class="image" src="Images/united states.png"></span>${matches[5].team1}</div>
    <div><span><img class="image" src="Images/england.png"></span>${matches[5].team2}</div>
    <div>${matches[5].time}</div>
`;