/*Add your JavaScript here*/

//vars
var exxScore = 0;
var intScore = 0;

var questionCount = 0;

//store values
var result = document.getElementById("result");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart");

//event listeners
q1a1.addEventListener("click", exx);
q2a1.addEventListener("click", exx);
q3a1.addEventListener("click", exx);

q1a2.addEventListener("click", int);
q2a2.addEventListener("click", int);
q3a2.addEventListener("click", int);

restart.addEventListener("click", rest);

//disable
q1a1.addEventListener("click", disablebuttons1);
q1a2.addEventListener("click", disablebuttons1);
q2a1.addEventListener("click", disablebuttons2);
q2a2.addEventListener("click", disablebuttons2);
q3a2.addEventListener("click", disablebuttons3);
q3a1.addEventListener("click", disablebuttons3);


//extrovert
function exx() {
  exxScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "\t" + "exxScore = " + exxScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

//introvert
function int() {
  intScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "\t" + "intScore = " + intScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}

//restart
function rest() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  exxScore = 0;
  intScore = 0;
  enablebuttons();
  // console.log("hihih")
}

  function disablebuttons1() {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
  }

  function disablebuttons2() {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
  }

  function disablebuttons3() {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
  }

  function enablebuttons() {
    document.getElementById("q1a1").disabled = false;
    document.getElementById("q1a2").disabled = false;
    document.getElementById("q2a1").disabled = false;
    document.getElementById("q2a2").disabled = false;
    document.getElementById("q3a1").disabled = false;
    document.getElementById("q3a2").disabled = false;
  }

//results
function updateResult() {
  if (exxScore >= 2) {
    result.innerHTML = "You are an Extrovert!";
    console.log("You are an Extrovert!")
  }
  else if (intScore >= 2) {
    result.innerHTML = "You are an Introvert!";
    console.log("You are an Introvert!")
  }


}
