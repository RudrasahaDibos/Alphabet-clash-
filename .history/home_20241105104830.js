

// JavaScript event handler for keyboard button press




document.addEventListener('keyup',function(event){
   const pressKey = event.key
   console.log("presskey",pressKey)

   const CurentAlphabet = document.getElementById('alphabet-random')
         const randomCurrentAlphabet = CurentAlphabet.innerText
        const  randomlowerCurrentAlphabets =  randomCurrentAlphabet.toLocaleLowerCase()
        

})











 function continueGame(){
    // genareate random alphabets 
  const alpha =  getrandomAlphabet()
   

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