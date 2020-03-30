// Hent data from url async
export async function fetchData(url) {
	const response = await fetch(url)
	const result = await response.json()
	return result
}