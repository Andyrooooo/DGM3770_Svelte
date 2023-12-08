<script>
	import Dom from './domEvents.svelte'

    import Inline from './inlineHandlers.svelte'

    import Modifiers from './eventModifiers.svelte'

    import Component from './componentevent.svelte'

    import Forwarding from './eventForwarding.svelte'

    import DomE from './domEventForwarding.svelte'
</script>

<div class="m-4 shadow-md rounded-md bg-white p-4 text-black">
	<h1 class="text-2xl mb-4 text-btn-border">Events</h1>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Events: DOM Events</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use <a class="text-btn-border font-bold">on:pointermove</a> to listen to a DOM event</p>
		
        <Dom />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Events: Inline Handlers</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use inline handlers to input code inside the HTML rather than a function in the scripts section of the file</p>
		
        <Inline />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Events: Event Modifiers</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we utilize the event modifier <a class="text-btn-border font-bold">once</a> to only allow us to click the button once</p>
		
        <Modifiers />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Events: Component Events</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we use event dispatcher's to bring an event to the parent component to initiate a event</p>
		
        <Component />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Events: Event Forwarding</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we build on the previous example but we have a second component in the mix. We then pass it up from being nested deep to get an event</p>
		
        <Forwarding />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Events: DOM Event Forwarding</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this section we forward custom events to pass up a color name and change the color of the paragraph element based on the color clicked</p>
		
        <DomE />
	</div>

</div>

<style>
    	.titleBreak {border-bottom: 1px solid rgb(193, 193, 193);}
</style>