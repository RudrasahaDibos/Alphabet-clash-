function hideElementId(hidesection){
    const hideSection = document.getElementById(hidesection)
    hideSection.classList.add('hidden')
}

function showElementId(showsection){
    const showSection = document.getElementById(showsection)
     showSection.classList.remove('hidden')
}
function setBgColorAlphabet(BgAlphabetelementId){
    const bgColorAlphabet = document.getElementById(BgAlphabetelementId)
    bgColorAlphabet.classList.add('bg-orange-500')
}
function RemoveBgColorAlphabet(BgremoveAlphabetelementId){
    const bgColorAlphabet = document.getElementById(BgremoveAlphabetelementId)
    bgColorAlphabet.classList.remove('bg-orange-500')
}

function CurrentScoreLife (elementId){
    const currentLifescoreId = document.getElementById(elementId)
    const currrentlifescoretext =  currentLifescoreId.innerText;
    const currentlifscoreenumber = parseInt( currrentlifescoretext)
    // life update 
    const newlife = currentlifenumber - 1
    // life update display 
    if(newlife >= 0){
      currentLifeId.innerText = newlife
      
    }
    else{
      currentLifeId.innerText="your life end"
    }
    return  currentlifscoreenumber;
}
function getrandomAlphabet(){
    const alphabetstext ='abcdefghijklmnopqrstuvwxyz'
    const  alphabetsarray = alphabetstext.split('')
   

    const randomeNumber = Math.random()*25
    const index = Math.round(randomeNumber)
  

    const alphabet = alphabetsarray[index]
     return alphabet
}