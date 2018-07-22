import React from 'react';
// About the Logo file format:
// Logo was created with an online logo maker --> free version only allows JPG download
import logo from '../../assets/img/logo_acme.jpg';

export default (props) => (
	<img src={logo} alt="Acme Bank" {...props} />
);
