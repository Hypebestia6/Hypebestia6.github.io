const sala_opis = document.getElementsByClassName("sala_opis") 

console.log(sala_cont, sala_opis)

function showSala_DC(id) {
    sala_opis[id.substring(5)].style.opacity = 1
    sala_opis[id.substring(5)].style.zIndex = 1
}
function hideSala_DC(id) {
    
    sala_opis[id.substring(5)].style.opacity = 0
    sala_opis[id.substring(5)].style.zIndex = 0
}