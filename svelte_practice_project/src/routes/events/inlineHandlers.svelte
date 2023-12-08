<script>
    	let m = { x: 0, y: 0 }

        let message = ''

</script>

<div class="inline">
    <div class="pointer border-2 border-btn-border text-btn-border rounded-md text-center py-10" on:pointermove={(e) => {m = { x: Math.trunc(e.clientX), y: Math.trunc(e.clientY)}}}>
        The pointer is at {m.x} x {m.y} inside the box
    </div>
    <div class="hover border-2 border-btn-border text-btn-border rounded-md text-center py-10" on:mouseover={(e) => {message = 'the cursor is in the box'}} on:mouseout={(e) => {message = 'the cursor is outside the box'}}>{message}</div>
</div>

<style>
    .pointer {
		flex-basis: 49%;
	}
    .inline {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem;
    }
    .hover {
        flex-basis: 49%;
    }
</style>
