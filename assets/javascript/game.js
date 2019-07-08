$( document ).ready(function(){
    // Generates random number to guess
    var Random=Math.floor(Math.random()*102+19)
    
    // Display random number
    $('#scoreToMatch').text(Random);
    
    //Generate random number for each crystal or pokeball here
    var num1 = Math.floor(Math.random()*12+1)
    var num2 = Math.floor(Math.random()*12+1)
    var num3 = Math.floor(Math.random()*12+1)
    var num4 = Math.floor(Math.random()*12+1)
    
    // Variables to track wins, losses and total
    var playerTotal = 0; 
    var wins = 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset game
  function reset(){
      //makes it so it wont go under 31 or above 100
        Random = Math.floor(Math.random()*69 + 31);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        // the +1 is so the pokeball never equals zero
        num1 = Math.floor(Math.random()*12+1);
        num2 = Math.floor(Math.random()*12+1);
        num3 = Math.floor(Math.random()*12+1);
        num4 = Math.floor(Math.random()*12+1);
        playerTotal = 0;
        $('#totalScore').text(playerTotal);
        } 
  // Display wins
  function winner(){
  alert("Nice throw! You caught the pokemon!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("Oh no! The pokemon got away!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals or pokeballs
    $('.red').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log(playerTotal);
      $('#totalScore').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    // i did this with each pokeball so they dont have the same number
    $('.great').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log(playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.ultra').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log(playerTotal);
      $('#totalScore').text(playerTotal);
  
            if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.master').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log(playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 