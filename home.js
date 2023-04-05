let clientName = document.getElementById("clientName1")
let dollarPay =  document.getElementById("dollar")
let liraPay = document.getElementById("lira")
let billValue = document.getElementById("bill")
let btnSubmit = document.getElementById("btn-submit")
let payType =  document.getElementById("payType")
let time = document.getElementById("time")
let sarfValue = document.getElementById("sarfValue")
let dollarPayValue = document.getElementById("dollarPayValue")
let lebRest = document.getElementById("lebRest")
let rest = document.getElementById("rest")
 let lebDollarvalue = document.getElementById("leb-dollarvalue")
let paytypeLeb = document.getElementById("paytypeLeb") 
currencyType = document.getElementsByName("currency")
/////////////////////////////////lebpaid /////////////////////////
let clientPaid = [];

btnSubmit.onclick = function (){
 
    if(localStorage.dataMenu != 0) {
   let clientObj = {
   clientName : clientName.value,
   billValue : billValue.value,
   sarfValue :  sarfValue.value,
   dollarPayValue : dollarPayValue.value,
   lebRest : lebRest.value,
   rest : rest.innerHTML,
};
clientPaid.push(clientObj)
localStorage.setItem('dataMenu' , JSON.stringify(clientPaid));
}
else{
    for(let i = 0 ;i < clientPaid.length ; i++){
    localStorage.setItem('dataMenu' , JSON.stringify(clientPaid)) 
    }   
}
  }
function updateClock() {
    var clock = document.getElementById("clock");
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var time1 = hours + ":" + minutes + ":" + seconds;
    time.innerHTML = time1;
  }
  // Update clock every second
  setInterval(updateClock, 1000);

 function exchange () {
    lebRest.value = billValue.value - (dollarPayValue.value * sarfValue.value) 
    let total = lebRest.value / sarfValue.value
    lebDollarvalue.innerHTML =  dollarPayValue.value * sarfValue.value
    rest.innerHTML = Math.abs(parseFloat(total.toFixed(2)))
}

dollarPayValue.onkeyup =  function() {
    exchange ()
}
billValue.onkeyup =   function() {
    exchange ()
} ;
sarfValue.onkeyup =  function() {
    exchange ()
} ;


