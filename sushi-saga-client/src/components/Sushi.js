import React from 'react';

const Sushi = props => {
	return (
		<div className='sushi'>
			<div className='plate' onClick={e => props.eatSushi(props.id)}>
				{/* Tell me if this sushi has been eaten! */
				props.eatenArray.includes(props.sushi) ? null : (
					<img src={props.img_url} width='100%' alt='sushi' />
				)}
			</div>
			<h4 className='sushi-details'>
				{props.name} - ${props.price}
			</h4>
		</div>
	);
};

export default Sushi;
