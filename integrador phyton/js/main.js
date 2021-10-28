var ranges = document.querySelector("#gridGaps");
var grid = document.querySelector("#cuadricula");
var spanRowGap = document.querySelector("#gridRowGap");
var spanColumnGap = document.querySelector("#gridColumnGap");
ranges.addEventListener("input",function(evt){
  var val = evt.target.value; 
  var span = evt.target.parentElement.querySelector("span");
  
  span.innerHTML = val;console.log(val)
  var prop = evt.target.name;
  grid.style[prop] = val+"px";
  
  // grid-gap span
  var ggSpan = document.querySelector("#span"+prop);
  console.log(ggSpan)
  ggSpan.innerHTML = val;
}, false);