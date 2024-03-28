const belfer_cont = document.getElementsByClassName("belfer")
const belf_opis = document.getElementsByClassName("bel_opis") 

console.log(belfer_cont, belf_opis)

function showB_DC(id) {
    belf_opis[id.substring(5)].style.opacity = 1
    belf_opis[id.substring(5)].style.zIndex = 1
}
function hideB_DC(id) {
    
    belf_opis[id.substring(5)].style.opacity = 0
    belf_opis[id.substring(5)].style.zIndex = 0
}