import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = props => {
	return (
		<Fragment>
			<div className='belt'>
				{props.sushiArray.map((x, i) => {
					return (
						<Sushi
							key={x.id - 1}
							sushi={x}
							id={i}
							name={x.name}
							img_url={x.img_url}
							price={x.price}
							eatSushi={props.eatSushi}
							eatenArray={props.eatenArray}
						/>
					);
				})}

				<MoreButton moreSushi={props.moreSushi} />
			</div>
		</Fragment>
	);
};

export default SushiContainer;
