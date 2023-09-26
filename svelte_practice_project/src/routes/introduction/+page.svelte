<script>
	let name = 'Andrew';
	let lastName = 'KESTER';
	let src = '/zeus_photo2.JPG';

	import Secondpage from './secondPage.svelte';

	let string = `Here is a link to my <a href="https://github.com/andyrooooo"><i class="link">GitHub</i></a>`;
</script>

<div class="introduction">
	<h1>Hello World!</h1>

	<h1>Hello {name.toUpperCase()} {lastName.toLowerCase()}</h1>

	<label class="zeusLable">This is a picture of my doggo, Zeus</label>
	<img {src} alt="A picture of my dog" class="picture" />

	<p>This is text from the first component</p>
	<Secondpage />

	<p>{@html string}</p>
</div>

<style>
	.picture {
		border-radius: 5px;
		width: 50vw;
		margin: 0 auto;
	}
	.zeusLable {
		text-align: center;
	}
	.introduction {
		margin: 2rem 0;
		background: white;
		padding: 1rem;
		border-radius: 10px;
		color: black;
		margin: 1rem 1rem 2rem 1rem;
	}
</style>
