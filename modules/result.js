import {currencies} from "./currencyconversion.js"
import {getOptions} from "./assign.js"
function myFunction() {
    var currency = document.getElementById("amount");
    var result = Math.random(currency);
    document.getElementById('result').innerHTML=result;
  }