function productCards(product) {
  const div = document.createElement("div");
  div.classList.add("colCard");
  

  const image = domBuilder.img(product.img, "img-card");

  const title = domBuilder.h3(product.name, "titleCard");

  const description = domBuilder.p(product.description, "parrafos");

  const price = domBuilder.h2(product.price, "price");

  const button = domBuilder.button("Agregar", "btnProduct", product.id);

  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(price);
  div.appendChild(button);

  return div;
}

let comprar = localStorage.getItem("clickSaved");

function onSelectClick(event) {
  const idProduct = event.target.dataset.id;
  selectedProduct = products.find(function (product) {
    if (product.id == idProduct) {
      console.log(product)
      return product;
    }
  });
  let comprar = "Agregado";
  localStorage.setItem("clickSaved", comprar);

}

const domBuilder = new DOMBuilder();


window.addEventListener('load', function() {
  const productContainer = document.getElementById('productsContainer');

  products.forEach(function (product) {
    if (product.available) {
      const card = productCards(product);
      productContainer.append(card);
    }
    
  });


  function onSelectClick() {
    let html = '';
    products.forEach(function (item) {
        html += `
        <td class="sub-items">
        <a href=" "><img src="${item.img}" alt=""></a>
        <div class="items">
        <h4>${item.name}</h4>
        <p>Qty: 1</p>
        </div>
        <div class="items2">
         <h4>$${item.price}</h4>
         <div class="trash" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></div>
        </div>
        </td>
       `
    })
    return html;
}

  // DOM

  const btnProduct = document.querySelectorAll('.btnProduct');
  btnProduct.forEach(function (btnProduct) {
    btnProduct.addEventListener('click', onSelectClick);
  });
});
