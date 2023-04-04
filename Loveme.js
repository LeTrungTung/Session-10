function clickMe() {
  alert("I love you too");
}

function noHover() {
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  document.getElementById("hoverNo").style.left = x + "px";
  document.getElementById("hoverNo").style.top = y + "px";
}
