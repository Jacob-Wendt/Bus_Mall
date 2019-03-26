"use strict";

//IMG SOURCE ARRAY
var imageSrcArray = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg',
'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
console.log (imageSrcArray);
var imgcount = 0
var clicks = 0

//DISPLAY FUNCTION
function displayImg () {
    var randomA = productsArray[Math.floor(Math.random()*productsArray.length)];
    var x = document.getElementById("A");
    x.setAttribute("src", randomA.src );
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("data-name", randomA.product)
    var randomB = productsArray[Math.floor(Math.random()*productsArray.length)];
    var x = document.getElementById("B");
    x.setAttribute("src", randomB.src );
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("data-name", randomB.product)
    var randomC = productsArray[Math.floor(Math.random()*productsArray.length)];
    var x = document.getElementById("C");
    x.setAttribute("src", randomC.src );
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("data-name", randomC.product)
//ANTI DUPE 'IF' STATEMENT
    if (A.src !== B.src && A.src !== C.src && C.src !== B.src) {
        imgcount++;
        randomA.views++;
        console.log (randomA);
    }
    else {
        displayImg ();
    }
    
};

//EVENT LISTENERS
document.getElementById("A").addEventListener("click", advanceCount);
document.getElementById("B").addEventListener("click", advanceCount);
document.getElementById("C").addEventListener("click", advanceCount);
document.getElementById("cycle").addEventListener("click", displayImg);

//MAIN FUNCTION
function advanceCount (event) {
    console.log(event.target.src);
    clicks++;
    console.log (clicks);
//LOOP
for (var i = 0; i < productsArray.length; i++) {
    if (event.target.getAttribute('data-name') === productsArray[i].product) {
        productsArray[i].votes++
        console.log(productsArray[i]);
        break
    }
}
//CONTINUE
if (clicks < 25) {
    displayImg ();
}
//KILL EVENT LISTENERS AND DISPLAY RESULTS
else {
    document.getElementById("cycle").removeEventListener("click", displayImg);
    document.getElementById("A").removeEventListener("click", advanceCount);
    document.getElementById("B").removeEventListener("click", advanceCount);
    document.getElementById("C").removeEventListener("click", advanceCount);
    results();

    }
};

//CONSTRUCTOR
var productsArray = [];

function Products(src, product) {
    this.src = src;
    this.product = product;
    this.votes = 0;
    this.views = 0;
    productsArray.push(this);

};

//OBJECTS
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

//PLACE RESULTS
// function results() {
//     document.getElementById("p1").innerHTML = 'votes for bag: ' + bag.votes;
//     document.getElementById("p2").innerHTML = 'votes for banana: ' + banana.votes;
//     document.getElementById("p3").innerHTML = 'votes for bathroom: ' + bathroom.votes;
//     document.getElementById("p4").innerHTML = 'votes for boots: ' + boots.votes;
//     document.getElementById("p5").innerHTML = 'votes for breakfast: ' + breakfast.votes;
//     document.getElementById("p6").innerHTML = 'votes for bubblegum: ' + bubblegum.votes;
//     document.getElementById("p7").innerHTML = 'votes for chair: ' + chair.votes;
//     document.getElementById("p8").innerHTML = 'votes for cthulhu: ' + cthulhu.votes;
//     document.getElementById("p9").innerHTML = 'votes for duck: ' + duck.votes;
//     document.getElementById("p10").innerHTML = 'votes for dragon: ' + dragon.votes;
//     document.getElementById("p11").innerHTML = 'votes for pen: ' + pen.votes;
//     document.getElementById("p12").innerHTML = 'votes for sweep: ' + sweep.votes;
//     document.getElementById("p13").innerHTML = 'votes for unicorn: ' + unicorn.votes;
//     document.getElementById("p14").innerHTML = 'votes for tauntaun: ' + tauntaun.votes;
//     document.getElementById("p15").innerHTML = 'votes for usb: ' + usb.votes;
//     document.getElementById("p16").innerHTML = 'votes for water: ' + water.votes;
//     document.getElementById("p17").innerHTML = 'votes for wine: ' + wine.votes;
// }

function results(){
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [productsArray[0].product, productsArray[1].product, productsArray[2].product, productsArray[3].product, productsArray[4].product, productsArray[5].product, productsArray[6].product, productsArray[7].product, productsArray[8].product, productsArray[9].product, productsArray[10].product, productsArray[11].product, productsArray[12].product, productsArray[13].product, productsArray[14].product, productsArray[15].product, productsArray[16].product],
        datasets: [{
            label: '# of Votes',
            data: [productsArray[0].votes, productsArray[1].votes, productsArray[2].votes, productsArray[3].votes, productsArray[4].votes, productsArray[5].votes, productsArray[6].votes, productsArray[7].votes, productsArray[8].votes, productsArray[9].votes, productsArray[10].votes, productsArray[11].votes, productsArray[12].votes, productsArray[13].votes, productsArray[14].votes, productsArray[15].votes, productsArray[16].votes],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
};