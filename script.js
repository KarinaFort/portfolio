
//write name
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".apresentation", {
        speed: 100,
        strings: [""]
    }).go()
});

//Slide
let slides = [
    { title: 'Clone do Instagram', img: '/img/insta.png' },
    { title: 'Clone da Netflix', img: '/img/netflix.png' },
    { title: 'Jogo da velha', img: '/img/jogo-da-velha.png' },
    { title: 'Jogo da Memória', img: '/img/memoria.png' },
    { title: 'Player de Musica', img: '/img/player.png' },
    { title: 'O Tradicional', img: '/img/srdino.png' }
];


let indexSlide = 0;
let photoProject = document.querySelector('.slide img');
let nameProject = document.querySelector('.slide h2');


renderPhoto(indexSlide);

document.querySelector('.back').addEventListener('click', () => {
    indexSlide--;
    if (indexSlide < 0) {
        indexSlide = 5;
    }
    renderPhoto(indexSlide);

});

document.querySelector('.next').addEventListener('click', () => {
    indexSlide++;
    if (indexSlide > 5) {
        indexSlide = 0;
    }
    renderPhoto(indexSlide);
});

function renderPhoto(index) {
    photoProject.setAttribute('src', slides[index].img);
    photoProject.src = slides[index].img;
    nameProject.textContent = slides[index].title;
    
}


