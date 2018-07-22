//*
// CONSTANTS
// */
export const AC_SAVINGS_TYPE = 'savings';
export const AC_CHECKING_TYPE = 'checking';
export const DEPOSIT_TRANSACTION = 'deposit';
export const WITHDRAWAL_TRANSACTION = 'withdrawal';
export const INACTIVE = false;
export const ACTIVE = true;
export const DEFAULT_XHR_HEADERS = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};
export const DEFAULT_STATUS = 100;
export const OK_STATUS = 200;
export const ERROR_STATUS = 400;
export const REDIRECT_STATUS = 300;
export const AUTHENTICATION_ERROR_STATUS = 401;
export const _404_ERROR_STATUS = 404;
export const SERVER_ERROR_STATUS = 500;

/*
* ACTIONS
* */
export const LOGIN_ACTION = 'login';
export const LOGOUT_ACTION = 'logout';
export const REDIRECT_ACTION = 'redirect';
export const SERVER_ERROR = 'server_error';

export const SAVE_ACTION = 'save_changes';
export const SET_ACTIVE = 'activate_account';
export const SET_INACTIVE = 'deactivate_account';

export const SET_HAS_ACTIVITY = 'has_activity';
export const SET_NO_ACTIVITY = 'no_activity';

