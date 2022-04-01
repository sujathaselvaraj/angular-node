import { submit } from "./submit.js";
import { search } from "./search.js";
import {cities, city, gender, genders } from "./option.js";

      var radio;
       
      function radiores() {
        radio = document.getElementById("myresult").value;
      }
      function radiores1() {
        radio = document.getElementById("myresult1").value;
      }
       document.getElementById("table").style.display="block";
       
                const btn = document.getElementById('submit');
    
                btn.addEventListener('click', function handleClick(event) {
                  event.preventDefault();
                
                  const inputs = document.querySelectorAll('#personName, #aadharNumber, #dob, #cities, #dateoftest, #timeoftest, #radio, #labname, #reportno, #gender');
                
                  inputs.forEach(input => {
                    input.value = '';
                  });
                });
    
                function searchCall() {
                doSearch();
               };
               searchCall();
               function optionDisplay() {
                 generateOptions(data);
               }
               optionDisplay();
    