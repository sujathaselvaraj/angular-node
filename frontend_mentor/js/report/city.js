const cities = {
  OPTION: 'Select a City',
  TN01: 'Chennai Central (Ayanavaram)',
  TN02: 'Chennai North West (Anna Nagar)',
  TN03: 'Chennai North East (Tondiarpet)',
  TN04: 'Chennai East (Royapuram)',
  TN05: 'Chennai North (Kolathur)',
  TN06: 'Chennai South East (Mandavelli)',
  TN07: 'Chennai South (Thiruvanmiyur)',
  TN09: 'Chennai West (K. K. Nagar)',
  TN10: 'Chennai South West (Virugambakkam)',
  TN11: 'Tambaram',
  TN12: 'Poonamallee',
  TN13: 'Ambattur',
  TN14: 'Sholinganallur',
  TN15: 'Ulundurpet / Kallakurichi',
  TN16: 'Tindivanam',
  TN18: 'Red Hills / Gummidipoondi',
  TN19: 'Chengalpattu / Madurantakam',
  TN20: 'Tiruvallur / Thiruttani',
  TN21: 'Kanchipuram / Sriperumbudur',
  TN22: 'Meenambakkam',
  TN23: 'Vellore / Gudiyatham',
  TN24: 'Krishnagiri',
  TN25: 'Thiruvannamalai / Arani',
  TN27: 'Salem (not in use after 1999)',
  TN28: 'Namakkal North / Rasipuram',
  TN29: 'Dharmapuri / Palacode / Harur',
  TN30: 'Salem West / Omalur',
  TN31: 'Cuddalore / Panruti',
  TN32: 'Villupuram',
  TN33: 'Erode East',
  TN34: 'Thiruchengode',
  TN36: 'Gobichettipalayam / Bhavani / Satyamangalam',
  TN37: 'Coimbatore South / Sulur',
  TN38: 'Coimbatore North',
  TN39: 'Tirupur North / Avinashi',
  TN40: 'Mettupalayam',
  TN41: 'Pollachi / Valparai',
  TN42: 'Tirupur South / Kangeyam',
  TN43: 'Udagamandalam / Gudalur',
  TN45: 'Tiruchirapalli West / Manapparai',
  TN46: 'Perambalur',
  TN47: 'Karur / Aravakurichi / Kulithalai',
  TN48: 'Srirangam / Musiri / Thuraiyur',
  TN49: 'Thanjavur / Pattukottai',
  TN50: 'Tiruvarur / Mannargudi',
  TN51: 'Nagapattinam',
  TN52: 'Sankagiri / Mettur',
  TN54: 'Salem East',
  TN55: 'Pudukottai / Iluppur / Aranthangi',
  TN56: 'Perundurai',
  TN57: 'Dindigul / Oddanchatram / Vedasandur / Batlagundu / Palani',
  TN58: 'Madurai South / Tirumangalam',
  TN59: 'Madurai North / Vadipatti / Melur',
  TN60: 'Theni / Uthamapalayam',
  TN61: 'Ariyalur',
  TN63: 'Sivagangai / Karaikudi',
  TN64: 'Madurai Central',
  TN65: 'Ramanathapuram / Paramakudi',
  TN66: 'Coimbatore Central',
  TN67: 'Virudhunagar / Aruppukkottai',
  TN68: 'Kumbakonam',
  TN69: 'Thoothukudi / Kovilpatti',
  TN70: 'Hosur',
  TN72: 'Tirunelveli / Valliyur',
  TN73: 'Ranipet / Arakkonam / Arcot',
  TN74: 'Nagercoil',
  TN75: 'Marthandam / Kanyakumari',
  TN76: 'Tenkasi / Ambasamudram',
  TN77: 'Attur / Vazhapadi',
  TN78: 'Dharapuram / Udumalpet',
  TN79: 'Sankarankovil',
  TN81: 'Tiruchirapalli East / Thiruverumbur',
  TN82: 'Mayiladuthurai / Sirkazhi',
  TN83: 'Vaniyambadi / Tirupattur',
  TN84: 'Srivilliputhur / Sivakasi',
  TN85: 'Kundrathur / Manapakkam',
  TN86: 'Erode West, Erode',
  TN87: 'Sriperumbudur, Kanchipuram',
  TN88: 'Namakkal South, Namakkal',
  TN90: 'Salem South',
  TN91: 'Neyveli, Cuddalore',
  TN92: 'Thiruchendur, Thoothukudi',
  TN93: 'Mettur, Salem',
  TN94: 'Palani, Dindigul',
  TN95: 'Sivakasi, Virudhunagar',
  TN96: 'Kovilpatti, Thoothukudi',
  TN97: 'Arani, Tiruvannamalai',
  TN99: 'Coimbatore West'
  }
  var radio;
  const city= document.getElementById("cities");
  city.innerHTML = generateOptions(cities);
  function generateOptions(data) {
      return Object.entries(data)
        .map(
          ([code, city]) =>
            `<option value="${code}">${code == 'OPTION' ? " " : code}  ${city}</option>`
        )
        .join("");
    }
    const gender = {
      OPTION: 'Gender',
       F: 'Female',
       M: 'Male',
       O: 'Others'
    }
    const genders=document.getElementById('gender');
    genders.innerHTML = generateOptions(gender);
  //   function generateOptions(data) {
  //     return Object.entries(data)
  //       .map(
  //         ([code, city]) =>
  //           `<option value="${code}">${code == 'OPTION' ? " " : code}  ${city}</option>`
  //       )
  //       .join("");
  //   }
  // var form = document.querySelectorAll('myform')
  // var name= document.getElementById("personName");
  // var aadharNo= document.getElementById("aadharNumber");
  // var dob= document.getElementById("dob");
  // var dateTest= document.getElementById("dateoftest");
  // var timeOfTest= document.getElementById("timeoftest");
  // var result= document.getElementById("result");
  // var labName= document.getElementById("labname");
  // var reportNo= document.getElementById("reportno");
  // // console.log(name.form);
  // var resultelement = document.getElementById('demo');
  
    // function display(values) {
    //   // resultelement.innerText = values;
    //   return values;
    // }
    // function myOption(result) {
    //   document.getElementById("demo").value = result;
  
    document.addEventListener("click", radiores(){
      radio = document.getElementById("myresult").value
    });
    document.addEventListener("click", radiores1(){
      radio = document.getElementById("myresult1").value
    });
    // }
     document.getElementById("table").style.display="block";
     document.getElementById("submit").onclick = function () {
  
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
                  // var aadhar = row.insertCell(8);
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
              }
              const btn = document.getElementById('submit');
  
              btn.addEventListener('click', function handleClick(event) {
                // 👇️ if you are submitting a form
                event.preventDefault();
              
                const inputs = document.querySelectorAll('#personName, #aadharNumber, #dob, #cities, #dateoftest, #timeoftest, #radio, #labname, #reportno, #gender');
              
                inputs.forEach(input => {
                  input.value = '';
                });
              });
  
              function doSearch() {
                var searchText = document.getElementById('searchTerm').value;
                var targetTable = document.getElementById('table');
                var targetTableColCount;
                
    
                //Loop through table rows
                for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++ ) {
                    var rowData = '';
    
                    //Get column count from header row
                    if (rowIndex == 0) {
                        targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
                        continue; //do not execute further code for header row.
                    }
                    var colIndex = 1;
    
                    //Process data rows. (rowIndex >= 1)
                    // for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
                        var cellText = '';
                        cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
  
    
                        // if (navigator.appName == 'Microsoft Internet Explorer')
                        //     cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).innerText;
                        // else
                        //     cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
    
                        rowData += cellText;
                    // }
    
                    
                    if (rowData.indexOf(searchText) == -1)
                        targetTable.rows.item(rowIndex).style.display = 'none';
                    else
                        targetTable.rows.item(rowIndex).style.display = 'table-row';
                }
            }
  