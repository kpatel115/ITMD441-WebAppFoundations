let bill = document.getElementById("billTotal").value;
let tip = document.getElementById("tip");
let tipPercentage = document.getElementById("tipPercentage");
let tipAmount = document.getElementById("tipAmount");
let billTotal = document.getElementById("billWithTip");

function validateForm() {
  if(isNaN(bill) || bill < 0) {
    alert("A number must be entered into the bill input")

  } else{
    console.log("bill input works")
  }
}