// import { cities } from "./city.js";
// import { genders } from "./genders.js"
import { radio, radiores, radiores1} from "./option.js";
function showOption() {
 console.log("hai");
 radiores();
 radiores1();
};
showOption();

import { doSearch } from "./search.js";
function searchAadhar() {
    function doSearch() {
        var searchText = document.getElementById('searchTerm').value;
        var targetTable = document.getElementById('table');
        var targetTableColCount;
        for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++ ) {
            var rowData = '';
            if (rowIndex == 0) {
                targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
                continue;
            }
            var colIndex = 1;
                var cellText = '';
                cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
                rowData += cellText;

            if (rowData.indexOf(searchText) == -1)
                targetTable.rows.item(rowIndex).style.display = 'none';
            else
                targetTable.rows.item(rowIndex).style.display = 'table-row';
        }
    }
    
};
searchAadhar();