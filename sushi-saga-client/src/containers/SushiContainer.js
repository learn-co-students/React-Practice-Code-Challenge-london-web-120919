import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = ({ sushis, increaseSushiIndex }) => {
	const renderSushis = () => {
		return sushis.map(sushi => (
			<Sushi name={sushi.name} price={sushi.price} img_url={sushi.img_url} />
		));
	};

	return (
		<Fragment>
			<div className="belt">
				{renderSushis()}
				<MoreButton increaseSushiIndex={increaseSushiIndex} />
			</div>
		</Fragment>
	);
};

export default SushiContainer