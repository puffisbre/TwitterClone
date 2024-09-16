let positionNmb;
window.onload = function(){
    positionNmb = 0;
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
  let tweetTextId = document.getElementById("tweetText");
  let tweetContent = document.createElement("p");
  let name = document.createElement("h2");
  let username = document.createElement("h4");
  let profileImg = document.createElement("img");
  let tweet = document.createElement("div");
  
  tweet.style.width = "80%";
  tweet.style.height = "20%";
  tweet.style.border = "3px solid blue";
  tweet.style.position = "relative";
  tweet.style.display = "flex";
  tweet.style.left = "10%"
  tweet.style.marginTop = "5%"
  tweet.style.order = positionNmb.toString();
  name.style.position = "absolute";
  name.style.left = "25%"
  name.style.top = "-10%"
  username.style.position = "absolute";
  username.style.left = "33%"
  username.style.top = "-8%"
  tweetContent.style.position = "absolute";
  tweetContent.style.left = "25%";
  tweetContent.style.top = "25%";
  tweetContent.style.fontSize = "25px"
  positionNmb--;
  tweetContent.innerHTML += tweetTextId.value;
  name.innerHTML += NewUser.name;
  username.innerHTML += `${"@"+NewUser.username}`;
  profileImg.src = NewUser.profileImg;
  tweet.appendChild(profileImg);
  tweet.appendChild(name);
  tweet.appendChild(username);
  tweet.appendChild(tweetContent);
  parent.appendChild(tweet);
  tweetTextId.value = "";
}
