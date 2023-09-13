<script>
	import Count from './count.svelte';

	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers.push(numbers.length + 1);
		numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<Count />

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber} class="btn">Click here</button>

<style>
	.btn {
		background: white;
		width: 150px;
		border-radius: 10px;
		color: black;
		font-weight: 700;
	}
</style>
