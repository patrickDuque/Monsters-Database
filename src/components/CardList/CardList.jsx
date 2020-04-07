import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = (props) => (
	<div className='CardList'>
		{props.monsters.map((mons, index) => <Card key={mons.id} monster={mons} delete={() => props.delete(mons.id)} />)}
	</div>
);

export default CardList;
