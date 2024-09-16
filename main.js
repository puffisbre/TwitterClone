let positionNmb;
window.onload = function(){
    positionNmb = 0;
}

function addTweet(){
  let parent = document.getElementById("feedContainer");
  let tweetTextId = document.getElementById("tweetText");
  let tweetText = document.createElement("p");
  let tweet = document.createElement("div");
  
  tweet.style.width = "80%";
  tweet.style.height = "20%";
  tweet.style.border = "3px solid blue";
  tweet.style.position = "relative";
  tweet.style.display = "flex";
  tweet.style.left = "10%"
  tweet.style.marginTop = "5%"
  tweet.style.order = positionNmb.toString();
  positionNmb--;
  tweetText.innerHTML += tweetTextId.value;
  tweet.appendChild(tweetText);
  parent.appendChild(tweet);
  tweetTextId.value = "";
}
