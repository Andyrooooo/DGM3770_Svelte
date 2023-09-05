// LOGIC SCRIPTS -----------------------------------------------------------

export async function getRandomNumber() {
	// Fetch a random number between 0 and 100
	// (with a delay, so that we can see it)
	// API to display random number
	const res = await fetch(
		'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new'
	);

	if (res.ok) {
		return await res.text();
	} else {
		// Sometimes the API will fail!
		throw new Error('Request failed');
	}
}
