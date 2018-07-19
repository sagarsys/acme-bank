export default (window) => {
	// sidenav init mobile
	document.addEventListener('DOMContentLoaded', () => {
		window.M && window.M.Sidenav.init(document.querySelectorAll('.sidenav'), null);
	});
};
