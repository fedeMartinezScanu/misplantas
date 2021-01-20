function productCards(product){
    const div = document.createElement('div');

    const image = domBuilder.img(product.img);

    const title = domBuilder.h3(product.name);

    const description = domBuilder.p(product.description);
    
    const price = domBuilder.h2(product.price);

    const button = domBuilder.button('Agregar al carrito', 'btnProduct');

    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);

    return div;

}

function onSelectClick(){

}

const domBuilder = new DOMBuilder();

window.addEventListener('load', function(){

    const productContainer = document.getElementById('productsContainer');

    products.forEach(function(product){
        const card = productCards();
        productContainer.appendChild(card);
    });

    // DOM

    // const btnProduct = document.querySelectorAll('.btnProduct');
    // btnProduct.forEach(function(btnProduct){
    //     btnProduct.addEventListener('click', onSelectClick);
    // })
})