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
let randomUserNmb = 0;
let NewUser;
//#region Usernames
const usernames = [
  "StarryKnight42",
  "MysticHorizon",
  "QuirkyPanda23",
  "SilverFoxDreams",
  "CosmicVoyager",
  "EchoingWaves",
  "VelvetShadow",
  "CuriousOtter",
  "ElectricPineapple",
  "DreamyDolphin",
  "WanderingNomad",
  "GloomyClouds",
  "FireflyWhisper",
  "FrostedMuffin",
  "EnchantedEcho",
  "SolarFlare98",
  "LunarLagoon",
  "HiddenGem34",
  "ThunderingCheetah",
  "WhimsicalWanderer",
  "RadiantRaccoon",
  "MidnightSunset",
  "PlayfulPebble",
  "StarlitPath",
  "GentleGiant",
  "NeonNinja",
  "SereneSeashell",
  "CuriousCactus",
  "EchoedDreams",
  "BlazingComet",
  "SnazzySphinx",
  "TwilightTurtle",
  "PolkaDotParrot",
  "SilentWhirlwind",
  "PuzzledPenguin",
  "BreezyBanshee",
  "CuddlyCoyote",
  "GoldenGiraffe",
  "WanderingWisp",
  "RainbowPuff",
  "ShimmeringSprite",
  "DaringDingo",
  "VelvetVortex",
  "SpiritedSailor",
  "FrostyFern",
  "WhisperingWillow",
  "JollyJellyfish",
  "SerendipitySpark",
  "GalacticGnome",
  "CuriousCricket",
  "RiddleRaven",
  "WistfulWhale",
  "SpicySquirrel",
  "MysticMarshmallow",
  "DappledDreamer",
  "CloudyCanvas",
  "SapphireSphinx",
  "EnigmaticEagle",
  "CozyCloud",
  "LivelyLynx",
  "StarlitStardust",
  "CharmedChinchilla",
  "InfiniteInk",
  "WittyWalrus",
  "RainbowRider",
  "CosmicCrane",
  "SilkySail",
  "ZanyZebra",
  "DreamweaverDaisy",
  "SassySalamander",
  "GentleGlade",
  "HappyHorizon",
  "SereneSprite",
  "TwinklingTide",
  "GlimmeringGale",
  "CheeryChameleon",
  "EnchantedOwl",
  "MistyMountain",
  "FunkyFalcon",
  "RadiantRiver",
  "BreezyBlossom",
  "QuizzicalQuokka",
  "VelvetVine",
  "EclecticEclipse",
  "WhimsicalWren",
  "BoldBadger",
  "StarrySolstice",
  "CuriousCrow",
  "LuminousLagoon",
  "SparkingSerpent",
  "DaringDolphin",
  "SunnySundew",
  "CharmingChowder",
  "GlowingGalaxy",
  "FrostyFirefly",
  "PlayfulPixie",
  "TidalTurtle",
  "VibrantVortex",
  "ZephyrZest",
  "PonderingPine"
];
//#endregion
//#region Names
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Isaac",
  "Julia",
  "Kevin",
  "Lily",
  "Mason",
  "Nina",
  "Oliver",
  "Paige",
  "Quinn",
  "Ryan",
  "Sophia",
  "Thomas",
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
  "Zach",
  "Amelia",
  "Benjamin",
  "Clara",
  "David",
  "Ella",
  "Felix",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Kira",
  "Leo",
  "Mia",
  "Noah",
  "Oriana",
  "Parker",
  "Riley",
  "Samantha",
  "Tyler",
  "Ursula",
  "Violet",
  "Wyatt",
  "Xena",
  "Yvonne",
  "Zane",
  "Addison",
  "Brandon",
  "Chloe",
  "Daniel",
  "Emily",
  "Freddie",
  "Gianna",
  "Hugo",
  "Isla",
  "Jasper",
  "Kylie",
  "Lucas",
  "Maya",
  "Nathan",
  "Olivia",
  "Paxton",
  "Quincy",
  "Reese",
  "Sebastian",
  "Talia",
  "Uriah",
  "Vera",
  "Wesley",
  "Ximena",
  "Yosef",
  "Zelda",
  "Ashley",
  "Carter",
  "Daisy",
  "Eli",
  "Felicity",
  "Graham",
  "Holly",
  "Ian",
  "Jade",
  "Kendall",
  "Levi",
  "Maddie",
  "Nicholas",
  "Olive",
  "Preston",
  "Quinlan",
  "Rosa",
  "Seth",
  "Tessa",
  "Ulysses",
  "Vance",
  "Willa",
  "Xerxes",
  "Yasmine",
  "Zion"
];
//#endregion
//#region Images
const randomImageLinks = [
  "https://picsum.photos/200?random=1",
  "https://picsum.photos/200?random=2",
  "https://picsum.photos/200?random=3",
  "https://picsum.photos/200?random=4",
  "https://picsum.photos/200?random=5",
  "https://picsum.photos/200?random=6",
  "https://picsum.photos/200?random=7",
  "https://picsum.photos/200?random=8",
  "https://picsum.photos/200?random=9",
  "https://picsum.photos/200?random=10",
  "https://picsum.photos/200?random=11",
  "https://picsum.photos/200?random=12",
  "https://picsum.photos/200?random=13",
  "https://picsum.photos/200?random=14",
  "https://picsum.photos/200?random=15",
  "https://picsum.photos/200?random=16",
  "https://picsum.photos/200?random=17",
  "https://picsum.photos/200?random=18",
  "https://picsum.photos/200?random=19",
  "https://picsum.photos/200?random=20",
  "https://picsum.photos/200?random=21",
  "https://picsum.photos/200?random=22",
  "https://picsum.photos/200?random=23",
  "https://picsum.photos/200?random=24",
  "https://picsum.photos/200?random=25",
  "https://picsum.photos/200?random=26",
  "https://picsum.photos/200?random=27",
  "https://picsum.photos/200?random=28",
  "https://picsum.photos/200?random=29",
  "https://picsum.photos/200?random=30",
  "https://picsum.photos/200?random=31",
  "https://picsum.photos/200?random=32",
  "https://picsum.photos/200?random=33",
  "https://picsum.photos/200?random=34",
  "https://picsum.photos/200?random=35",
  "https://picsum.photos/200?random=36",
  "https://picsum.photos/200?random=37",
  "https://picsum.photos/200?random=38",
  "https://picsum.photos/200?random=39",
  "https://picsum.photos/200?random=40",
  "https://picsum.photos/200?random=41",
  "https://picsum.photos/200?random=42",
  "https://picsum.photos/200?random=43",
  "https://picsum.photos/200?random=44",
  "https://picsum.photos/200?random=45",
  "https://picsum.photos/200?random=46",
  "https://picsum.photos/200?random=47",
  "https://picsum.photos/200?random=48",
  "https://picsum.photos/200?random=49",
  "https://picsum.photos/200?random=50",
  "https://picsum.photos/200?random=51",
  "https://picsum.photos/200?random=52",
  "https://picsum.photos/200?random=53",
  "https://picsum.photos/200?random=54",
  "https://picsum.photos/200?random=55",
  "https://picsum.photos/200?random=56",
  "https://picsum.photos/200?random=57",
  "https://picsum.photos/200?random=58",
  "https://picsum.photos/200?random=59",
  "https://picsum.photos/200?random=60",
  "https://picsum.photos/200?random=61",
  "https://picsum.photos/200?random=62",
  "https://picsum.photos/200?random=63",
  "https://picsum.photos/200?random=64",
  "https://picsum.photos/200?random=65",
  "https://picsum.photos/200?random=66",
  "https://picsum.photos/200?random=67",
  "https://picsum.photos/200?random=68",
  "https://picsum.photos/200?random=69",
  "https://picsum.photos/200?random=70",
  "https://picsum.photos/200?random=71",
  "https://picsum.photos/200?random=72",
  "https://picsum.photos/200?random=73",
  "https://picsum.photos/200?random=74",
  "https://picsum.photos/200?random=75",
  "https://picsum.photos/200?random=76",
  "https://picsum.photos/200?random=77",
  "https://picsum.photos/200?random=78",
  "https://picsum.photos/200?random=79",
  "https://picsum.photos/200?random=80",
  "https://picsum.photos/200?random=81",
  "https://picsum.photos/200?random=82",
  "https://picsum.photos/200?random=83",
  "https://picsum.photos/200?random=84",
  "https://picsum.photos/200?random=85",
  "https://picsum.photos/200?random=86",
  "https://picsum.photos/200?random=87",
  "https://picsum.photos/200?random=88",
  "https://picsum.photos/200?random=89",
  "https://picsum.photos/200?random=90",
  "https://picsum.photos/200?random=91",
  "https://picsum.photos/200?random=92",
  "https://picsum.photos/200?random=93",
  "https://picsum.photos/200?random=94",
  "https://picsum.photos/200?random=95",
  "https://picsum.photos/200?random=96",
  "https://picsum.photos/200?random=97",
  "https://picsum.photos/200?random=98",
  "https://picsum.photos/200?random=99",
  "https://picsum.photos/200?random=100"
];



//#endregion
window.onload = function(){
    positionNmb = 0;
    btnId = 0;
    parent = document.getElementById("feedContainer");
    checkInputField();
}

function checkInputField(){
  let inputValue = document.getElementById("tweetText");
  setInterval(function () {
    
    NewUser = new Profile(names[randomUserNmb], usernames[randomUserNmb], randomImageLinks[randomUserNmb]);
    if(inputValue.value == ""){
      document.getElementById("addTweet").disabled = true;
    }
  }, 10);
}

function activateInputfield(){
  document.getElementById("addTweet").disabled = false;
}

class Profile {
    constructor(name, username, profileImg){
        this.name = name;
        this.username = username;
        this.profileImg = profileImg;
    }
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

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
  tweet.style.flexShrink = "0";
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
  username.style.top = "15%"
  username.style.left = "23%"
  username.style.color = "gray"
  username.style.marginLeft = "10px"
  //#endregion

  //#region Content styling
  tweetContent.style.position = "absolute";
  tweetContent.style.left = "25%";
  tweetContent.style.top = "35%";
  tweetContent.style.fontSize = "20px"
  tweetContent.style.color = "white"
  //#endregion


  //#region Edit button management
  editBtn.innerHTML = "Edit";
  editBtn.name = "editBtn";
  editBtn.style.position = "absolute";
  editBtn.style.left = "85%"
  editBtn.style.top = "80%"
  editBtn.style.height = "20px"
  editBtn.style.width = "50px"
  editBtn.style.backgroundColor = "green";
  editBtn.style.border = "none";
  editBtn.style.borderRadius = "30px"
  editBtn.style.color = "white"
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
  removeBtn.style.top = "81%"
  removeBtn.style.height = "20px"
  removeBtn.style.width = "50px"
  removeBtn.style.backgroundColor = "red";
  removeBtn.style.border = "none";
  removeBtn.style.borderRadius = "30px"
  removeBtn.style.color = "white"
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
  
  randomUserNmb = getRandomInt(0, 99);
console.log(randomUserNmb);
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

//#region Style img
profileImg.style.height = "100px";
profileImg.style.width = "100px";
profileImg.style.borderRadius = "50px";
profileImg.style.marginLeft = "13%"
//#endregion

//#region Modal style
theModal.id = "activeModal";
 theModal.style.display = "flex";
 theModal.style.flexDirection = "column";
 theModal.style.justifyContent = "center";
 theModal.style.position = "fixed";
 theModal.style.zIndex = "1";
 theModal.style.left = "30%";
 theModal.style.top = "4%";
 theModal.style.width = "40%";
 theModal.style.height = "20%";
 theModal.style.overflow = "auto";
 theModal.style.backgroundColor = "white";
 theModal.style.borderRadius = "25px";
 //#endregion

 //#region Input style
 editContent.style.position = "absolute";
 editContent.style.top = "-105%";
 editContent.style.left = "27%";
 editContent.style.width = "420px";
 editContent.style.height = "25%";
 editContent.style.marginTop = "35%";
 editContent.style.fontSize = "25px";
 editContent.style.textAlign = "center";
 editContent.style.borderRadius = "30px"
 editContent.value = activeParentTweet.childNodes[3].innerHTML;
 //#endregion
 
 //#region CompleteButton style
 completeBtn.innerHTML = "Save";
 completeBtn.name = "completeBtn";
 completeBtn.style.position = "absolute";
 completeBtn.style.left = "82%";
 completeBtn.style.fontSize = "15px";
 completeBtn.style.color = "white";
 completeBtn.style.bottom = "39%";
 completeBtn.style.height = "40px";
 completeBtn.style.width = "65px";
 completeBtn.style.borderRadius = "25px";
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
