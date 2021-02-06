class DOMBuilder {
    constructor(){

    }

    h3(title, className){
        const h3 = document.createElement('h3');
        h3.textContent =  title;
        h3.classList.add(className);
        return h3;
    }

    img(src, className){
        const img = document.createElement('img');
        img.src = src;
        img.classList.add(className);
        return img;
    }

    p(content, className){
        const p = document.createElement('p');
        p.textContent =  content;
        p.classList.add(className);
        return p;
    }

    h2(price, className){
        const h2 = document.createElement('h2');
        h2.textContent =  price;
        h2.classList.add(className);
        return h2;
    }

    button(content, className, id){
        const button = document.createElement('button');
        button.textContent =  content;
        button.classList.add(className);
        button.setAttribute('data-id', id);
        return button;
    }
}