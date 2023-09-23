<script>
	import Emojis from './emojis.svelte';

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

<button on:click={handleClick} class="button"> Remove first thing </button>

{#each things as thing (thing.id)}
	<Emojis name={thing.name} />
{/each}

<style>
	.button {
		background: black;
		width: 200px;
		padding: 1rem 0;
		border-radius: 10px;
		color: white;
		font-weight: 700;
	}
</style>
