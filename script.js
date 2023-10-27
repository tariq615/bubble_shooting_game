var timer = 60;
var score = 0;
var rn = 0;

function hitrnval(){
   rn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = rn;
}

function increasescore(){
   score +=10;
      document.querySelector("#incval").innerHTML = score;
}

function dectime(){
 var a = setInterval(function(){
   if (timer > 0) {
      timer --;
      document.querySelector("#timeval").innerHTML = timer;    
   }else{
      clearInterval(a);
   document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;

   }
},1000)
}

function bubble(){
   var clutter = "";
for (let i = 0; i < 161; i++) {
   var rn = Math.floor(Math.random()*10)
   clutter +=  `<div class="bubble">${rn}</div>`
}

var a = document.querySelector("#pbtm")
a.innerHTML = clutter
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
var hittedval = Number(dets.target.textContent);
if(hittedval === rn){
   increasescore();
   hitrnval();
   bubble();
}
})

hitrnval();
dectime();
bubble();
