<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const newDispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hey Im the message from the event dispatcher'
		});
	}

    function howOldAmI() {
		newDispatch('age', {
			number: 55
		});
	}
</script>

<button class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg" on:click={sayHello}>
	Click to see message
</button>

<button class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg" on:click={howOldAmI}>
	Click to see how old I am
</button>
