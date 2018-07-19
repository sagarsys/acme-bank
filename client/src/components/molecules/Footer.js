import React from 'react';

export default () => (
	<footer className="page-footer">
		<div className="footer-copyright">
			<div className="container">
				<span>© {(new Date()).getFullYear()} ACME Bank</span>
				<span className="grey-text text-lighten-4 right">
					Designed & developed by <a className="grey-text text-lighten-4" href="#!">Sagar</a>
				</span>
			</div>
		</div>
	</footer>
);
