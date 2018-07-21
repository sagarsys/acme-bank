export class Transaction {
	constructor(transaction = {}) {
		this.id = transaction.id || null;
		this.date = transaction.date || '';
		this.type = transaction.type || '';
		this.currency = transaction.currency || '';
		this.amount = transaction.amount || null;
		return this;
	}
}

export class Account {
	constructor(account = {}) {
		this.number = account.number || null;
		this.type = account.type || '';
		this.status = account.status || '';
		this.currency = account.currency || '';
		this.balance = account.balance || 0;
		this.transactions = account.transactions || [new Transaction()];
		return this;
	}
}

export default class User {
	constructor(user = {}) {
		this.id = user.id || null;
		this.name = user.name || '';
		this.email = user.email || '';
		this.password = user.password || '';
		this.phone = user.phone || null;
		this.address = '';
		this.accounts = new Account();
		return this;
	}
}
