import React from 'react';
import './Card.css';

const Card = (props) => {
	return (
		<div className='CardContainer' onClick={props.delete}>
			<img src={`https://robohash.org/${props.monster.id}?set=set2&150x150`} alt='pic' />
			<h2>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	);
};

export default Card;
