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
        box-shadow: 1px 1px 4px 2px rgb(34, 34, 34);
        border-radius: 10px;
    }
</style>