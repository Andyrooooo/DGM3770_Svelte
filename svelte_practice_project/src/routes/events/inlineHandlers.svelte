<script>
    	let m = { x: 0, y: 0 }
</script>

<div class="inline">
    <h2>Inline Handlers</h2>
    <div class="pointer" on:pointermove={(e) => {m = { x: Math.trunc(e.clientX), y: Math.trunc(e.clientY)}}}>
        The pointer is at {m.x} x {m.y} inside the box
    </div>
</div>

<style>
    .pointer {
		width: 100%;
		padding: 2rem;
        background: grey;
        text-align: center;
        border-radius: 10px;
	}
    .inline {
        display: flex;
        flex-wrap: wrap;
        background-color: rgb(211, 211, 211);
        padding: 1rem;
    }
    .inline h2 {
        color: black;
    }
</style>
