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

<Props answer={2 * 10} />
<Props />

<Software {...pkg} />
