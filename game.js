let trex = document.getElementById('trex');
let element = document.getElementById('element');
let element1 = document.getElementById('element1');
let element2 = document.getElementById('element2');
let element3 = document.getElementById('element3');
let areadrop = document.querySelector('#area4');
let areadrop1 = document.querySelector('#area3');
let areadrop2 = document.querySelector('#area2');
let areadrop3 = document.querySelector('#area1');
let speed = 2;
let curentchild = areadrop.querySelector('#drag1');
let curentchild1 = areadrop1.querySelector('#drag1');
let curentchild2 = areadrop2.querySelector("#drag1");
let curentchild3 = areadrop3.querySelector('#drag1');
function move(){
    
    let trexp = parseInt(getComputedStyle(element).right);
    element.style.right = trexp + speed + "px";
    if (trexp > 800){
        element.style.right = "-20px"
    
    }
   
    if (trexp > 800 - 50 && trexp < 800 - 20 && areadrop.contains(curentchild)){
        alert('game over');
        element.style.right = "-20px"
    }
}
function move1(){
    let trexp1 = parseInt(getComputedStyle(element1).right);
    element1.style.right = trexp1 + speed + "px";
    if (trexp1 > 800){
        element1.style.right = "-50px"
    }
    if (trexp1 > 800 - 50 && trexp1 < 800 - 20 && areadrop1.contains(curentchild)){
        alert('game over');
        element1.style.right = "-20px"
    }
}
function move2(){
    let trexp2 = parseInt(getComputedStyle(element2).right);
    element2.style.right = trexp2 + speed + "px";
    if (trexp2 > 800){
        element2.style.right = "-50px"
    }
    if (trexp2 > 800 - 50 && trexp2 < 800 - 20 && areadrop2.contains(curentchild)){
        alert('game over');
        element2.style.right = "-20px"
    }
}
function move3(){
    let trexp3 = parseInt(getComputedStyle(element3).right);
    element3.style.right = trexp3 + speed + "px";
    if (trexp3 > 800){  
        element3.style.right = "-20px"
    }
    if (trexp3 > 800 - 50 && trexp3 < 800 - 20 && areadrop3.contains(curentchild)){
        alert('game over');
        element3.style.right = "-20px"
    }
}

setInterval(move,10);
setInterval(move1,10);
setInterval(move2,10);
setInterval(move3,10);

function allow(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData('t1', ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    let d = ev.dataTransfer.getData('t1');
    ev.target.appendChild(document.getElementById(d));
}
