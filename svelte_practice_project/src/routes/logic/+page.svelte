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

<div class="logic">
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
</div>

<style>
	.button {
		background: black;
		width: 250px;
		padding: 1rem 0;
		border-radius: 10px;
		color: white;
		font-weight: 700;
	}
	.logic {
		margin: 2rem 0;
		background: white;
		padding: 1rem;
		border-radius: 10px;
		color: black;
	}
</style>
