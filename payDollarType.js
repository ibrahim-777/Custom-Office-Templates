let paytypeDollar = document.getElementById("paytypeDollar")
let sarf21Value = document.getElementById("sarf21Value")
  let leb2value = document.getElementById("leb2-value")
  let DollarTypelebRest = document.getElementById("DollarType-lebRest")
  let restDollar = document.getElementById("restDollar")
  let bill2Value = document.getElementById("bill22")
  /////////////////////////////////////////////////////////////////////////////////////////////
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

    function exchange2 () {
        DollarTypelebRest.value = Math.floor((bill22.value -dollarPayValue.value) * sarf21Value.value)
        let total2 = DollarTypelebRest.value / sarf21Value.value
        restDollar.innerHTML = Math.abs(parseFloat(total2.toFixed(2)))
        leb2value.innerHTML =  dollarPayValue.value * sarf21Value.value
    }
    sarf21Value.onkeyup = function (){exchange2 ()};
    dollarPayValue.onkeyup = function (){exchange2 ()};
    bill22.onkeyup = function (){exchange2 ()};
