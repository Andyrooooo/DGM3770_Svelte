<script>
	import Outer from './outerEventForwarding.svelte'

	function handleMessage(event) {
		alert(event.detail.text)
	}
</script>

<div class="forward">
    <h2>Event Forwarding</h2>
    <Outer on:message={handleMessage} />
</div>


<style>
    .forward {
        background: rgb(92, 92, 92);
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between
    }
    .forward h2 {
        flex-basis: 100%;
    }
    
</style>