let slider = document.getElementById("tip");

slider.addEventListener("change", function(event){
  let bill = document.getElementById("bill").value;
  if(bill === "" || bill < 1 || isNaN(bill)){
    alert("please enter valid number");
  } else {
  let tip = document.getElementById("tip").value;
  let tipPercent = document.getElementById("tipPercentage").value = tip;
  let tipTotal = bill * (tip/100);
  let tipAmount = document.getElementById("tipAmount").value = tipTotal.toFixed(2);
  let totalWithTip = parseFloat(bill) + parseFloat(tipAmount);
  let billTotal = document.getElementById("billWithTip").value = totalWithTip.toFixed(2);
  event.preventDefault();
  }
});

function tipCalc(event){
  let bill = document.getElementById("bill").value;
  if(bill === "" || bill < 1 || isNaN(bill)){
    alert("please enter valid number");
  } else {
  let tip = document.getElementById("tip").value;
  console.log(bill);
  console.log(tip);
  let tipPercent = document.getElementById("tipPercentage").value = tip;
  let tipTotal = bill * (tip/100);
  let tipAmount = document.getElementById("tipAmount").value = tipTotal.toFixed(2);
  let total = parseFloat(bill) + parseFloat(tipAmount);
  let billTotal = document.getElementById("billWithTip").value = total.toFixed(2);
  event.preventDefault();
  }
};