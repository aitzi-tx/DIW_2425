let elem = document.querySelector('i');
let start;

function debug(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;
  let rect = elem.getBoundingClientRect();
  document.body.insertAdjacentHTML("beforeBegin",'<d style="top:'+(rect.y + rect.height/2)+'px;left:'+(rect.x + rect.width/2)+'px;"></d>')

  if (elapsed < 3000) { 
    window.requestAnimationFrame(debug);
  }
}


document.querySelector("button").addEventListener("click",function() {
  elem.classList.add("start");
  window.requestAnimationFrame(debug);
})