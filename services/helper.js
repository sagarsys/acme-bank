const CUSTOMERS = require('../data/customers');

const findUser = (id = null, email = null) => {
    // find by id
    if (id) {
        return CUSTOMERS.filter(customer => customer.id === id);
    }
    // find by email
    else if (email) {
        return CUSTOMERS.filter(customer => customer.email === email);
    }
    // default
    return null;
};

module.exports = findUser;
