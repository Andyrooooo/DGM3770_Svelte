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

<div class="m-4 shadow-md rounded-md bg-white p-4 text-black">
	<h1 class="text-2xl mb-4 text-btn-border">Logic</h1>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Logic: Else-if Blocks</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use <a class="text-btn-border font-bold">else if</a> to chain multiple <a class="text-btn-border font-bold">if</a> statements for different HTML elements to display based on conditions</p>
		
		<If />
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Logic: Each Blocks</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use <a class="text-btn-border font-bold">each</a> block to display the different circles with color values saved in an array</p>

		<Color />

	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Logic: Keyed Each Blocks</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use <a class="text-btn-border font-bold">keyed</a> each block so that svelte can specifically delete the emoji you want</p>

		<Emoji />

	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Logic: Await Blocks</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use the <a class="text-btn-border font-bold">await</a> block to generate text as you await an API call to bring in your data</p>

		<button on:click={handleClick} class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mb-2">Generate random number</button>

		{#await promise}
			<p>...waiting</p>
		{:then number}
			<p>The number is {number}</p>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}

	</div>

	
</div>

<style>
	.titleBreak {border-bottom: 1px solid rgb(193, 193, 193);}
</style>
