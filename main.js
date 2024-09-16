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
  
  //Position of tweet so newest tweet is on top
  positionNmb--;
  //Adding text and profile image to the tweet
  tweetContent.innerHTML += tweetTextId.value;
  name.innerHTML += NewUser.name;
  username.innerHTML += `${"@"+NewUser.username}`;
  profileImg.src = NewUser.profileImg;
  //Append content to tweet and then appending to parent container
  tweet.appendChild(profileImg);
  tweet.appendChild(name);
  tweet.appendChild(username);
  tweet.appendChild(tweetContent);
  parent.appendChild(tweet);
  //Clears input field when tweeted
  tweetTextId.value = "";
}
