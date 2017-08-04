import React from 'react';

export default function CheeseList(props) {
	const cheeses = props.cheeses.map((cheese,index) => (
		<li key={index}>
			{cheese}
		</li>
	))
	return (
		<div>
			<ul id="cheeseList">
				{cheeses}
			</ul>
		</div>)
}