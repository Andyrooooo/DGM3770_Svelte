<script>
	import Props from './propsTwo.svelte';

	import Software from './softwareInfo.svelte';

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};
</script>

<div class="m-4 shadow-md rounded-md bg-white p-4 text-black">
	<h1 class="text-2xl mb-4 text-btn-border">Props</h1>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Props: Declaring Props</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use the <a class="text-btn-border font-bold">export</a> keyword to pass a prop down to the child component</p>
		
		<Props answer={2 * 10} />
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Props: Default Values</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this introduction we build on the previous component and add a default value for the prop that is a string called "I have no idea"</p>
		
		<Props answer={2 * 10} />
		<Props />
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Props: Spread Props</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this introduction we export the props to be put inside of an objects property names. We can then spread them into a component.</p>
		
		<Software {...pkg} />
	</div>

</div>

<style>
	.titleBreak {border-bottom: 1px solid rgb(193, 193, 193);}
</style>
