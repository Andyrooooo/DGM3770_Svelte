<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment} class="button">Click me</button>

<p>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</p>

{#if count > 10}
	<p>{count} is greater than 10</p>
{:else if count < 5}
	<p>{count} is less than 5</p>
{:else}
	<p>{count} is between 5 and 10</p>
{/if}

<style>
	.button {
		background: black;
		width: 150px;
		border-radius: 10px;
		color: white;
		font-weight: 700;
	}
</style>
