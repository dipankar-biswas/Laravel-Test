// Dropdown menu
let acc = document.querySelectorAll("aside nav .navbar-nav .tree");
let all_li_ul = document.querySelectorAll("aside nav .navbar-nav .tree ul");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Slide Off Start
        for (let j = 0; j < all_li_ul.length; j++) {
            if(all_li_ul[j].getAttribute('style')){
                all_li_ul[j].style.maxHeight = null;
            }
        }
        // Slide Off End
        let panel = this.querySelector("ul");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

// Menu Active
let currentLocation = window.location.pathname;
const hrefs = document.querySelectorAll('body nav .navbar-nav li a.link-item');
// console.log(currentLocation);
// console.log(hrefs);
for(let i = 0; i < hrefs.length; i++){
    if(currentLocation === hrefs[i].pathname){
        hrefs[i].closest("li.tree").classList.add("active");
        hrefs[i].classList.add("active");
        if(hrefs[i].closest('li.tree ul')){
            hrefs[i].closest('li.tree ul').classList.add('show');
        }
    }
}
