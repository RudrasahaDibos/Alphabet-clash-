

// JavaScript event handler for keyboard button press




document.addEventListener('keyup',function(event){
   const pressKey = event.key
   console.log("presskey",pressKey)

   const CurentAlphabet = document.getElementById('alphabet-random')
         const randomCurrentAlphabet = CurentAlphabet.innerText
        const  randomlowerCurrentAlphabets =  randomCurrentAlphabet.toLocaleLowerCase()
        console.log("CurrentAlphabets",randomlowerCurrentAlphabets)
      

        if(pressKey === randomlowerCurrentAlphabets){
          console.log('Your score wellfall')

            // get current elementId
            const currentscore = CurrentScoreLife('current-scrore')
            // Score update
           const newscore = currentscore + 1;
          //  score update document
           set
          RemoveBgColorAlphabet(randomlowerCurrentAlphabets)
          // countine this game 
          continueGame()
        }
        else{
          console.log("your life short ")

           const currentlife = CurrentScoreLife('Current-life')
          // // life update 
           const newlife = currentlife - 1
          // // life update display 
          if(newlife >= 0){
            setcurrentlifescore('Current-life',newlife)
            
          }
          else{
            setcurrentlifescore('Current-life',"your life end")
        
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
    showElementId('play-ground')
    continueGame()
}