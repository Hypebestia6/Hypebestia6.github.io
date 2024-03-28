window.scroll({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").className = "scrolled"
    }
    else {document.getElementById("header").className = ""
}
    
    if(this.oldScroll > this.scrollY || this.oldScroll == this.scrollY) {
        
        document.getElementById("header").style.top = "0"
        
        
    }
    // else if() {

    // }
    else if(this.oldScroll < this.scrollY && this.scrollY > 1155){ document.getElementById("header").style.top = "-120px"}

    this.oldScroll = this.scrollY
})

