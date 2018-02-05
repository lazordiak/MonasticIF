//---------------------------GLOBAL VARIABLES---------------------------------//
//how many steps one has taken and can take total
var steps = 0;
const stepsTotal = 6190;

//reference to all the pictures
const imageList = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",
"9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg",
"18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg",
"27.jpg","28.jpg","29.jpg"];

//the "story object" containing the pic, at which stepnumber its located, and text
//to be displayed
const storyText = [{picture:"1.jpg", steps:"", text:""}];

//function that focuses on current input
function clickFocus() {
  var currentFocus = document.getElementsByClassName("currentinput")[0];
  currentFocus.focus();
}

function checkEnter(e) {
  if (e.keyCode == 13) {
    makeNewInput(e);
  }
}

function makeNewInput(e) {
    var newInput = e.target.cloneNode(true);
    e.target.setAttribute("contenteditable", false);
    e.target.classList.remove("currentinput");
    e.target.classList.add("pastinput");
    document.body.appendChild(newInput);
    document.querySelector(".currentinput").innerHTML = " ";
    document.querySelector(".currentinput").focus();
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
