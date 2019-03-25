"use strict";

//select three random photos from the image directory and 
//display them side-by-side-by-side in the browser window.

//place img in an array
var imageSrcArray = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
console.log (imageSrcArray);
var imgcount = 0

//display 3 random images
function displayImg() {
    var random = imageSrcArray[Math.floor(Math.random()*imageSrcArray.length)];
    var x = document.getElementById("A");
    x.setAttribute("src", random );
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    document.body.appendChild(x);
    var random = imageSrcArray[Math.floor(Math.random()*imageSrcArray.length)];
    var x = document.getElementById("B");
    x.setAttribute("src", random );
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    document.body.appendChild(x);
    var random = imageSrcArray[Math.floor(Math.random()*imageSrcArray.length)];
    var x = document.getElementById("C");
    x.setAttribute("src", random );
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    document.body.appendChild(x);
    imgcount++;
};

//receive clicks on those displayed images, and track those clicks for each image.
//You'll also want to track how many times each image is displayed, for statistical purposes.
