function addData(name,data){
    localStorage.setItem(name, JSON.stringify(data)) ;
    return 'Success'
}



function getData(name){
    const stringData= localStorage.getItem(name);
    return JSON.parse(stringData);
}


function deleteData(name){
    localStorage.removeItem(name);
}


// This function updates the number data type saved in the locale storage
function updateWithExistingNumber(name, number) {
    const prevNumber = localStorage.getItem(name);
    if (prevNumber) {
        const newNumber = Number(prevNumber) + Number(number);
        localStorage.setItem(name, newNumber);
    } else {
        localStorage.setItem(name, number);
    }


}

// Structure will be
// [{name:Sayed,phone:0234254354,Email:sda@gg.vom},{}]

// THis Function Adds member to localstorage
function addMember(data) {
    const previousMembers = getData('members'); //Returns A Object
    const date = new Date;
    if (previousMembers) {
        const memberCount = previousMembers.length;
        const id = `${memberCount + 1}_${date.toLocaleDateString()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}_${date.getDay()}`

        // All Stuffs For generating a new id  
        previousMembers.push({ id, ...data });
        console.log(previousMembers);
        addData('members', previousMembers)


    } else {
        addData('members', [{ id: `${1}_${date.toLocaleDateString()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}_${date.getDay()}`, ...data }]);

    }

}

// This Functions removes Members from locale storage
function removeMember(id) {
    const members = getData('members');
    const memberIndex = members.findIndex(element => element.id === id);
    members.splice(memberIndex, 1)
    addData('members', members)
}



