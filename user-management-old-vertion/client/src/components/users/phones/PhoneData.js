import React from 'react';

const Phone = ({ phone }) => {
	return (
		<div>
			<span className="property">Number: </span> {phone.number} <br/>
			<span className="property">Type: </span> {phone.phoneType}
		</div>
	);
};

export default Phone;
