<script>
	import If from './ifblocks.svelte';

	import Color from './colorPicker.svelte';

	import Emoji from './emojisMain.svelte';

	import { getRandomNumber } from './randomAPI.js';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<If />
<Color />
<Emoji />

<button on:click={handleClick} class="button">Generate random number</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	.button {
		background: white;
		width: 250px;
		padding: 1rem 0;
		border-radius: 10px;
		color: black;
		font-weight: 700;
	}
</style>
