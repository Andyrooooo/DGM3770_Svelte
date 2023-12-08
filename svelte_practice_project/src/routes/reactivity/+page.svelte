<script>

	let count = 0;

	function increment() {
		count += 1;
	}
// ----------------------------------------------------------
	let countTwo = 0;
	$: doubled = countTwo * 2;

	function incrementTwo() {
		countTwo += 1;
	}
//----------------------------------------------------------
let countThree = 0;

$: if (countThree >= 10) {
	alert('count is dangerously high!');
	countThree = 0;
}

function handleClick() {
	countThree += 1;
}
//----------------------------------------------------------
let numbers = [1, 2, 3, 4];

function addNumber() {
	numbers = [...numbers, numbers.length + 1];
}

$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

</script>

<div class="m-4 shadow-md rounded-md bg-white p-4 text-black">
	<h1 class="text-2xl mb-4 text-btn-border">Reactivity</h1>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Reactivity: Assignments</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this part we add an event handler to point to a function to increment the count variable.</p>
		
		<button class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg" on:click={increment}>
			Clicked {count}
			{count === 1 ? 'time' : 'times'}
		</button>
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Reactivity: Declarations</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use a reactive delcaration to show us what the number will look like when the number displayed is doubled.</p>
		
		<button class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mb-2" on:click={incrementTwo}>
			Clicked {countTwo}
			{countTwo === 1 ? 'time' : 'times'}
		</button>
		
		<p>{countTwo} doubled is {doubled}</p>
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Reactivity: Statements</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we set up a reactive delcaration with an if statement to watch the count and if it hits 10 or higher we'll get an alert</p>
		
		<button class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mb-2" on:click={handleClick}>
			Clicked {countThree}
			{countThree === 1 ? 'time' : 'times'}
		</button>
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Reactivity: Updating arrays and objects</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use a reactive declaration and utilize a spread operator to chain on a new number with each click with the total of those numbers at the end.</p>

		<button on:click={addNumber} class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mb-2">Click here</button>

		<p>{numbers.join(' + ')} = {sum}</p>
	</div>

</div>

<style>
	.titleBreak {border-bottom: 1px solid rgb(193, 193, 193);}
</style>
