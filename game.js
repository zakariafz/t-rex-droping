let trex = document.getElementById('trex');
let element = document.getElementById('element');
let element1 = document.getElementById('element1');
let speed = 5
function move(){
    let trexp = parseInt(getComputedStyle(element).right);
    element.style.right = trexp + speed + "px";
    console.log(trexp)
    if (trexp > 800){
        element.style.right = "-20px"
    
    }
}
function move1(){
    let trexp1 = parseInt(getComputedStyle(element1).right);
    element1.style.right = trexp1 + speed + "px";
    if (trexp1 > 800){
        element1.style.right = "-50px"
    }
}

setInterval(move, 10);
setInterval(move1,10);

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