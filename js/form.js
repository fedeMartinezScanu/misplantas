const form = $('#container-form');
const nombre = $('#nombre');
const apellido = $('#apellido');
const email = $('#email');
const domicilio = $('#domicilio');
const pais = $('#pais');
const cp = $('#cp');
const cardName = $('#cardName');
const cardNumber = $('#cardNumber');
const cvv = $('#cvv');


const getFormData = () => {

    const $terms = $('input[name=terms]');
    if(!$terms.is(':checked')){
        return 'Lo lamento, no aceptaste los terminos y condiciones';
    }

    const $firstName = $('input[name=firstname]');
    const $lastName = $('input[name=lastname]');
    const $address = $('input[name=address]');
    const $city = $('input[name=city]');
    const $postal = $('input[name=postal]');
    const $cardName = $('input[name=cardName]');
    const $cardNumber = $('input[name=cardNumber]');
    const $cardDate = $('input[name=cardDate]');
    const $cardCvv = $('input[name=cardCvv]');


    const formData = {
        $firstName : $firstName,
        $lastName : $lastName,
        $address : $address,
        $city : $city,
        $postal : $postal,
        $cardName : $cardName,
        $cardNumber : $cardNumber,
        $cardDate : $cardDate,
        $cardCvv : $cardCvv,
        $terms : $terms
    }

    return formData;
    
}

        $('document').ready(() => {
            const $boton = $('#btn-form');
            $boton.click((event) => {
                event.preventDefault()
                getFormData();
                
            })
        })
