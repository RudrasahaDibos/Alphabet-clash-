
 function continueGame(){
    // genareate random alphabets 
  const alpha =  getrandomAlphabet()
   console.log(alpha)

//    show the dis play 
   const Screenalphabet = document.getElementById('alphabet-random')
   se

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