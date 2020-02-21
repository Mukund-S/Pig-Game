/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var activePlayer,score,roundScore,gamePlaying,lastDice;
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying===true)
       {
           var dice=Math.floor(Math.random()*6)+1;
           //var dice=6
           var diceDOM = document.querySelector('.dice');   
           diceDOM.style.display='block';   
           diceDOM.src = 'dice-'+dice+'.png';
           if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
        
       }
});

function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
            roundScore=0;
            document.getElementById('current-0').textContent=0;
            document.getElementById('current-1').textContent=0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            
            document.querySelector('.dice').style.display='none';
};



document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying)
        {
            score[activePlayer]+=roundScore;
            
            document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
            
            var input = document.querySelector('.final-score').value;
            
            var winningScore;
            //Undefined, 0 , null or ' are coerced to be false
            //Anything else coerced to true
            if(input){
                 winningScore = input;
            }
            else
                {
                    winningScore=100;
                }
            
            if(score[activePlayer]>=winningScore)
            {
                gamePlaying=false;
                document.querySelector('#name-'+activePlayer).textContent='Winner!!';
                document.querySelector('.dice').style.display='none';
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            }
            else
            {
                nextPlayer();
            }
        }
    
});


























document.querySelector('.btn-new').addEventListener('click',init);





function init(){
    score=[0,0];
    roundScore=0
    activePlayer=0;
    gamePlaying=true;

    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.dice').style.display='none';
    
    document.querySelector('#name-0').textContent='Player-1';
    document.querySelector('#name-1').textContent='Player-2';
    
  
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}











