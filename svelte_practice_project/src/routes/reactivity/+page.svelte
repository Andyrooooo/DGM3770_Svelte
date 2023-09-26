<script>
	import Count from './count.svelte';

	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers.push(numbers.length + 1);
		numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<div class="reactivity">
	<Count />

	<p>{numbers.join(' + ')} = {sum}</p>

	<button on:click={addNumber} class="btn">Click here</button>
</div>

<style>
	.btn {
		background: black;
		width: 150px;
		border-radius: 10px;
		color: white;
		font-weight: 700;
	}
	.reactivity {
		margin: 2rem 0;
		background: white;
		padding: 1rem;
		border-radius: 10px;
		color: black;
		margin: 1rem 1rem 2rem 1rem;
	}
</style>
