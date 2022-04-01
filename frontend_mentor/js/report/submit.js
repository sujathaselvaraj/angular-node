import { radio, radiobtn } from "./radio.js";
export var submit =document.getElementById("submit");
submit.addEventListener('click', function () {
    
                    var table = document.getElementById("table");
                    var row = table.insertRow(-1);
                    var personName = row.insertCell(0);
                    var aadhar = row.insertCell(1);
                    var dob = row.insertCell(2);
                    var city = row.insertCell(3);
                    var dot = row.insertCell(4);
                    var tot = row.insertCell(5);
                    var res = row.insertCell(6);
                    var labName = row.insertCell(7);
                    var reportNo = row.insertCell(8);
                    var gender = row.insertCell(9);
                    personName.innerHTML = document.getElementById("personName").value;
                    aadhar.innerHTML = document.getElementById("aadharNumber").value;
                    dob.innerHTML = document.getElementById("dob").value;
                    city.innerHTML = document.getElementById("cities").value;
                    dot.innerHTML = document.getElementById("dateoftest").value;
                    tot.innerHTML = document.getElementById("timeoftest").value;
                    res.innerHTML = radio;
                    labName.innerHTML = document.getElementById("labname").value;
                    reportNo.innerHTML = document.getElementById("reportno").value;
                    gender.innerHTML = document.getElementById('gender').value;
                    
                    return false;
                });