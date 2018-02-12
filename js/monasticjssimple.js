//---------------------------GLOBAL VARIABLES---------------------------------//
//how many steps one has taken and can take total
var steps = 0;
const stepsTotal = 6190;

//the "story object" containing the pic, at which stepnumber its located, and text
//to be displayed
const storyText = [
  {
    picture: "images/1.jpg",
    steps: 0,
    text:
      "You are at the gates of the Bodhi Institute. \
  Beyond you lies the rest of the monastic zone."
  },
  {
    picture: "images/2.jpg",
    steps: 331,
    text:
      "Jumai's helping with construction here. \
  There's a dry riverbed; the workers are cleaning out all the garbage around the \
  bottom, and the trucks are piling dirt along the sides. Jumai says there will be \
  a garden here - maybe in March, or April. The end of the dry canal is blocked off \
  by large wire frames. You slip through them and keep going."
  },
  {
    picture: "images/3.jpg",
    steps: 75,
    text:
      "You see some sort of building off the road. \
  Nobody seems to be there. You wonder what it's for."
  },
  {
    picture: "images/4.jpg",
    steps: 446,
    text:
      "At one end of the canal is the UN peace flame. \
  This is where the path begins to Mayadevi temple, where the Buddha was born. \
  You think about the rebuilt temple and the big tree, but the path is filled with \
  beggars who cross the border from India and foreigners have to pay to get \
  in. You turn right instead."
  },
  {
    picture: "images/5.jpg",
    steps: 129,
    text:
      "Between the place where they launch boats full \
  of tourists to the other end of the canal and the spot where the rickshaws gather \
  you see a patch of seaweed. It looks nice in the sun."
  },
  {
    picture: "images/6.jpg",
    steps: 533,
    text:
      "Two men stop and ask if they can take a picture with \
  you. This happens often. Today you take a picture of them, too, which they \
  seem surprised about."
  },
  {
    picture: "images/7.jpg",
    steps: 483,
    text:
      "You sit in the Chinese temple. The whole \
  place is filled with one huge bench, so there's always a place to sit. Sometimes \
  it's foggy and the seat is wet. Today is sunny, so it's not. Usually there are \
  loudspeakers playing the same chant over and over, but they are off today. Across \
  the street is the Korean temple. Both the Chinese and Korean temple are bigger \
  than regulation, but they both give a lot of money, so no one stops them."
  },
  {
    picture: "images/8.jpg",
    steps: 75,
    text:
      "The Korean temple is very big and made of \
  concrete. It's the kind of temple a ghost would haunt, you think."
  },
  {
    picture: "images/9.jpg",
    steps: 103,
    text:
      "This place does not exist. You don't know \
  what it is supposed to be."
  },
  {
    picture: "images/10.jpg",
    steps: 33,
    text:
      "The trees are in pretty lines here. They are \
  each on a little mound. Two crows scream at each other."
  },
  {
    picture: "images/11.jpg",
    steps: 375,
    text:
      "This is the edge of the zone. There's not much \
  here. No cars come down the road. The grass waves in the wind."
  },
  {
    picture: "images/12.jpg",
    steps: 238,
    text:
      "A group of temples surround a little island here. \
  This is always the most crowded part of the zone. This is the place \
  to people watch."
  },
  {
    picture: "images/13.jpg",
    steps: 321,
    text:
      "Are they getting good TV in there? You wonder. \
  The sky is very blue."
  },
  {
    picture: "images/14.jpg",
    steps: 337,
    text:
      "You pass the abandoned Japanese temple. They \
  haven't worked on it for years. They say the Japanese government reached a deal \
  to continue construction. It could be true."
  },
  {
    picture: "images/15.jpg",
    steps: 197,
    text:
      "You say hello to the guard and he lets you \
  into the abandoned temple. It is peaceful in the basement. Water is filling \
  the foundations. There are bird tracks in the mud. There are little fish in the \
  little pools. How did fish get in here?"
  },
  {
    picture: "images/16.jpg",
    steps: 106,
    text:
      "On your way out you see a small gecko. The guard \
  thinks you are looking for the bathroom."
  },
  {
    picture: "images/17.jpg",
    steps: 434,
    text:
      "This is where the Mongolian temple was \
  supposed to be. They haven't built anything yet."
  },
  {
    picture: "images/19.jpg",
    steps: 218,
    text:
      "You stop by the Austrian temple. Austria is \
  not well known in Nepal so most people call it the 'Australian Temple'. Inside \
  there are chocolate biscuits and tea. On the wall are reproduction Rothko paintings."
  },
  {
    picture: "images/18.jpg",
    steps: 379,
    text:
      "The Vietnamese temple will also probably never be finished. Shingles fall \
  off the bridge. The gate is rusted shut. Lotus flowers grow in the pond."
  },
  {
    picture: "images/20.jpg",
    steps: 350,
    text:
      "There is a discarded bag of Kurkure on the road. \
  You're familiar with the brand, but not this particular packaging. It might be \
  from India."
  },
  {
    picture: "images/21.jpg",
    steps: 522,
    text: "Faded prayer flags hang from this tree. Who \
  put them there?"
  },
  {
    picture: "images/22.jpg",
    steps: 115,
    text:
      "From the top of the bridge you see a huge \
  amphitheater. Two men are taking pictures down there. They seem unhappy with \
  how their pictures turned out."
  },
  {
    picture: "images/23.jpg",
    steps: 65,
    text:
      "The sun on the water is striking. The two \
  men from before see you and ask you to take their picture for them. You do your \
  best and hope it turns out ok."
  },
  {
    picture: "images/24.jpg",
    steps: 32,
    text:
      "There is some sort of excavation here. It looks like a grave. It's \
  filling with water somehow, even though it hasn't rained in months."
  },
  {
    picture: "images/25.jpg",
    steps: 15,
    text: "There is a twisting path leading off the main \
  road. You take it."
  },
  {
    picture: "images/26.jpg",
    steps: 247,
    text:
      "The sign is for a right turn, but there is \
  no right turn here. Maybe the sign was misplaced. You are close to Bodhi."
  },
  {
    picture: "images/27.jpg",
    steps: 235,
    text:
      "There is a bird on a telephone wire. Purnam \
  keeps talking about 'water crows', but you don't think these are what he is \
  referring to. The sun is going down."
  },
  {
    picture: "images/28.jpg",
    steps: 127,
    text:
      "You are back at Bodhi. The monks are \
  sweeping the walk. The gate is open."
  }
];

const inventory =
  "You have your headphones, your phone, and your backpack. Inside \
your backpack is your sketchbook, some medicine, and too many odds and ends to name.";

//function that focuses on current input
function clickFocus() {
  var currentFocus = document.getElementsByClassName("currentinput")[0];
  currentFocus.focus();
}

function checkEnter(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    makeNewInput(e);
  }
}

//THE REASON IT'S MAKING TWO SPACES IS THAT YOU'RE ALSO PRESSING "ENTER" SO IT'S
//INSERTING A LINE BREAK
function makeNewInput(e) {
  var newInput = e.target.cloneNode(true);
  e.target.setAttribute("contenteditable", false);
  e.target.classList.remove("currentinput");
  e.target.classList.add("pastinput");

  //then the part where it checks to see if its the proper place to input
  //this or that other image
  checkInput(e);

  document.body.appendChild(newInput);
  document.querySelector(".currentinput").innerHTML = " ";
  document.querySelector(".currentinput").focus();
}

//checks to see if the input matches any commands
function checkInput(e) {
  var textInput = e.target.textContent;
  var text = "";

  //pulls up inventory
  if (textInput === "i") {
    text = inventory;
    var inventElement = document.createElement("div");
    var textNode = document.createTextNode(text);
    inventElement.appendChild(textNode);
    document.body.appendChild(inventElement);
  //pulls up list of commands
  } else if (textInput === "help") {
      text = [
        "Commands:",
        "i - bring up inventory, ",
        "help - bring up list of commands, ",
        "walk (x) - walk forward x steps, ",
        "back (x) - walk backwards x steps, ",
        "look - find the location of the nearest landmark, ",
        "steps - shows you how far you've done."
      ];
      for (i = 0; i < text.length; i++) {
        var commandElement = document.createElement("div");
        var textNode = document.createTextNode(text[i]);
        commandElement.appendChild(textNode);
        document.body.appendChild(commandElement);
      }
  //pulls up "look" function
  } else if (textInput === "look") {
    looker();
  //steps you forward
  } else if (textInput.indexOf("walk") != -1) {
    walker(e);
  //steps you backwards
  } else if (textInput.indexOf("back") != -1) {
    backer(e);
  //shows you how many steps you have
  } else if (textInput === "steps") {
    var stepsElement = document.createElement("div");
    var textNode = document.createTextNode(steps.toString());
    stepsElement.appendChild(textNode);
    document.body.appendChild(stepsElement);
  } else {
    console.log("You found me");
  }
}

//function for when the input is "look"
function looker() {

  var stepsMatch = false;

  //if the steps attribute of any of the story ojects matches the number of steps
  //taken (i.e. the player is at that many steps) then display the image and
  //text associated with the story element
  for (i = 0; i < storyText.length; i++) {

    //console.log(storyText[i])

    if (storyText[i].steps === steps) {

      var picElement = document.createElement("img");
      picElement.setAttribute("src", storyText[i].picture);
      picElement.setAttribute("alt", "Lumbini Pic");
      document.body.appendChild(picElement);

      var lookElement = document.createElement("div");
      var textNode = document.createTextNode(storyText[i].text);
      lookElement.appendChild(textNode);
      document.body.appendChild(lookElement);

      //so we dont do the next function
      stepsMatch = true;

    }

    //if none of the objects' steps match with number of steps taken, find the
    //nearest object
    if (stepsMatch === false) {

      looker2();

    }
  }
  /*
  if current number is bigger than other number:
  "You see something x steps behind you"
  if current number is smaller than other number:
  "you see something x steps ahead of you"
  */
}

function looker2() {

  var totalSteps = 0;
  var nextSteps = 0;

  for (i = 0; i < (storyText.length - 1); i++) {

    //CANT ALWAYS BE I+1 OR ELSE YOU'LL GO BEYOND THE THING
// its printing because im not subtracting by total amount of steps,
//just steps between two things which may very possibly be less than the amount
//of steps ive taken
    totalSteps = totalSteps + storyText[i].steps;
    nextSteps = nextSteps + storyText[i+1].steps;

    var behind = steps - totalSteps;
    var ahead = steps - nextSteps;

    if (totalSteps < steps < nextSteps) {

      if (behind < -ahead) {
        var lookElement = document.createElement("div");
        var textNode = document.createTextNode("You see something "+behind.toString()+" steps behind you.");
        lookElement.appendChild(textNode);
        document.body.appendChild(lookElement);
      } else {
        var lookElement = document.createElement("div");
        var textNode = document.createTextNode("You see something "+ahead.toString()+" steps ahead of you.");
        lookElement.appendChild(textNode);
        document.body.appendChild(lookElement);
      }

    }
  }
}

function walker(e) {

  var splitInput = e.target.textContent.split(" ");
  var numberInput = Number(splitInput[1])

  steps = steps + numberInput

  for (i = 0; i < storyText.length; i++) {

    //console.log(storyText[i])

    if (storyText[i].steps === steps) {

      var picElement = document.createElement("img");
      picElement.setAttribute("src", storyText[i].picture);
      picElement.setAttribute("alt", "Lumbini Pic");
      document.body.appendChild(picElement);

      var lookElement = document.createElement("div");
      var textNode = document.createTextNode(storyText[i].text);
      lookElement.appendChild(textNode);
      document.body.appendChild(lookElement);

    }
  }
  /*
  steps += turn input into a number
  if steps equals any of the numbers in any of the objects
  return the whole shebang
  if steps equals or is bigger than steps total
  end it
  */
}

function backer(e) {

  var splitInput = e.target.textContent.split(" ");
  var numberInput = Number(splitInput[1])
  console.log(numberInput)

  steps = steps - numberInput

  for (i = 0; i < storyText.length; i++) {

    //console.log(storyText[i])

    if (storyText[i].steps === steps) {

      var picElement = document.createElement("img");
      picElement.setAttribute("src", storyText[i].picture);
      picElement.setAttribute("alt", "Lumbini Pic");
      document.body.appendChild(picElement);

      var lookElement = document.createElement("div");
      var textNode = document.createTextNode(storyText[i].text);
      lookElement.appendChild(textNode);
      document.body.appendChild(lookElement);

    }
  }
  /*
  steps += turn input into a negative number
  if steps equals any of the numbers in any of the objects
  return the whole shebang
  if steps is less than zero
  "you decide to go back"
  */
}

/*to do
figure out preloading
use "hidden" and "show" to show:
1. preloading screen
2. intro screen and then when "begin is typed"
3. game starts

finish parser
*/
