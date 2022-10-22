let btn = document.getElementById("btn");
let bill = document.getElementById("bill");

function tipCalc(event){
  let bill = document.getElementById("bill").value;
  if(bill === "" || bill < 1 || isNaN(bill)){
    alert("please enter valid number");

  } else {
  let tip = document.getElementById("tip").value;
  console.log(bill);
  console.log(tip);
  let tipPercent = document.getElementById("tipPercentage").value = tip;
  let tipAmount = document.getElementById("tipAmount").value = bill * (tip/100);
  let billTotal = document.getElementById("billWithTip").value = parseFloat(bill) + parseFloat(tipAmount);
  event.preventDefault();
  }
}
// --------------------------------------------------
// bill.addEventListener("click", function(event){
  
//   let bill = document.getElementById("bill").value;
//   if(bill === "" || bill < 1 || isNaN(bill)){
//     alert("please enter valid number");

//   } else {
//   let tip = document.getElementById("tip").value;
//   console.log(bill);
//   console.log(tip);
//   let tipPercent = document.getElementById("tipPercentage").value = tip;
//   let tipAmount = document.getElementById("tipAmount").value = bill * (tip/100);
//   let billTotal = document.getElementById("billWithTip").value = parseFloat(bill) + parseFloat(tipAmount);
//   event.preventDefault();
//   }
// })

//---------------------------------------------------

// btn.addEventListener("click", function(event){
  
//   let bill = document.getElementById("bill").value;
//   if(bill === "" || bill < 1 || isNaN(bill)){
//     alert("please enter valid number");

//   } else {
//   let tip = document.getElementById("tip").value;
//   console.log(bill);
//   console.log(tip);
//   let tipPercent = document.getElementById("tipPercentage").value = tip;
//   let tipAmount = document.getElementById("tipAmount").value = bill * (tip/100);
//   let billTotal = document.getElementById("billWithTip").value = parseFloat(bill) + parseFloat(tipAmount);
//   event.preventDefault();
//   }
// })