<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>

<button on:click={sayHello}>
	Click for greeting
</button>

<style>
    button {
        background: black;
        padding: 1rem;
        border-radius: 5px;
    }
    
</style>