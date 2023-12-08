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

<button on:click={handleClick} class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mb-2"> Remove first thing </button>

{#each things as thing (thing.id)}
	<Emojis name={thing.name} />
{/each}
