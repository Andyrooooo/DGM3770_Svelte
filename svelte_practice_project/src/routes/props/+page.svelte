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

<div class="props">
	<Props answer={2 * 10} />
	<Props />

	<Software {...pkg} />
</div>

<style>
	.props {
		margin: 1rem 1rem 2rem 1rem;
		background: white;
		padding: 1rem;
		border-radius: 10px;
		color: black;
		box-shadow: 1px 1px 4px 2px rgb(34, 34, 34);
	}
</style>
