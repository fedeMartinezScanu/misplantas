class DOMBuilder {
    constructor(){

    }

    h3(title){
        const h3 = document.createElement('h3');
        h3.textContent =  title;
        return h3;
    }

    img(src){
        const img = document.createElement('img');
        img.src = src;
        return img;
    }

    p(content){
        const p = document.createElement('p');
        p.textContent =  content;
        return p;
    }

    h2(price){
        const h2 = document.createElement('h2');
        h2.textContent =  price;
        return h2;
    }

    button(content, className){
        const button = document.createElement('button');
        button.textContent =  content;
        button.classList.add(className);
        return button;
    }
}