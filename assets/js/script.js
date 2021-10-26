var date = document.querySelector("#currentDay")

date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');




var time9 = $("#9")
time9.val(localStorage.getItem("9") || "")
time9.siblings(".saveBtn").on("click", function(){
    localStorage.setItem("9", time9.val())
})