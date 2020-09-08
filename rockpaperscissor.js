var winner;
function playRound(playerSelection, computerSelection) {
	// your code here!
//        playerSelection = user;
//        computerSelection = comp;
  let a = playerSelection.toLowerCase();
  let b =  computerSelection.toLowerCase();
  
//        console.log(a, b);
        if (a === b )
        {
            var m = "were even";
            winner = m;
            return m;
        }
        else{
                switch(a !== b)
                {
                case a === "paper":
                    {
                        if (b==="rock")
                        {
                            var m = "You win!";
                            winner = m;
                            return m;
                        }
                        else (b=== "scissor")
                            var m = "You loose";
                            winner = m;
                            return m;
                    }
                    case a === "rock":
                        {
                            if (b==="paper")
                            {
                                var m = "You loose!";
                                winner = m;
                                return m;
                            }
                            else (b==="scissor")
                            {
                                var m = "You win!";
                                winner = m;
                                return m;
                            }
                        }
                        case a === "scissor":
                            if(b==="rock")
                            {
                                var m = "You loose";
                                winner = m;
                                return m;
                            }
                            else(b==="paper")
                            {
                                var m = "You win!";
                                winner = m;
                                return m;
                            }
                }
    }
}
//playRound('RocK','Paper');

 function computerPlay()
      
        {       

          var rps = Math.floor((Math.random() * 3) +1);
          var y;         
            if (rps === 1)
            {
                y = "rock";
                console.log("Computer is "+y);
//                console.log(rps);
//                comp = y;
                return y;
            }
            
            else if(rps === 2)
            {
                y = "paper";
               console.log("Computer is "+y);
//               console.log(rps);
//                comp = y;
               return y;
            }
            else(rps === 3);
            {
                y = "scissor"; 
                 console.log("Computer is "+y);
//                 console.log(rps);
//                comp = y;
                 return y;
                 
            }
                          
        }
function game()
{
    var count = 0;
    var wincount = 0;
    while (count <5)
    {
      const user1 = prompt("Please enter rock, paper, scissor: ");
      const playerSelection = user1;
      const computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
       count ++;
       console.log("round "+count);
       
       if (winner === "You win!" )
       {           
            wincount++;
            console.log(winner + "your win count " + wincount);          
        }
    }
    if (wincount >= 3)
    {
        console.log("Final result you win! your win count "+ wincount);
    }
    else if(wincount !== 3)
    {
        console.log("Final result you loose!");
    }
    
     console.log(wincount);
}
game();