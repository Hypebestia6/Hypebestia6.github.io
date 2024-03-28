const exdiv = document.getElementsByClassName('egzamin_container')
const exdc = document.getElementsByClassName('exdc')

function showEX_DC(id) {
    exdc[id.substring(5)].style.opacity = 1
    exdc[id.substring(5)].style.zIndex = 1
}
function hideEX_DC(id) {
    exdc[id.substring(5)].style.opacity = 0
    exdc[id.substring(5)].style.zIndex = 0
}