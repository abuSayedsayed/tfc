const userSelect = document.querySelector('#user-select');
const amount = document.querySelector('#amount');
const label = document.querySelector('#label');
const addMoney = document.querySelector('#add-money-btn');
const alertBox = document.querySelector('#alert-box');

window.onload = function () {
    // It will inject the users to the option
    const members = getData('members');
    let membersOption = '';

    members.forEach(member => {
        membersOption += `
        <option value="${member.name}" id="${member.id}" class="select-option">${member.name}</option>
        
        `
    });

    userSelect.innerHTML = membersOption;


}


// For adding Money
addMoney.addEventListener('click', function (e) {
    if (userSelect.value !== '' && amount.value !== '') {
        updateWithExistingNumber('total_money', amount.value)
        amount.value = '';
        label.value = '';
    } else {
        alertBox.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Please Input The Right Value
        </div>`;


        setTimeout(() => {
            alertBox.innerHTML = '';
        }, 3000);
    }
})

