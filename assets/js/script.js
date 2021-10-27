var date = document.querySelector("#currentDay")

date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');




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