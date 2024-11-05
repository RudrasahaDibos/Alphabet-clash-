

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
          
          continueGame()
        }
        else{
          console.log("your life short ")
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