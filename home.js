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
currencyType = document.getElementsByName("currency")
/////////////////////////////////lebpaid /////////////////////////
let clientPaid = [];
if(sessionStorage.sarfValue === 0 ) {
 sessionStorage.setItem("sarfvalue", JSON.stringify(sarfValue.value))
}
if(sessionStorage.sarfValue != 0 ) {
sarfValue.value = JSON.parse(sessionStorage.getItem("sarfValue"))
}

btnSubmit.onclick= function (){
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
    localStorage.setItem('dataMenu' , JSON.stringify(clientPaid))    
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
    rest.innerHTML = Math.abs(parseFloat(total.toFixed(2)))
}
dollarPayValue.onkeyup =  function exchange () {
    lebRest.value = billValue.value - (dollarPayValue.value * sarfValue.value) 
    let total = lebRest.value / sarfValue.value
    lebDollarvalue.innerHTML =  dollarPayValue.value * sarfValue.value
    rest.innerHTML = Math.abs(parseFloat(total.toFixed(2)))
}
billValue.onkeyup =  function exchange () {
    lebRest.value = billValue.value - (dollarPayValue.value * sarfValue.value) 
    let total = lebRest.value / sarfValue.value
    rest.innerHTML = Math.abs(parseFloat(total.toFixed(2)))
}
sarfValue.onkeyup =  function exchange () {
    lebRest.value = billValue.value - (dollarPayValue.value * sarfValue.value) 
    let total = lebRest.value / sarfValue.value
    rest.innerHTML = Math.abs(parseFloat(total.toFixed(2)))
}

dollarPay.onclick = function () {
    for(let i = 0 ; i < currencyType.length ; i++) {
    if (currencyType[i].checked){
        payType.classList.add("hiddenPayType")
    }
    }
}

liraPay.onclick = function () {
    for(let i = 0 ; i < currencyType.length ; i++) {
    if (currencyType[i].checked){
        payType.classList.remove("hiddenPayType")
    }
    }
}


