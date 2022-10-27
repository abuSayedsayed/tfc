const memberName = document.querySelector('#name');
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const dateOfBirth = document.querySelector('#birth-date');
const address = document.querySelector('#address');
const form = document.querySelector('#add-member-form');
const image = document.querySelector('#image');
const alertBox = document.querySelector('#alert-box');
const imgContainer = document.querySelector('#img-container');

console.log(alertBox);

document.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validating THe Form
    if (checkForm() === 'All Correct') {
        const date = new Date
        if (image.files[0]) {
            // THis Will Render THe Binary Value of the image
            const reader = new FileReader;

            reader.addEventListener('load', function (e) {
                let binImage = reader.result
                addMember({
                    name: memberName.value,
                    email: email.value,
                    phone: phone.value,
                    dateOfBirth: dateOfBirth.value,
                    address: address.value,
                    image: binImage,
                    givenMoney: 0,
                    date: date.toLocaleDateString(),
                    time: date.toLocaleTimeString(),

                });
                form.reset();
                imgContainer.innerHTML = ` <p class="w-100 p-5 bg-secondary rounded" role="button">Click Here To Select Image</p>`
            });

            reader.readAsDataURL(image.files[0]);


        } else {

            addMember({
                name: memberName.value,
                email: email.value,
                phone: phone.value,
                dateOfBirth: dateOfBirth.value,
                address: address.value,
                image: '',
                givenMoney: 0,
                date: date.toLocaleDateString(),
                time: date.toLocaleTimeString(),

            });
            form.reset();
            imgContainer.innerHTML = ` <p class="w-100 p-5 bg-secondary rounded" role="button">Click Here To Select Image</p>`
        }




    } else {
        alertBox.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ${checkForm()}
        </div>`;


        setTimeout(() => {
            alertBox.innerHTML = '';
        }, 3000);
    }


});



function checkForm() {
    if (memberName.value.length < 5) {
        return 'Name Should Be Greater Than 5 Charechter'
    } else if (!phoneValidator(phone.value)) {
        return 'Phone Number Is Not Valid';

    } else if (!dateOfBirth.value) {
        return 'Date Of Birth is Empty';
    } else if (address.value.length < 10) {
        return 'Adress Must Be More Than 10 Charechters';

    } else if (email.value) {
        if (!emailValidator(email.value)) {
            return 'Email Is Not Correct';
        }
    }


    return 'All Correct'
};


// This FUnction Handels Image Input
image.addEventListener('change', function (e) {
    const file = e.target.files[0]
    imgContainer.innerHTML = `
    <img src="${URL.createObjectURL(file)}" class="w-100 img-thubnail" alt="Image">

    `
})

// This Function checks phone Numbers

function phoneValidator(phone) {
    const regex = /^(\+880|880|0)1(1|[2-9])[0-9]{8}$/

    if (typeof (phone) === 'number') {
        return regex.test(toString(phone))
    }

    return regex.test(phone);
};

// This function valids email 

function emailValidator(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email);

}













// getting document objects \/
// listen onsubmit event (Make it prevent Default )
// verify name , Phone , Email , 
givenMonedate:
time