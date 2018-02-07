//---------------------------GLOBAL VARIABLES---------------------------------//
//how many steps one has taken and can take total
var steps = 0;
const stepsTotal = 6190;

//reference to all the pictures
const imageList = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg"
];

//list of valid commands
/*
i (inventory)
help (lists commands)
walk (walks x steps)
back (walks back x steps)
look (shows something if its there, otherwise shows next thing ahead)
*/

//the "story object" containing the pic, at which stepnumber its located, and text
//to be displayed
const storyText = [
  {
    picture: "1.jpg",
    steps: 0,
    text:
      "You are at the gates of the Bodhi Institute. \
  Beyond you lies the rest of the monastic zone."
  },
  {
    picture: "2.jpg",
    steps: 331,
    text:
      "Jumai's helping with construction here. \
  There's a dry riverbed; the workers are cleaning out all the garbage around the \
  bottom, and the trucks are piling dirt along the sides. Jumai says there will be \
  a garden here - maybe in March, or April. The end of the dry canal is blocked off \
  by large wire frames. You slip through them and keep going."
  },
  {
    picture: "3.jpg",
    steps: 75,
    text:
      "You see some sort of building off the road. \
  Nobody seems to be there. You wonder what it's for."
  },
  {
    picture: "4.jpg",
    steps: 446,
    text:
      "At one end of the canal is the UN peace flame. \
  This is where the path begins to Mayadevi temple, where the Buddha was born. \
  You think about the rebuilt temple and the Bodhi tree, but the path is filled with \
  beggars who cross the border from India and as a foreigner you have to pay to get \
  in. You turn right instead."
  },
  {
    picture: "5.jpg",
    steps: 129,
    text:
      "Between the place where they launch boats full \
  of tourists to the other end of the canal and the spot where the rickshaws gather \
  you see a patch of seaweed. It sways in the water."
  },
  {
    picture: "6.jpg",
    steps: 533,
    text:
      "Two men stop and ask if they can take a picture with \
  you. This happens often. Today you take a picture of them, which they seem surprised \
  about."
  },
  {
    picture: "7.jpg",
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
    picture: "8.jpg",
    steps: 75,
    text:
      "The Korean temple is very big and made of \
  concrete. It's the kind of temple a ghost would haunt, you think."
  },
  {
    picture: "9.jpg",
    steps: 103,
    text:
      "This place does not exist. You don't know \
  what it is supposed to be."
  },
  {
    picture: "10.jpg",
    steps: 33,
    text:
      "The trees are in pretty lines here. They are \
  each on a mound that looks a little like a grave. Two scrows scream at each other."
  },
  {
    picture: "11.jpg",
    steps: 375,
    text:
      "This is the edge of the zone. There's not much \
  here. No cars come down the road. The grass waves in the wind."
  },
  {
    picture: "12.jpg",
    steps: 238,
    text:
      "A group of temples surround a little island here. \
  This is always the most crowded part of the zone. You sit and people watch."
  },
  {
    picture: "13.jpg",
    steps: 321,
    text:
      "Are they getting good TV in there? You wonder. \
  The sky is very blue."
  },
  {
    picture: "14.jpg",
    steps: 337,
    text:
      "You pass the abandoned Japanese temple. They \
  haven't worked on it for years. You hear the Japanese government reached a deal \
  to continue construction."
  },
  {
    picture: "15.jpg",
    steps: 197,
    text:
      "You say hello to the guard and he lets you \
  into the abandoned monastery. It is peaceful in the basement. Water is filling \
  the foundations. There are bird tracks in the mud. There are little fish in the \
  little pools. How did fish get in here?"
  },
  {
    picture: "16.jpg",
    steps: 106,
    text:
      "On your way out you see a small gecko. The guard \
  thinks you are looking for the bathroom."
  },
  {
    picture: "17.jpg",
    steps: 434,
    text:
      "This is where the Mongolian temple was \
  supposed to be. They haven't built anything yet."
  },
  {
    picture: "19.jpg",
    steps: 218,
    text:
      "You stop by the Austrian temple. Austria is \
  not well known in Nepal so they call it the 'Australian Temple'. Inside there is \
  chocolate biscuits and tea. On the wall are reproductions of Rothko paintings."
  },
  {
    picture: "18.jpg",
    steps: 379,
    text:
      "The Vietnamese temple will also probably \
  never be finished. Shingles fall off the bridge. The gate is rusted shut. Lotus \
  flowers grow in the pond."
  },
  {
    picture: "20.jpg",
    steps: 350,
    text:
      "There is a discarded bag of Kurkure on the road. \
  You're familiar with the brand, but not this particular packaging. It might be \
  from India."
  },
  {
    picture: "21.jpg",
    steps: 522,
    text: "Faded prayer flags hang from this tree. Who \
  put them there?"
  },
  {
    picture: "22.jpg",
    steps: 115,
    text:
      "From the top of the bridge you see a huge \
  amphitheater. Someone else is taking pictures there. They seem unhappy with \
  how their pictures turned out."
  },
  {
    picture: "23.jpg",
    steps: 65,
    text:
      "The sun on the water is striking. The two \
  men from before see you and ask you to take their picture for them. You do your \
  best and hope it turns out ok."
  },
  {
    picture: "24.jpg",
    steps: 32,
    text:
      "The excavation here looks like a grave. It's \
  filling with water, even though it hasn't rained in months."
  },
  {
    picture: "25.jpg",
    steps: 15,
    text: "There is a twisting path leading off the main \
  road. You take it."
  },
  {
    picture: "26.jpg",
    steps: 247,
    text:
      "The sign is for a right turn, but there is \
  no right turn here. Maybe the sign was misplaced. You are close to Bodhi."
  },
  {
    picture: "27.jpg",
    steps: 235,
    text:
      "There is a bird on a telephone wire. Purnam \
  keeps talking about 'water crows', but you don't think these are what he is \
  referring to."
  },
  {
    picture: "28.jpg",
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
  body.currentFocus.focus();
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
  var newInputText = checkInput(e);

  document.body.appendChild(newInput);
  document.querySelector(".currentinput").innerHTML = " ";
  document.querySelector(".currentinput").focus();
}

//checks to see if the input matches any commands
function checkInput(e) {
  var textInput = e.target.textContent;
  var text = "";

  if (textInput === "i") {
    text = inventory;
  } else if (textInput === "help") {
    text =
      "Commands: \
        i - bring up inventory, \
        help - bring up list of commands, \
        walk (x) - walk forward x steps, \
        back (x) - walk backwards x steps, \
        look - find the location of the nearest landmark.";
  } else if (textInput === "look") {
    looker(e);
  } else if (textInput.toLowerCase().indexOf("walk") != -1) {
    walker(e);
  } else if (textInput.toLowerCase().indexOf("back") != -1) {
    backer(e);
  } else {
    console.log("hi");
  }
}

function looker(e) {
  console.log("Hello world");
}

function walker(e) {
  console.log("Goodbye world");
}

function backer(e) {
  console.log("back my kickstarter");
}

/*here is what i can do:
make it so the checkenter function applies to the document, not just the element
then make the actual function:
check to see if its enter
if its enter
find the first element with a contenteditable that's true (should only be one)
change the current contenteditable to False
and create a new element thats a blank contenteditable=true
*/
