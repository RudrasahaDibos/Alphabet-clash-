function hideElementId(hidesection){
    const hideSection = document.getElementById(hidesection)
    hideSection.classList.add('hidden')
}

function showElementId(showsection){
    const showSection = document.getElementById(showsection)
     showSection.classList.remove('hidden')
}

function getrandomAlphabet(){
    const alphabetstext ='abcdefghijklmnopqrstuvwxyz'
    const  alphabetsarray = alphabetstext.split('')
    console.log(alphabetsarray)

    const randomeNumber = Math.random()*25
    const index = Math.round(randomeNumber)
    console.log(index)

    const alphabet = 
}