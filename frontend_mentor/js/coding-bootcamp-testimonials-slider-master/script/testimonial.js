
const prev = document.getElementById('slide1');
const next = document.getElementById('slide2');
function previousSlide() {
    prev.style.display = 'block';
    next.style.display = 'none';
}
function nextSlide() {
    prev.style.display = 'none';
    next.style.display = 'block';
}