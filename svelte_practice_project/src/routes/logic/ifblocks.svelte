<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<button class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mb-2" on:click={increment}>Click me</button>

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


