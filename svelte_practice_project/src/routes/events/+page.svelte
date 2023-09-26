<script>
	import Dom from './domEvents.svelte'

    import Inline from './inlineHandlers.svelte'

    import Modifiers from './eventModifiers.svelte'

    import Component from './componentevent.svelte'

    import Forwarding from './eventForwarding.svelte'

    import DomE from './domEventForwarding.svelte'
</script>

<div class="events">
    <Dom />
    <Inline />
    <Modifiers />
    <Component />
    <Forwarding />
    <DomE />
</div>

<style>
	.events {
        margin: 1rem 1rem 2rem 1rem;
    }
</style>