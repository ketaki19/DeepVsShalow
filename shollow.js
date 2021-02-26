let person = {
    firstName: 'Ketaki',
    lastName: 'Mayee',
    address: {
        street: 'Garkheda',
        city: 'Aurangabad',
        state: 'Maharashtra',
        country: 'India'
    }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Kalyani'; // disconnected

copiedPerson.address.street = 'Pimpri Chinchwad'; // connected
copiedPerson.address.city = 'Pune'; // connected

console.log(copiedPerson);