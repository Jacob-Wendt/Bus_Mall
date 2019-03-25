"use strict";

//select three random photos from the image directory and 
//display them side-by-side-by-side in the browser window.

//place img in an array
var imageSrcArray = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg',
'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
console.log (imageSrcArray);
var imgcount = 0
var clicks = 0










//display 3 random imagesimg/tauntaun.jpg
function displayImg () {
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
//no dupe
    if (A.src !== B.src && A.src !== C.src && C.src !== B.src) {
        imgcount++;
    }
    else {
        displayImg ();
    }
};

//receive clicks on those displayed images, and track those clicks for each image.
//You'll also want to track how many times each image is displayed, for statistical purposes.

document.getElementById("A").addEventListener("click", advanceCount);
document.getElementById("B").addEventListener("click", advanceCount);
document.getElementById("C").addEventListener("click", advanceCount);

function advanceCount () {
    clicks++;
    console.log (clicks);
    displayImg ();
};


//constructor function

function Products(src, product, votes) {
    this.src = src;
    this.product = product;
    this.votes = votes;
};

//making the objects 

var bag = new Products('img/bag.jpg', "bag", 0);
var banana = new Products('img/banana.jpg', "banana", 0);
var bathroom = new Products('img/bathroom.jpg', "bathroom", 0);
var boots = new Products('img/boots.jpg', "boots", 0);
var breakfast = new Products('img/breakfast.jpg', "breakfast", 0);
var bubblegum = new Products('img/bubblegum.jpg', "bubblegum", 0);
var chair = new Products('img/chair.jpg', "chair", 0);
var cthulhu = new Products('img/cthulhu.jpg', "cthulhu", 0);
var duck = new Products('img/dog-duck.jpg', "duck", 0);
var dragon = new Products('img/dragon.jpg', "dragon", 0);
var pen = new Products('img/pen.jpg', "pen", 0);
var sweep = new Products('img/sweep.png', "sweep", 0);
var unicorn = new Products('img/unicorn.jpg', "unicorn", 0);
var tauntaun = new Products('img/tauntaun.jpg', "tauntaun", 0);
var usb = new Products('img/usb.gif', "usb", 0);
var water = new Products('img/water-can.jpg', "water can", 0);
var wine = new Products('img/wine-glass.jpg', "wine glass", 0);

console.log ();
