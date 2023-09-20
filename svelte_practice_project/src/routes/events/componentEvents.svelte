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
<h2>Component Events</h2>
    <Inner on:message={handleMessage} on:age={showAge}/>
</div>


<style>
    .component {
        background: rgb(123, 123, 123);
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between
    }
    .component h2 {
        color: black;
        flex-basis: 100%;
    }
    
</style>