let btnusername = document.getElementById("checkusername");
let btnlength = document.getElementById("checklength");
let usernameInput = document.getElementById("usernamecheck");
let tweetheader = document.getElementById("tweet-header");
let tweetbody = document.getElementById("tweet-body");
let sliceun = document.getElementById("sliceun");
let phonenumber = document.getElementById("phonenumber");
btnlength.disabled = true;
btnusername.disabled = false;

function checkUsername() {
  let str = usernameInput.value.trim();

  if (str.charAt(0) === str.charAt(0).toUpperCase() && str.length > 0) {
    btnlength.disabled = false;
  } else {
    btnlength.disabled = true;
    btnusername.disabled = true;
  }
}

btnusername.onclick = function () {
  checkUsername();
};

btnlength.onclick = function () {
  let tweetContent = document.getElementById("tweet").value.trim();
  let title = document.getElementById("title").value;

  if (tweetContent.length > 280) {
    alert("Tweet could not be more than 280 characters.");
  } else {
    alert("Tweet posted successfully!");
  }
  let str = usernameInput.value.trim();
  let num = document.getElementById("phone").value.trim();
  tweetbody.textContent = tweetContent;
  tweetheader.textContent = title.toUpperCase();
  sliceun.innerHTML = str.slice(0, 3) + "-727@";
  phonenumber.textContent = "XXXXXX" + num.slice(-4);
};
