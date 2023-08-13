AOS.init();

if(window.innerWidth <768) {
    AOS.init({once:true, offset: 0});
} else {
    AOS.init({once:true, offset: 120});
}

const cards = document.querySelectorAll(".tv__img");
const see = document.querySelector(".see");

see.addEventListener('click', () => {
    see.classList.toggle('open');
    for(card of cards) {
        card.classList.contains('hiden') ? card.classList.toggle("d-none") : '' 
    }
})


const accardions = document.querySelectorAll(".accardion");

for(item of accardions) {
    item.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}
