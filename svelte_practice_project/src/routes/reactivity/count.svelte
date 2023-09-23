<script>
	let count = 0;
	$: doubled = count * 2;
	$: divided = count / 2;

	$: {
		console.log(`the count is ${count}`);
		console.log(`I'm just here to tag along`);
	}

	$: if (count >= 10) {
		alert(`Whoa there partner, look at the count ${count} it's too high!`);
		count = 0;
	} else if (count <= -1) {
		alert(`Whoa there partner, look at the count ${count} it's waaaaay too low!`);
		count = 0;
	}

	function increment() {
		count += 1;
	}
	function decrement() {
		count -= 1;
	}
</script>

<p>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</p>

<button on:click={increment} class="btn">higher number</button>
<button on:click={decrement} class="btn">lower number</button>

<p>{count} doubled is {doubled}</p>
<p>{count} divided is {divided}</p>

<style>
	.btn {
		background: black;
		width: 150px;
		border-radius: 10px;
		color: white;
		font-weight: 700;
	}
</style>
