<script>
    import Inner from './componentInner.svelte'

    function handleMessage(event) {
		alert(event.detail.text);
	}

    function showAge(event) {
        alert(event.detail.number)
    }
</script>

<div class="component">
    <Inner on:message={handleMessage} on:age={showAge}/>
</div>


<style>
    .component {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    
</style>