import React from 'react'

function Home() {

	return (
		<div>
		<div className="introText">
			<h1>Corona-virus(COVID-19)</h1>
			<h3>Quick access to updated data in every affected country in the world!</h3>
		</div>
		<hr></hr>
		<p>COVID-19, or Corona-virus, is affecting the world and the daily life as we know it.<br></br>
		This page shows data for your country with 2 quick clicks!</p>
		
		<ol>
			<li>Click on "Countries" in the Navbar</li>
			<li>Click on any country you want</li>
		</ol>
		<br></br>
		<hr></hr>
		<h1>Related pages</h1>
		<ul>
			<li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">Coronavirus // WHO</a></li>
			<li><a href="https://en.wikipedia.org/wiki/Coronavirus" target="_blank">Coronavirus // wikipedia</a></li>
			<li><a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019" target="_blank">COVID-19 // wikipedia</a></li>
			<li><a href="https://github.com/pomber/covid19" target="_blank">Provided data // github</a></li>
		</ul>
		</div>
	)
}

export default Home