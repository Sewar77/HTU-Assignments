function change() {
  document.getElementById("changetext").innerHTML = "this is the second text";
}
function returntext() {
  document.getElementById("changetext").innerHTML = "this is the first text";
}

function message() {
  window.alert("this is an alert message");
}
function changecolor() {
  document.getElementById("background").style.backgroundColor = "#DD167B";
  document.getElementById("background").style.color = "white";
}

function back() {
  document.getElementById("background").style.backgroundColor = "white";
  document.getElementById("background").style.color = "black";
}

function hidetext() {
  document.getElementById("background").style.visibility = "hidden";
}
function showtext() {
  document.getElementById("background").style.visibility = "visible";
}
window.onload = function () {
  var a = 0;
  let btn = document.getElementById("button");
  let click = document.getElementById("clicks");
  let reclick = document.getElementById("reset");

  btn.onclick = function () {
    a += 1;
    click.innerHTML = a;
  };
  reclick.onclick = function () {
    a = 0;
    click.innerHTML = a;
  };
};
