const month =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const day =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
]
let giveawayDate= new Date(2025, 11, 25, 23, 30, 0);
let hour = giveawayDate.getHours();
let ampm = "PM";

if(hour>12){
    hour-=12;
}
if(hour>=12){
    ampm="PM"
}

let giveaway =document.querySelector(".giveaway");
giveaway.innerHTML=`giveaway ends on ${day[giveawayDate.getDay()]},${giveawayDate.getDate().toString().padStart(2,"0")}${month[giveawayDate.getMonth()]}${giveawayDate.getFullYear()}${hour.toString().padStart(2,"0")}${giveawayDate.getMinutes().toString().padStart(2,"0")}${ampm}`;

function updateTime(){
    let currDate =new Date();
    let day = document.querySelector(".days");
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");

    let timeDiff = giveawayDate-currDate;
    let oneDay = 24*60*60*1000;
    let remDays = Math.floor(timeDiff/oneDay);
    day.innerHTML=remDays.toString().padStart(2,"0");
    let oneHour = 60*60*1000;
    let remHour =Math.floor((timeDiff%oneDay)/oneHour);
    hour.innerHTML= remHour.toString().padStart(2,"0");
    let oneMinute= 60*1000;
    let remMinute= Math.floor((timeDiff%oneHour)/oneMinute);
    minute.innerHTML=remMinute.toString().padStart(2,"0");
    let oneSecond= 1000;
    let remsecond = Math.floor((timeDiff%oneMinute)/oneSecond);
    second.innerHTML=remsecond.toString().padStart(2,"0");
}

setInterval(updateTime,1000);

