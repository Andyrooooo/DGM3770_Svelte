<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function blueColor() {
        dispatch('blueColor', {
            text: 'blue'
        })
    }
    function yellowColor() {
        dispatch('yellowColor', {
            text: 'yellow'
        })
    }
    function greenColor() {
        dispatch('greenColor', {
            text: 'green'
        })
    }
</script>

<button class="redBTN hover:shadow-lg" on:click>
	Red
</button>

<button class="blueBTN hover:shadow-lg" on:click={blueColor}>
	blue
</button>

<button class="yellBTN hover:shadow-lg" on:click={yellowColor}>
	yellow
</button>

<button class="grnBTN hover:shadow-lg" on:click={greenColor}>
	green
</button>

<style>
	button {
        margin-top: 1rem;
		font-size: 1em;
		width: 4em;
		height: 4em;
        border-radius: 96px;
        text-shadow: 1px 1px 1px black;
	}
    .redBTN {
        background-color: red;
    } .yellBTN{
        background-color: yellow;
        color: black;
        text-shadow: 1px 1px 1px rgb(169, 169, 169);
    } .blueBTN{
        background-color: blue;
    } .grnBTN{
        background-color: green;
    }

</style>