var canvas=document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
img_width="300";
img_height="100";
var img_image;
img_x = "100";
img_y = "100";

function add() {
    img_imgTag= new Image();
    img_imgTag.onload= uploadimg;
    img_imgTag.src= img_image;
}
function uploadimg() {
ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keyPressed=e.keyCode;
console.log(keyPressed);
if((keyPressed>="97" && keyPressed<="122") || (keyPressed>="65" && keyPressed<="90")){
    alphabetkey();
    document.getElementById("d1").innerHTML="you have pressed Alphabet key";
}

else{
    otherkey();
    document.getElementById("d1").innerHTML="you have pressed symbol or other key";
    console.log(otherkey);
}

if(keyPressed>="48" && keyPressed<="57"){
    numberkey();
    document.getElementById("d1").innerHTML="you have pressed number key";
}
if(keyPressed>="37" && keyPressed<="40"){
    arrowkey();
    document.getElementById("d1").innerHTML="you have pressed arrow key";
}
if(keyPressed =="17"){
    specialkey();
    document.getElementById("d1").innerHTML="you have pressed Special key";
}
if(keyPressed =="18"){
    specialkey();
    document.getElementById("d1").innerHTML="you have pressed Special key";
}
if(keyPressed =="27"){
    specialkey();
    document.getElementById("d1").innerHTML="you have pressed Special key";
}
}

function alphabetkey() {
    img_image="a.png";
    add();
}
function numberkey() {
    img_image="n.png";
    add();
}
function arrowkey() {
    img_image="arr.png";
    add();
}
function specialkey() {
    img_image="s.JPG";
    add();
}
function otherkey() {
    img_image="o.png";
    add();
}