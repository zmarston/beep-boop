//business logic

var counter = function(num){
  if(num === 1) {
    return '1';
  } else {
    return counter(num - 1) + ', ' + num;
  }
};
var beepBoopNumber = [];
var translate = function(count) {
  beepBoopNumber = [];
  for (var i = 0; i < count.length; i++) {
    // debugger;
    if (count[i] === "0") {
      beepBoopNumber += "Beep";
    } else if (count[i] === "1") {
      beepBoopNumber += "Boop";
    } else if ((parseInt(count[i]) % 3) === 0) {
      beepBoopNumber += "I'm sorry, Dave. I'm afraid I can't do that.";
    } else {
      beepBoopNumber += count[i];
    }
  };
};

// user interface logic

$(function(){
  $("#beep-boop-form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#number-input").val());
    var count = counter(userInput);
    var toBeepBoop = translate(count)
    $("#result p").text(beepBoopNumber);
  });
});
