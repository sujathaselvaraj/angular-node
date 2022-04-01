import { submit } from "./submit.js";
import { search } from "./search.js";
import {cities, city, gender, genders } from "./option.js";
import { radio, radiobtn, radiobtn1 } from "./radio.js";

       document.getElementById("table").style.display="block";
       
                const btn = document.getElementById('submit');
    
                btn.addEventListener('click', function handleClick(event) {
                  event.preventDefault();
                
                  const inputs = document.querySelectorAll('#personName, #aadharNumber, #dob, #cities, #dateoftest, #timeoftest, #radio, #labname, #reportno, #gender');
                
                  inputs.forEach(input => {
                    input.value = '';
                  });
                });
              function radioButton() {
                radiores();
              };
              radioButton();
              function radioButton1() {
                radiores1();
              };
              radioButton1();
                function searchCall() {
                doSearch();
               };
               searchCall();
               function optionDisplay() {
                 generateOptions(data);
               }
               optionDisplay();
    