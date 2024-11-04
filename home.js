
 function continueGame(){
    // ge
  const alpha =  getrandomAlphabet()
   console.log(alpha)

 }


function play(){
    
    // const homeScreen = document.getElementById('home-screen')
    //  homeScreen.classList.add('hidden')
    //  const playGround = document.getElementById('play-ground')
    //  playGround.classList.remove('hidden')

    hideElementId('home-screen')
    showElementId('play-ground')
    continueGame('alphabet-random')
}