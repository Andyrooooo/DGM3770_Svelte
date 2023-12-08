<script>
	let name = 'Andrew';
	let lastName = 'KESTER';
	let src = '/zeus_photo2.JPG';
	let alt = 'This is a picture of my dog Zeus'

	import Secondpage from './secondPage.svelte'

	let string = `Here is a link to my <a href="https://github.com/andyrooooo"><i class="text-btn-border font-bold">GitHub</i></a>`
</script>

<div class="m-4 shadow-md rounded-md bg-white p-4 text-black">
	<h1 class="text-2xl mb-4 text-btn-border">Introduction</h1>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Introduction: Welcome to Svelte!</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this introduction we utilize a well known <a class="text-btn-border font-bold">h1</a> element</p>
		<h1>Hello World!</h1>
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Introduction: First Component</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this introduction we build a very simple component with a well known <a class="text-btn-border font-bold">h1</a> element, and dynamically add in a value that is saved inside a variable</p>
		<h1>Hello {name.toUpperCase()} {lastName.toLowerCase()}</h1>
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Introduction: Dynamic Attributes</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use dynamic attributes to render an image of my dog to the <a class="text-btn-border font-bold">src</a> attribute and the <a class="text-btn-border font-bold">alt</a> attribute.</p>
		
		<label class="text-center">This is a picture of my doggo, Zeus</label>
		<img {src} alt={alt} class="picture" />
	</div>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Introduction: Nested Components</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we nest a secondary component into our parent component</p>
		
		<p class="text-center text-red-500">This is text from the first component</p>
		<div class="flex justify-center">
			<Secondpage />
		</div>
	</div>
	
	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Introduction: HTML Tags</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we us the <a class="text-btn-border">@html</a> tag to render html into the paragraph that is saved to a variable</p>
		
		<p>{@html string}</p>
	</div>

</div>

<style>
	.titleBreak {border-bottom: 1px solid rgb(193, 193, 193);}
	.picture {
		border-radius: 5px;
		width: 50vw;
		margin: 0 auto;
	}
</style>
