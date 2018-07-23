export default (window) => {
	document.addEventListener('DOMContentLoaded', () => {
		// mobile sidenav init
		window.M && window.M.Sidenav.init(document.querySelectorAll('.sidenav'), null);
		// accordion init
		window.M && window.M.Collapsible.init(document.querySelectorAll('.collapsible'), null);
	});
};

/*
// Use materialize-css toast to display notification
 */
export const displayNotification = (message, context = null, duration = 5000) => {
	let classes = '';
	if (context) {
		switch ( context ) {
			case 'error':
				classes = 'red';
				break;
			case 'success':
				classes = 'green';
				break;
			default:
				classes = '';
				break;
		}
	}
	window.M && window.M.toast && window.M.toast({
		html: message,
		displayLength: duration,
		classes
	});
};
