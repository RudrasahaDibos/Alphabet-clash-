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
    return curre
}
function getrandomAlphabet(){
    const alphabetstext ='abcdefghijklmnopqrstuvwxyz'
    const  alphabetsarray = alphabetstext.split('')
   

    const randomeNumber = Math.random()*25
    const index = Math.round(randomeNumber)
  

    const alphabet = alphabetsarray[index]
     return alphabet
}