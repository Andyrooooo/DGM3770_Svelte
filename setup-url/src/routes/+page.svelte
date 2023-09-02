<script>
	// Introduction script----------------------------------------------------
	// let name = 'Svelte';
	// let src = 'https://i.pinimg.com/originals/7f/e1/a3/7fe1a3c59fad552cd5346451cbf51e4b.jpg';
	// let doggo = 'doggo';
	// import Practice from './practicePage.svelte';
	// let string = `Svelte is so <strong>COOOOOLLLL!!!<strong/>`;

	// Reactivity Script ------------------------------------------------------
	/* let count = 0;
	function increment() {
		count += 1;
	} */

	/* let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	} */

	/* let counter = 0;

	$: {
		console.log(`the count is ${counter}`);
		console.log(`I will also show up every time MUAHAHAH`);
	}

	function handleClick() {
		counter += 1;
	}

	$: if (counter >= 10) {
		alert('Whoa! thats way too high');
		counter = 0;
	} */

	/* let numbers = [1, 2, 3, 4];

	function addNumber() {
		// numbers.push(numbers.length + 1);
		// numbers = numbers;

		// numbers = [...numbers, numbers.length + 1];

		numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0); */

	// PROPS script ---------------------------------------------------------------------------------
	/* import Practice from './practicePage.svelte'; */

	// import Practice from './practicePage.svelte';

	// const pkg = {
	// 	name: 'svelte',
	// 	speed: 'blazing',
	// 	version: 4,
	// 	website: 'https://svelte.dev'
	// };

	/* LOGIC SCRIPtS ------------------------------------------------------------------------------ */
	// let count = 0;

	// function increment() {
	// 	count += 1;
	// }

	/* let count = 0;

	function increment() {
		count += 1;
	} */

	/* const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0]; */

	import Practice from './practicePage.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<!-- Introduction html ------------------------------------------------------------------------------>
<!-- <h1>Hello {name}</h1>
<img {src} alt="A cute {doggo}" />
<p class="firstParagraph">This is a paragraph</p> -->
<!-- <Practice /> -->
<!-- <p>{@html string}</p> -->

<!-- Reactivity html -------------------------------------------------------------------------------->
<!-- <button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button> -->

<!-- <button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p> -->

<!-- <button on:click={handleClick}>
	Clicked {counter}
	{counter === 1 ? 'time' : 'times'}
</button> -->

<!-- We are at "part1/reactivity/updating arrays and objects" on the svelte site tutorial -->

<!-- <p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>Add a number</button> -->

<!-- PROPS HTML ------------------------------------------------------------------------------------->
<!-- <Practice answer={42} />
<Practice /> -->

<!-- <Practice name={pkg.name} speed={pkg.speed} version={pkg.version} website={pkg.website} /> -->

<!-- <Practice {...pkg} /> -->

<!-- LOGIC HTML ------------------------------------------------------------------------------------>
<!-- <button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
	<p>{count} is greater than 10</p>
{/if} -->

<!-- <button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button> -->

<!-- {#if count > 10}
	<p>{count} is greater than 10</p>
{:else}
	<p>{count} is between 0 and 10</p>
{/if} -->

<!-- {#if count > 10}
	<p>{count} is greater than 10</p>
{:else if count < 5}
	<p>{count} is less than 5</p>
{:else}
	<p>{count} is between 0 and 10</p>
{/if} -->

<!-- <h1 style="color: {selected}">Pick a color</h1>

<div>
	{#each colors as color, i}
		<button
			aria-current={selected === color}
			aria-label={color}
			style="background:{color}"
			on:click={() => (selected = color)}>{i + 1}</button
		>
	{/each}
</div> -->

<button on:click={handleClick}> Remove first thing </button>

{#each things as thing (thing.id)}
	<Practice name={thing.name} />
{/each}

<style>
	/* introduction CSS ---------------------------------------------------- */
	/* p.firstParagraph {
		color: red;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	} */

	/* LOGIC CSS --------------------------------------------------------------------------------- */
	/* h1 {
		transition: color 0.2s;
	}

	div {
		display: grid;
		grid-template-columns: 10%;
		grid-gap: 5px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px -2px);
		filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
		transition: all 0.1s;
	}

	button[aria-current='true'] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
	} */
</style>
