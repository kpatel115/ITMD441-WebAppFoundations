let btn = document.getElementById("btn");

btn.addEventListener("click", function(event){
  let bill = document.getElementById("bill").value;
  let tip = document.getElementById("tip").value;
  console.log(bill);
  console.log(tip);
  let tipPercent = document.getElementById("tipPercentage").value = tip;
  let tipAmount = document.getElementById("tipAmount").value = bill * (tip/100);
  let billTotal = document.getElementById("billWithTip").value = parseFloat(bill) + parseFloat(tipAmount);
  event.preventDefault();
})