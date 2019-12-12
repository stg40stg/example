var slides = require("../json/slides");
console.log(slides);

const renderSlides = (img, text) =>`<div class="slide"><img src="${img}" alt="slide"></div>`;

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem( item.id, item.name, item.price, item.button, item.img));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);
