var day = document.getElementById('container_daily');
var week = document.getElementById('container_weekly');
var month = document.getElementById('container_monthly');
function daily() {
    day.style.display = 'block';
    week.style.display = 'none';
    month.style.display = 'none'; 
}
function weekly() {
    week.style.display = 'block';
    day.style.display = 'none';
    month.style.display = 'none'; 

}
function monthly() {
    month.style.display = 'block';
    day.style.display = 'none';
    week.style.display = "none";
}