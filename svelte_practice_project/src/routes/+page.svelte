<script>
	import Introduction from './introduction/+page.svelte'
	import Reactivity from './reactivity/+page.svelte'
	import Props from './props/+page.svelte'
	import Logic from './logic/+page.svelte'	
	import Events from './events/+page.svelte'
	import Bindings from './bindings/+page.svelte'
	import Form from './formComponents/+page.svelte'

	let showIntroduction = false
	let showReactivity = false
	let showProps = false
	let showLogic = false
	let showEvents = false
	let showBindings = false
	let showForm = false

</script>

<div class="introductionHeader">
	<h1 class="name">Andrew Kester</h1>
	<h1 class="title">Svelte Tutorial - DGM 3770 </h1>
</div>

<div class="introductionPage">

	<div class="sectionButtons" class:moduleActive={showIntroduction || showReactivity || showProps || showLogic || showEvents || showBindings}>
		<button on:click={() => showIntroduction = !showIntroduction} class:active={showIntroduction}>Introduction</button>
		<button on:click={() => showReactivity = !showReactivity} class:active={showReactivity}>Reactivity</button>
		<button on:click={() => showProps = !showProps} class:active={showProps}>Props</button>
		<button on:click={() => showLogic = !showLogic} class:active={showLogic}>Logic</button>
		<button on:click={() => showEvents = !showEvents} class:active={showEvents}>Events</button>
		<button on:click={() => showBindings = !showBindings} class:active={showBindings}>Bindings</button>
		<button on:click={() => showForm = !showForm} class:active={showForm}>Forms</button>
	</div>

	<div>
		{#if showIntroduction}
			<Introduction />
		{/if}
		{#if showReactivity}
			<Reactivity />
		{/if}
		{#if showProps}
			<Props />
		{/if}
		{#if showLogic}
			<Logic />
		{/if}
		{#if showEvents}
			<Events />
		{/if}
		{#if showBindings}
			<Bindings />
		{/if}
		{#if showForm}
			<Form />
		{/if}
	</div>
</div>

<style>
	.name {
		color: rgb(79, 79, 79);
		float: left;
	}
	.title {
		text-align: center;
		float: right;
		color: rgb(79, 79, 79);
	}
	.introductionPage {
		padding: 1rem;
	}
	.introductionHeader {
		background: rgb(199, 199, 241);
		padding: 1rem;
		display: inline-block;
		width: 100%;
	}
	
	button {
		border: 1px solid rgb(176, 176, 221);
		padding: 5px 10px;
		border-radius: 5px 10px;
		font-weight: 700;
		margin: .5rem 0;
		color: rgb(176, 176, 221);
	}
	button:hover {
		border: 1px solid rgb(255, 255, 255);
		color: rgb(255, 255, 255);
	}
	.active {
		background: rgb(176, 176, 221);
		color: rgb(79, 79, 79);
		border: none;
	}
	.sectionButtons {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-bottom: 1rem;
	}
	.moduleActive {
		border-bottom: 1px solid rgb(93, 93, 93);
		padding-bottom: 1rem;
	}
</style>


<!-- <p>The introduction tutorial will be located <a href="/introduction" class="link">here.</a></p>
<p>The reactivity tutorial will be located <a href="/reactivity" class="link">here.</a></p>
<p>The props tutorial will be located <a href="/props" class="link">here.</a></p>
<p>The logic tutorial will be located <a href="/logic" class="link">here.</a></p>
<p>The Events tutorial will be located <a href="/events" class="link">here.</a></p>
<p>The Bindings tutorial will be located <a href="/bindings" class="link">here.</a></p> -->

<!-- dont forget when you add <script lang="ts"><script> -->


	<!-- {#if showIntroduction}
			<Introduction />
		{:else if showReactivity}
			<Reactivity />
		{:else if showProps}
			<Props />
		{:else if showLogic}
			<Logic />
		{:else if showEvents}
			<Events />
		{:else if showBindings}
			<Bindings />
		{/if} -->