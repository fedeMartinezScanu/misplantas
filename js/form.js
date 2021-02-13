const form = $('#container-form');
const nombre = $('#nombre');
const apellido = $('#apellido');
const email = $('#email');
const domicilio = $('#domicilio');
const pais = $('#pais');
const cp = $('#cp');


const getFormData = () => {

    const $terms = $('input[name=terms]');
    if($terms.is(':checked')){
    const $firstName = $('input[name=firstname]');
    const $lastName = $('input[name=lastname]');
    const $address = $('input[name=address]');
    const $city = $('input[name=city]');
    const $postal = $('input[name=postal]');

    const formData = {
        $firstName : $firstName,
        $lastName : $lastName,
        $address : $address,
        $city : $city,
        $postal : $postal,
        $terms : $terms
    }

    return formData;
} else {
    return alert ('Lo lamento, no aceptaste los terminos y condiciones');
}
}

let datos = localStorage.getItem("inputSaved");

function onBlur(){
    let datos = "Completado";

    localStorage.setItem("inputSaved", datos);
}

function onClick(){

    // if(nombre != " " && apellido != " " && email != " " && domicilio != " " && pais != " " && cp != " " ){
    // return alert('Muchas gracias, tu compra ha sido realizada! Pronto te estará llegando.');
    // }
}


        $('document').ready(() => {
            const $boton = $('#btn-form');
            $boton.click((event) => {
                event.preventDefault()
                getFormData();
                
            })
        })
