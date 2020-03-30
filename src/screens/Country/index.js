import React from 'react'
import { useParams } from 'react-router-dom'

function Country({ lande }) {
	let { name } = useParams()
	let mitLand
	
	// Hvis state ikke er loadet, hvis "loading"
	// (så vi ikke får problemer når man skal vise data)
	if (!lande) {
		return <p>Loading...</p>
	} else {
		// Bruger slice da reverse mutater den originale array
		mitLand = lande[name].slice().reverse()
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Confirmed</th>
						<th>Deaths</th>
						<th>Recovered</th>
					</tr>
				</thead>
				<tbody>
					{mitLand.map((land, index) => (
						<tr key={index}>
							<td>{land.date}</td>
							<td>{land.confirmed}</td>
							<td>{land.deaths}</td>
							<td>{land.recovered}</td>
						</tr>))}
				</tbody>
			</table>
		</div>
	)
}



export default Country
