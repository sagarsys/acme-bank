export default (window) => {
	document.addEventListener('DOMContentLoaded', () => {
		// mobile sidenav init
		window.M && window.M.Sidenav.init(document.querySelectorAll('.sidenav'), null);
		// accordion init
		window.M && window.M.Collapsible.init(document.querySelectorAll('.collapsible'), null);
	});

};
