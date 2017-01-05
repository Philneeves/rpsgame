//alert("Take your pick: Rock, Paper or Scissors");

//$('.head1').fadeIn().fadeOut(1000, function(){
$(window).on("load", function(){

  $('.head1').fadeOut(2000, function(){
    $('.rpsCover').fadeOut(2000);
    $('.image').fadeIn(2000, function(){
    $('.image').addClass('image2');
    $('.starter').slideDown()
    });
  });
});

//$('.image').hover(
//       function(){ $(this).addClass('image2') },
  //     function(){ $(this).removeClass('image2') }
//);






$('#myBtn1').on('click', function() {
  userInput = 'Rock';
    playGame();
    
  }); 

$('#myBtn2').on('click', function() {
	userInput = 'Paper';
	playGame();
});

$('#myBtn3').on('click', function() {
	userInput = 'Scissors';
	playGame();
});

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'Rock';
  } else if (randomNumber === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Game is tied - try again';
  }
  if (userChoice === 'Bomb') {
    return 'You are a God and you always win!';
  }
  if (userChoice === 'Rock') {
    if (computerChoice === 'Paper') {
      return 'The computer wins';
    } else { 
      return 'You win!';
    }
  }
  if (userChoice === 'Paper') {
    if (computerChoice === 'Scissors') {
      return 'The computer wins';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'Scissors') {
    if (computerChoice === 'Rock') {
      return 'The computer wins';
    } else {
      return 'You win!';
    }
  }
}

function playGame() {
  //var userChoice = getUserChoice();
  var userChoice = userInput;
  alert('You chose: ' + userChoice);
  var computerChoice = getComputerChoice();
  alert('Computer chose: ' + computerChoice);
  alert(determineWinner(userChoice, computerChoice));
}

//playGame();