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
		margin: 2rem 0;
		background: white;
		padding: 1rem;
		border-radius: 10px;
		color: black;
	}
</style>
