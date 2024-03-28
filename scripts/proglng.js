const lang_dcs = document.getElementsByClassName("lang_container")
const lang_dcs2 = document.getElementsByClassName("lang_dc") 
const icons = document.getElementsByClassName("icons")

function showDC(id) {
    lang_dcs[id.substring(5)].style.zIndex = 1
    lang_dcs2[id.substring(5)].style.opacity = 1
    icons[id.substring(5)].style.zIndex = 1
}
function hideDC(id) {
    lang_dcs[id.substring(5)].style.zIndex = 0
    lang_dcs2[id.substring(5)].style.opacity = 0
}