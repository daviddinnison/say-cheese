import React from 'react';

export default function CheeseList(cheeses) {
	return (
		<div>
			<ul>
				{cheeses.map( (item) => <li> item </li>)}
			</ul>
		</div>)
}