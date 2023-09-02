<script>
	let name = 'Svelte';
	let src = 'https://i.pinimg.com/originals/7f/e1/a3/7fe1a3c59fad552cd5346451cbf51e4b.jpg';
	let doggo = 'doggo';

	import Practice from './practicePage.svelte';
</script>

<h1>Hello {name}</h1>

<img {src} alt="A cute {doggo}" />

<p>This is a paragraph</p>

<Practice />

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
