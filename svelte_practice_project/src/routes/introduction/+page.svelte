<script>
	let name = 'Andrew';
	let lastName = 'KESTER';
	let src = '/zeus_photo2.JPG';

	import Secondpage from './secondPage.svelte';

	let string = 'In '; // im right hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
</script>

<h1>Hello World!</h1>

<h1>Hello {name.toUpperCase()} {lastName.toLowerCase()}</h1>

<label class="zeusLable">This is a picture of my doggo, Zeus</label>
<img {src} alt="A picture of my dog" class="picture" />

<p>This is text from the first component</p>
<Secondpage />

<style>
	.picture {
		border-radius: 5px;
		width: 50vw;
		margin: 0 auto;
	}
	.zeusLable {
		text-align: center;
	}
</style>
