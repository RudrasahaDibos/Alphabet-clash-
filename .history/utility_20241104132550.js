function hideElementId(hidesection){
    const hideSection = document.getElementById(hidesection)
    hideSection.classList.add('hidden')
}

function showElementId(showsection){
    const showSection = document.getElementById(showsection)
     showSection.classList.remove('hidden')
}