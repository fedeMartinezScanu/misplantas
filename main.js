function productCards(product){
    const div = document.createElement('div');
    div.classList.add('col');

    const image = domBuilder.img(product.img, 'img-card');

    const title = domBuilder.h3(product.name, 'titleCard');

    const description = domBuilder.p(product.description, 'parrafos');
    
    const price = domBuilder.h2(product.price);

    const button = domBuilder.button('Agregar', 'btnProduct', product.id);

    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);

    return div;

}

const domBuilder = new DOMBuilder();

// Session storage
let comprar = sessionStorage.getItem('clickSaved');

function onSelectClick(event){
    const idProduct = event.target.dataset.id;
    selectedProduct = products.find(function(product) {
        if(product.id == idProduct){
            return product;
        }
    })
    console.log(selectedProduct)

    let comprar = 'Agregado'
    sessionStorage.setItem('clickSaved', comprar);
}

    $(window).load(function () {
        const productContainer = $('#productsContainer');

        products.forEach(function(product){
            const card = productCards(product);
            productContainer.appendChild(card);
    });


    // DOM

    const btnProduct = $('.btnProduct');
    btnProduct.forEach(function(btnProduct){
        $(btnProduct).click(onSelectClick);
    })

})