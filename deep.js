let person = {
    firstName: 'Ketaki',
    lastName: 'Mayee',
    address: {
        street: 'Garkheda',
        city: 'Maharashtra',
        state: 'Maharshtra',
        country: 'India'
    }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Ramanand'; // disconnected

copiedPerson.address.street = 'Mulund';
copiedPerson.address.city = 'Mumbai';

console.log(person);