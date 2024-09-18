let positionNmb;
let parent;
let tweet;
let storageTweet;
let btnId;
let theModal;
let tweetContent;
let textToEdit = [];
let activeModal;
let activeParentTweet;
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
let NewUser = new Profile("Felix", "Flikzerman", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
function addTweet(){
  
  //#region Variables
  let parent = document.getElementById("feedContainer");
  tweet = document.createElement("div");
  let tweetTextId = document.getElementById("tweetText");
  tweetContent = document.createElement("p");
  let name = document.createElement("h2");
  let username = document.createElement("h4");
  let profileImg = document.createElement("img");
  let removeBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  //#endregion
  
  
  //#region Styling the tweet
  tweet.style.width = "100%";
  tweet.style.height = "20%";
  tweet.style.border = "3px solid gray";
  tweet.style.position = "relative";
  tweet.style.display = "flex";
  tweet.style.order = positionNmb.toString();
  tweet.style.overflow = "scroll";
  tweet.style.overflowX = "hidden";
  //#endregion

  //#region Name styling
  name.style.position = "absolute";
  name.style.left = "25%"
  name.style.top = "1%"
  name.style.color = "white"
  //#endregion

  //#region Username styling
  username.style.position = "absolute";
  username.style.left = "32%"
  username.style.top = "4%"
  username.style.color = "gray"
  //#endregion

  //#region Content styling
  tweetContent.style.position = "absolute";
  tweetContent.style.left = "25%";
  tweetContent.style.top = "15%";
  tweetContent.style.fontSize = "20px"
  tweetContent.style.color = "white"
  //#endregion


  //#region Edit button management
  editBtn.innerHTML = "Edit";
  editBtn.name = "editBtn";
  editBtn.style.position = "absolute";
  editBtn.style.left = "92%"
  editBtn.style.top = "20%"
  editBtn.style.height = "20px"
  editBtn.style.weight = "10px"
  editBtn.style.backgroundColor = "green";
  editBtn.addEventListener("click", function() {
    editTweet(this);
});
//#endregion

  //#region Remove button management
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
//#endregion
  
  //#region Position of tweet so newest tweet is on top
  positionNmb--;
  //#endregion

  //#region Adding text and profile image to the tweet
  tweetContent.innerHTML += tweetTextId.value;
  name.innerHTML += NewUser.name;
  username.innerHTML += `${"@"+NewUser.username}`;
  profileImg.src = NewUser.profileImg;
  //#endregion

  //#region Append content to tweet and then appending to parent container
  tweet.id = positionNmb.toString();
  tweet.appendChild(profileImg);
  tweet.appendChild(name);
  tweet.appendChild(username);
  tweet.appendChild(tweetContent);
  tweet.appendChild(removeBtn);
  tweet.appendChild(editBtn);
  parent.appendChild(tweet);
  textToEdit.push(tweetContent);
  //#endregion

  //#region Clears input field when tweeted
  tweetTextId.value = "";
  //#endregion

}

function editTweet(para){

 //#region Variables
let backdrop = document.getElementById("bdrop");
let profileImg = document.createElement("img");
let parentForm = document.createElement("form");
let editContent = document.createElement("input");
let completeBtn = document.createElement("button");
backdrop.style.display = "block";
theModal = document.createElement("div");
//#endregion

//#region When pushing the edit button, i set the variable "activeParentTweet" to this buttons parent.
activeParentTweet = para.parentNode;
//#endregion

//#region Modal style
theModal.id = "activeModal";
 theModal.style.display = "flex";
 theModal.style.position = "fixed";
 theModal.style.zIndex = "1";
 theModal.style.left = "30%";
 theModal.style.top = "4%";
 theModal.style.width = "40%";
 theModal.style.height = "30%";
 theModal.style.overflow = "auto";
 theModal.style.backgroundColor = "white";
 theModal.style.borderRadius = "25px"
 //#endregion

 //#region Input style
 editContent.style.width = "420px"
 editContent.style.height = "95%"
 editContent.style.marginTop = "1%"
 editContent.style.fontSize = "25px"
 //#endregion
 
 //#region CompleteButton style
 completeBtn.innerHTML = "Save";
 completeBtn.name = "completeBtn";
 completeBtn.style.position = "absolute";
 completeBtn.style.left = "93%"
 completeBtn.style.bottom = "1%"
 completeBtn.style.height = "20px"
 completeBtn.style.width = "45px"
 completeBtn.style.borderRadius = "25px"
 completeBtn.style.backgroundColor = "green";
 completeBtn.addEventListener("click", function() {
   completeEdit(this);
   theModal.remove();
   backdrop.style.display = "none";
});
//#endregion
 
//#region Content in modal and appending children
 profileImg.src = NewUser.profileImg;
 //editContent.value = c.innerHTML;
 parentForm.appendChild(editContent);
 theModal.appendChild(completeBtn);
 theModal.appendChild(profileImg);
 theModal.appendChild(parentForm);
 tweet.appendChild(theModal);
 activeModal = document.getElementById("activeModal");
 //#endregion
 
 //#region Backdrop
 backdrop.addEventListener('click', function(event) {
  const clickModal = backdrop.contains(event.target);
  if(clickModal){
    theModal.remove();
    backdrop.style.display = "none";
  }
});
//#endregion
}

function completeEdit(e){
  let activeParent = activeParentTweet;
  let activeModal = document.getElementById("activeModal");
  let oldContent= activeParent.childNodes[3];
  let newContent = activeModal.childNodes[2].childNodes[0];
  oldContent.innerHTML = newContent.value;
}

function removeTweet(t){
    t.parentNode.remove();
}
