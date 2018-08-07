$( document ).ready(function(){
    var random=Math.floor(Math.random()*101+19);
    
    $('#randomNumber').text(random);
    
    var num1= Math.floor(Math.random()*11+1);
    var num2= Math.floor(Math.random()*11+1);
    var num3= Math.floor(Math.random()*11+1);
    var num4= Math.floor(Math.random()*11+1);
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
    $('#numWins').text(wins);
    $('#numLosses').text(losses);

    function reset(){
      
        random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
       } 

    function winner(){
      wins++; 
      $('#numWins').text(wins);
      $('#alert').text('You won!');
      reset();
    }
  
    function loser(){
      losses++;
      $('#numLosses').text(losses);
      $('#alert').text('You lose!');
      reset();
    }
    
    $('#one').on ('click', function(){
      
      userTotal = userTotal + num1;
      $('#finalTotal').text(userTotal); 
          
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
            $('#alert').text(al);
          }   
      })  
    
    $('#two').on ('click', function(){
      
      userTotal = userTotal + num2;
      $('#finalTotal').text(userTotal); 
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          } 
    })  
    
    $('#three').on ('click', function(){
      
      userTotal = userTotal + num3;
      $('#finalTotal').text(userTotal);
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          } 
    })  
    
    $('#four').on ('click', function(){
      
      userTotal = userTotal + num4;
      $('#finalTotal').text(userTotal); 
          if (userTotal == random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          }
    });   
  }); 