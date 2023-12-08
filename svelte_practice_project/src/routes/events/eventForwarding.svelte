<script>
	import Outer from './outerEventForwarding.svelte'

	function handleMessage(event) {
		alert(event.detail.text)
	}
</script>

<div class="forward">
    <Outer on:message={handleMessage} />
</div>


<style>
    .forward {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        color: white;
    }
    
</style>