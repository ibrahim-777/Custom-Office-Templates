let leb1Value = document.getElementById("leb1Value")
let sarf1Value = document.getElementById("sarf1Value")
let dollar1Value = document.getElementById("dollar1Value")
let dollar2Value = document.getElementById("dollar2Value")
let leb2Value = document.getElementById("leb2Value")
let sarfknow= document.getElementById("sarfknow")

leb1Value.onkeyup =  function () {
sarf1Value.value = Math.floor(leb1Value.value / dollar1Value.value)
}
dollar1Value.onkeyup =  function () {
    sarf1Value.value = Math.floor(leb1Value.value / dollar1Value.value)
    }

dollar2Value.onkeyup =  function () {
    leb2Value.value = Math.floor(dollar2Value.value * sarfknow.value)
    }
sarfknow.onkeydown =  function () {
    if(dollar2Value.value > 0 && sarfknow.length > 6){
      leb2Value.value = Math.floor(dollar2Value.value * sarfknow.value)
      }
    else if(leb2Value.value > 0 && sarfknow.length > 6){
            dollar2Value.value = leb2Value.value / sarfknow.value
            dollar2Value.toFixed(3)   
        }
        }
        leb2Value.onkeyup =  function () {
            dollar2Value.value = leb2Value.value / sarfknow.value
            dollar2Value.toFixed(3)
            }    