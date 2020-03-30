import React from 'react'
import { Link } from 'react-router-dom'

function Countries({lande}) {
	if (!lande) {
		return <p>loading...</p>
	}

	return (
		<div>
			<ul>
				{lande.map((land, index) => {
					return (<li key={index}><Link to={`/country/${land}`}>{land}</Link></li>)
				})}
			</ul>
		</div>
	)
}

export default Countries
