<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>

<button class=" p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg" on:click={sayHello}>
	Click for greeting
</button>
