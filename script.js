AOS.init();

const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 8,
    mousewheel: {
        sensitifity: 5,
    },
    spaceBetween: 25,
    effect: 'slide',
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        990: {
            slidesPerView: 6,
            spaceBetween: 26,
        },
        1440: {
            
            slidesPerView: 8,
        },
    },
    slidesPerColumn: 1,
    loopeSlides: 1,
    watchOverflow: true,
});


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
