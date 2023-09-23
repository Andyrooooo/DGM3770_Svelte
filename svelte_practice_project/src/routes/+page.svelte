<script>
	import Introduction from './introduction/+page.svelte'
	import Reactivity from './reactivity/+page.svelte'
	import Props from './props/+page.svelte'
	import Logic from './logic/+page.svelte'	
	import Events from './events/+page.svelte'
	import Bindings from './bindings/+page.svelte'

	let showIntroduction = false
	let showReactivity = false
	let showProps = false
	let showLogic = false
	let showEvents = false
	let showBindings = false
	
</script>

<div class="introductionPage">
	<h1>Andrew's Svelte Tutorial - DGM 3770 </h1>

	<div class="sectionButtons" class:moduleActive={showIntroduction || showReactivity || showProps || showLogic || showEvents || showBindings}>
		<button on:click={() => showIntroduction = !showIntroduction} class:active={showIntroduction}>Introduction</button>
		<button on:click={() => showReactivity = !showReactivity} class:active={showReactivity}>Reactivity</button>
		<button on:click={() => showProps = !showProps} class:active={showProps}>Props</button>
		<button on:click={() => showLogic = !showLogic} class:active={showLogic}>Logic</button>
		<button on:click={() => showEvents = !showEvents} class:active={showEvents}>Events</button>
		<button on:click={() => showBindings = !showBindings} class:active={showBindings}>Bindings</button>
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
	</div>
</div>

<style>
	/* .link {
		color: red;
	} */
	.introductionPage {
		padding: 1rem;
	}
	h1 {
		text-align: center;
		margin-bottom: 1rem;
	}
	button {
		border: 1px solid white;
		padding: 5px 10px;
		border-radius: 5px 10px;
		font-weight: 700;
		margin: .5rem 0;
	}
	button:hover {
		border: 1px solid red;
		color: red;
	}
	.active {
		background: white;
		color: black;
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