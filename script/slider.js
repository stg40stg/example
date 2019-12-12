const slides = [
    { img: '../css/img/slide1.jpg', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem."},
    { img: '../css/img/slide2.jpg', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem."},
    { img: '../css/img/slide3.jpg', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem.Lorem ipsum dolor sit amet, consecttur adipisicing elit. Tempora, voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptatem."}
];
console.log(slides);

const renderSlides = (img, text) =>`<div class="slide"><img src="${img}" alt="slide"><p>${text}</p></div>`;

const renderSlidesList = (list) => {
    const slidesList = list.map(item => renderSlides( item.img, item.text));
    document.querySelector('.main').innerHTML = slidesList.join('');
};

renderSlidesList(slides);
