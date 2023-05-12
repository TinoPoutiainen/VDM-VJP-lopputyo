
var imgUrl  = "/pictures/VDM/hoodie.png";
window.randomImage = function() {
    var elem = document.createElement("img");
    var container = document.querySelector("bg-graphic");
    var availW = container.offsetWidth  - 60;
    var availH = container.offsetHeight  - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';

    elem.src = imgUrl;
    elem.setAttribute("height", "60");
    elem.setAttribute("width", "60");
    elem.style.left = randomX;
    elem.style.top = randomY;
    container.appendChild(elem);
}