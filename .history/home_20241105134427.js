

// JavaScript event handler for keyboard button press




document.addEventListener('keyup',function(event){
   const pressKey = event.key
   

   const CurentAlphabet = document.getElementById('alphabet-random')
         const randomCurrentAlphabet = CurentAlphabet.innerText
        const  randomlowerCurrentAlphabets =  randomCurrentAlphabet.toLocaleLowerCase()
        console.log("CurrentAlphabets",randomlowerCurrentAlphabets)
      

        if(pressKey === randomlowerCurrentAlphabets){
        
          const currentscore = CurrentScoreLife('current-scrore')
          const newscore = currentscore + 1;
          setcurrentlifescore('current-scrore',newscore)
       
          RemoveBgColorAlphabet(randomlowerCurrentAlphabets)
        
          continueGame()
        }
        else{
          console.log("your life short ")

           const currentlife = CurrentScoreLife('Current-life')
           const newlife = currentlife - 1
          if(newlife >= 0){
            setcurrentlifescore('Current-life',newlife)
            
          }
          else{
            setcurrentlifescore('Current-life',"your life end")
            gameOver()
         
           
        
          }
        
        }
})











 function continueGame(){
    // genareate random alphabets 
  const alpha =  getrandomAlphabet()
   console.log(alpha)

//    show the dis play 
   const Screenalphabet = document.getElementById('alphabet-random')
   Screenalphabet.innerText = alpha

   setBgColorAlphabet(alpha)

 }


function play(){
    
    // const homeScreen = document.getElementById('home-screen')
    //  homeScreen.classList.add('hidden')
    //  const playGround = document.getElementById('play-ground')
    //  playGround.classList.remove('hidden')

    hideElementId('home-screen')
    hideElementId('score-Screen-final')
    showElementId('play-ground')
    // play new life new score
    setcurrentlifescore('Current-life',5)
    setcurrentlifescore('current-scrore',0)
    continueGame()
}

function gameOver(){
  hideElementId('play-ground')
  showElementId('score-Screen-final')
  // final score 
   
  const lastscore =CurrentScoreLife('current-scrore')

  setcurrentlifescore('final-score',lastscore)

  //clear previous alphabet bg 

  const currentbg =getElementById('')
}

