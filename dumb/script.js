const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
var points = 0

function addPoint(tada){
    points = points+tada
    document.getElementById("totalPoints").innerHTML = points
    console.log(points);
    return;
};

function teleport(){
    document.getElementById("clicky").style.marginLeft = Math.floor(Math.random()*vw-0.09*vw)+"px";
    document.getElementById("clicky").style.marginTop = Math.floor(Math.random()*vh-0.09*vh)+"px";
    addPoint(1);
    return;
};