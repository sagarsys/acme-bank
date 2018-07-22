const AC_SAVINGS_TYPE = 'savings';
const AC_CHECKING_TYPE = 'checking';
const DEPOSIT_TRANSACTION = 'deposit';
const WITHDRAWAL_TRANSACTION = 'withdrawal';
const INACTIVE = false;
const ACTIVE = true;

const CUSTOMERS = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com',
        password: 'john',
        phone: 123456789,
        address: 'Royal Holloway Street, London, UK',
        accounts: [
            {
                number: 666555111,
                type: AC_SAVINGS_TYPE,
                status: INACTIVE,
                currency: 'EUR',
                balance: 5.99,
                transactions: [
                    {
                        id: 0,
                        date: '16-08-2016',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 5.99
                    }
                ]
            },
            {
                number: 767898121,
                type: AC_SAVINGS_TYPE,
                status: ACTIVE,
                currency: 'GBP',
                balance: 2000,
                transactions: [
                    {
                        id: 1,
                        date: '16-02-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'GBP',
                        amount: 4000,
                    },
                    {
                        id: 2,
                        date: '25-02-2018',
                        type: WITHDRAWAL_TRANSACTION,
                        currency: 'GBP',
                        amount: 1000,
                    },
                    {
                        id: 3,
                        date: '27-04-2018',
                        type: WITHDRAWAL_TRANSACTION,
                        currency: 'GBP',
                        amount: 1000,
                    },
                ]
            },
            {
                number: 777888222,
                type: AC_CHECKING_TYPE,
                status: ACTIVE,
                currency: 'GBP',
                balance: 400,
                transactions: [
                    {
                        id: 4,
                        date: '30-01-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'GBP',
                        amount: 200
                    },
                    {
                        id: 5,
                        date: '15-02-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'GBP',
                        amount: 800
                    },
                    {
                        id: 6,
                        date: '25-02-2018',
                        type: WITHDRAWAL_TRANSACTION,
                        currency: 'GBP',
                        amount: 900
                    },
                    {
                        id: 7,
                        date: '30-03-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'GBP',
                        amount: 2000
                    },
                    {
                        id: 8,
                        date: '12-04-2018',
                        type: WITHDRAWAL_TRANSACTION,
                        currency: 'GBP',
                        amount: 700
                    },
                    {
                        id: 9,
                        date: '19-06-2018',
                        type: WITHDRAWAL_TRANSACTION,
                        currency: 'GBP',
                        amount: 1000
                    },
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'Jane DuChalet',
        email: 'jane@acme.com',
        password: 'jane',
        phone: 456372813,
        address: 'Avenue des Talipots, Paris, France',
        accounts: [
            {
                number: 123456789,
                type: AC_SAVINGS_TYPE,
                status: ACTIVE,
                currency: 'EUR',
                balance: 20000,
                transactions: [
                    {
                        id: 10,
                        date: '19-12-2017',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 4000,
                    },
                    {
                        id: 11,
                        date: '22-01-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 2000,
                    },
                    {
                        id: 12,
                        date: '24-02-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 3000,
                    },
                    {
                        id: 13,
                        date: '22-03-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 3000,
                    },
                    {
                        id: 14,
                        date: '20-04-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 2500,
                    },
                    {
                        id: 15,
                        date: '06-05-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 1500,
                    },
                    {
                        id: 16,
                        date: '19-07-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 4000,
                    }
                ]
            },
        ]
    },
    {
        id: 3,
        name: 'Sam Schmidt',
        email: 'sam@email.com',
        password: 'sam',
        phone: 424646868,
        address: '51, Neuer Wandrahm, Hamburg, Germany',
        accounts: [
            {
                number: 999555666,
                type: AC_CHECKING_TYPE,
                status: ACTIVE,
                currency: 'EUR',
                balance: 4500,
                transactions: [
                    {
                        id: 17,
                        date: '27-01-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 4000,
                    },
                    {
                        id: 18,
                        date: '11-02-2018',
                        type: WITHDRAWAL_TRANSACTION,
                        currency: 'EUR',
                        amount: 1500,
                    },
                    {
                        id: 19,
                        date: '29-03-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 4000,
                    },
                    {
                        id: 20,
                        date: '04-04-2018',
                        type: WITHDRAWAL_TRANSACTION,
                        currency: 'EUR',
                        amount: 2000
                    }
                ]
            },
            {
                number: 333444555,
                type: AC_SAVINGS_TYPE,
                status: ACTIVE,
                currency: 'EUR',
                balance: 1500,
                transactions: [
                    {
                        id: 21,
                        date: '30-01-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 250
                    },
                    {
                        id: 22,
                        date: '28-02-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 250
                    },
                    {
                        id: 23,
                        date: '30-03-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 250
                    },
                    {
                        id: 24,
                        date: '30-04-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 250
                    },
                    {
                        id: 25,
                        date: '30-05-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 250
                    },
                    {
                        id: 26,
                        date: '30-06-2018',
                        type: DEPOSIT_TRANSACTION,
                        currency: 'EUR',
                        amount: 250
                    },
                ]
            }
        ]
    },
];

module.exports = CUSTOMERS;
