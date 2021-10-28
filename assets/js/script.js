var date = document.querySelector("#currentDay")

date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

//var hourEl = document.querySelector('#')
//currentHour = moment().format('h');


var time9 = $("#9")
time9.val(localStorage.getItem("9") || "")
time9.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("9", time9.val())
})

var time10 = $("#10")
time10.val(localStorage.getItem("10") || "")
time10.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("10", time10.val())
})

var time11 = $("#11")
time11.val(localStorage.getItem("11") || "")
time11.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("11", time11.val())
})

var time12 = $("#12")
time12.val(localStorage.getItem("12") || "")
time12.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("12", time12.val())
})

var time13 = $("#13")
time13.val(localStorage.getItem("13") || "")
time13.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("13", time13.val())
})

var time14 = $("#14")
time14.val(localStorage.getItem("14") || "")
time14.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("14", time14.val())
})

var time15 = $("#15")
time15.val(localStorage.getItem("15") || "")
time15.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("15", time15.val())
})

var time16 = $("#16")
time16.val(localStorage.getItem("16") || "")
time16.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("16", time16.val())
})

var time17 = $("#17")
time17.val(localStorage.getItem("17") || "")
time17.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("17", time17.val())
})

var rightNow = moment().format("kk");


// var nextHour = moment().add(1, "hour").format("kk");
// var pastDate = moment("12-01-1999", "MM-DD-YYYY").format("dddd, MM/DD/YY");

var hourEl09 = document.getElementById("9")
var hourEl10 = document.getElementById("10")
var hourEl11 = document.getElementById("11")
var hourEl12 = document.getElementById("12")
var hourEl13 = document.getElementById("13")
var hourEl14 = document.getElementById("14")
var hourEl15 = document.getElementById("15")
var hourEl16 = document.getElementById("16")
var hourEl17 = document.getElementById("17")
//hourElText = moment(hourEl.textContent)


var allTimes = [hourEl09, hourEl10, hourEl11, hourEl12, hourEl13, hourEl14, hourEl15, hourEl16, hourEl17 ]


for (i = 0; i < allTimes.length; i++) {
    

    eachTime = allTimes[i]

    if (eachTime.textContent == rightNow) {
        //console.log(true)
        $(eachTime).addClass("present")
    
    // } else if (eachTime.isAfter(rightNow) == true ){
    //     $(eachTime).addClass("future")
    } else {
        $(eachTime).addClass("past")
    }
    





}

//moment('2021-10-28 17').isAfter('2021-10-28 09')