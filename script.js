function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    console.log(h + ":" + m + ":" + s);
    document.getElementsByClassName("time-display")[0].innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10 ) {i = "0" + i};
    return i;
}

var today = new Date();
var d = today.getDay();
var h = today.getHours();

var sayHay = document.getElementsByClassName("sayHay")[0];
if (h > 3 & h <= 11) {
    sayHay.innerHTML = "Hai, Selamat Pagi";
} if (h > 11 & h <= 15) {
    sayHay.innerHTML = "Hai, Selamat Siang";
} if (h > 15 & h <= 18) {
    sayHay.innerHTML = "Hai, Selamat Sore";
} if (h > 18 & h <= 24) {
    sayHay.innerHTML = "Hai, Selamat Malam";
} if (h > 0 & h <= 3) {
    sayHay.innerHTML = "Hai, Selamat Beristirahat";
}
const btn = document.getElementById("button");
btn.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    document.getElementsByTagName("nav")[0].classList.toggle("ndm");
    document.getElementsByClassName("content")[0].classList.toggle("cdm");
    document.getElementsByClassName("content-right")[0].classList.toggle("crdm");
    document.getElementsByTagName("footer")[0].classList.toggle("fdm");
})

