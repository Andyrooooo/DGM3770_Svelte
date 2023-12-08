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

<button on:click={sayHello}>
	Click to see message
</button>

<button on:click={howOldAmI}>
	Click to see how old I am
</button>

<style>
    button {
        background: black;
        padding: 1rem;
        border-radius: 5px;
		color: white;
    }
</style>