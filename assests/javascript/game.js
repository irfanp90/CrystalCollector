var randomTarget;
var wins = 0;
var lost = 0;
var counter = 0;

function resetGame() {
  counter = 0;
  //creating a random user target
  randomTarget = Math.floor(Math.random() * 101) + 19;
  // console.log(randomTarget);
  $(".target").text(" Random Target: " + randomTarget);
  $("#user").html(" Your total score: " + counter);

  //creating a random input for crystals
  $("#crystals").empty();
  for (var i = 0; i < 4; i++) {
    var randomInput = Math.floor(Math.random() * 11) + 1;
    console.log(randomInput);
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "./assests/images/crystalimg.png");
    imageCrystal.attr("data-crystalvalue", randomInput);
    $("#crystals").append(imageCrystal);
  }
}

resetGame();

//click a crystal to generate the value and the value to the counter
$(document).on("click", ".crystal-image", function() {
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);

  // console.log(crystalValue);
  counter += crystalValue;
  $("#user").html(" Your total score: " + counter);
  // console.log(counter);

  // if statment to make a condition regarding counter and random target
  if (counter === randomTarget) {
    wins++;
    console.log(wins);
    $("#win").html(" Win: " + wins);
    resetGame();
  } else if (counter >= randomTarget) {
    lost++;
    console.log(lost);
    $("#lost").html(" Lost: " + lost);

    resetGame();
  }
});
