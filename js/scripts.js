var beepBoopNumber = [];
var translate = function(input) {
  beepBoopNumber = [];
  for (var i = 0; i < input.length; i++) {
    // debugger;
    if (input[i] === "0") {
      beepBoopNumber += "Beep";
    } else if (input[i] === "1") {
      beepBoopNumber += "Boop";
    } else if (input[i] === "3") {
      beepBoopNumber += "I'm sorry, Dave. I'm afraid I can't do that.";
    } else {
      beepBoopNumber += input[i];
    }
  };
};

















$(function(){
  $("#beep-boop-form").submit(function(event){
    event.preventDefault();
    var userInput = $("#number-input").val().split("");
    var beepBoop = translate(userInput);

     alert(beepBoopNumber);
  });

});
