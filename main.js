let positionNmb;
let parent;
let tweet;
let storageTweet;
let btnId;
let theModal;
window.onload = function(){
    positionNmb = 0;
    btnId = 0;
    parent = document.getElementById("feedContainer"); 
}



class Profile {
    constructor(name, username, profileImg){
        this.name = name;
        this.username = username;
        this.profileImg = profileImg;
    }
}

function addTweet(){
  
  let NewUser = new Profile("Felix", "Flikzerman", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  let parent = document.getElementById("feedContainer");
  tweet = document.createElement("div");
  let tweetTextId = document.getElementById("tweetText");
  let tweetContent = document.createElement("p");
  let name = document.createElement("h2");
  let username = document.createElement("h4");
  let profileImg = document.createElement("img");
  let removeBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  
  
  //Styling the tweet
  tweet.style.width = "100%";
  tweet.style.height = "20%";
  tweet.style.border = "3px solid gray";
  tweet.style.position = "relative";
  tweet.style.display = "flex";
  tweet.style.order = positionNmb.toString();
  tweet.style.overflow = "scroll";
  tweet.style.overflowX = "hidden";
  //Name styling
  name.style.position = "absolute";
  name.style.left = "25%"
  name.style.top = "-10%"
  name.style.color = "white"
  //Username styling
  username.style.position = "absolute";
  username.style.left = "33%"
  username.style.top = "-8%"
  username.style.color = "gray"
  //Content styling
  tweetContent.style.position = "absolute";
  tweetContent.style.left = "25%";
  tweetContent.style.top = "15%";
  tweetContent.style.fontSize = "20px"
  tweetContent.style.color = "white"


  //Edit button management
  editBtn.innerHTML = "Edit";
  editBtn.name = "editBtn";
  editBtn.style.position = "absolute";
  editBtn.style.left = "92%"
  editBtn.style.top = "20%"
  editBtn.style.height = "20px"
  editBtn.style.weight = "10px"
  editBtn.style.backgroundColor = "green";
  editBtn.addEventListener("click", function() {
    editTweet();
});
  //Remove button management
  btnId++;
  removeBtn.id = btnId.toString();
  removeBtn.innerHTML = "Delete";
  removeBtn.name = "removeBtn";
  removeBtn.style.position = "absolute";
  removeBtn.style.left = "92%"
  removeBtn.style.top = "5%"
  removeBtn.style.height = "20px"
  removeBtn.style.weight = "10px"
  removeBtn.style.backgroundColor = "red";
  removeBtn.addEventListener("click", function() {
    removeTweet(this);
});
  
  //Position of tweet so newest tweet is on top
  positionNmb--;
  //Adding text and profile image to the tweet
  tweetContent.innerHTML += tweetTextId.value;
  name.innerHTML += NewUser.name;
  username.innerHTML += `${"@"+NewUser.username}`;
  profileImg.src = NewUser.profileImg;
  //Append content to tweet and then appending to parent container
  tweet.id = positionNmb.toString();
  tweet.appendChild(profileImg);
  tweet.appendChild(name);
  tweet.appendChild(username);
  tweet.appendChild(tweetContent);
  tweet.appendChild(removeBtn);
  tweet.appendChild(editBtn);
  parent.appendChild(tweet);
  //Clears input field when tweeted
  tweetTextId.value = "";
}

function editTweet(){
let backdrop = document.getElementById("bdrop");
backdrop.style.display = "block";
theModal = document.createElement("div");
theModal.id = "theModal";
 theModal.style.display = "block";
 theModal.style.position = "fixed";
 theModal.style.zIndex = "1";
 theModal.style.left = "30%";
 theModal.style.top = "4%";
 theModal.style.width = "39.5%";
 theModal.style.height = "30%";
 theModal.style.overflow = "auto";
 theModal.style.backgroundColor = "white";
 theModal.style.border = "5px solid white"
 parent.appendChild(theModal);
 backdrop.addEventListener('click', function(event) {
  const clickModal = backdrop.contains(event.target);
  if(clickModal){
    theModal.style.display = "none";
    backdrop.style.display = "none";
  }
});
}

function removeTweet(t){
    t.parentNode.remove();
}
