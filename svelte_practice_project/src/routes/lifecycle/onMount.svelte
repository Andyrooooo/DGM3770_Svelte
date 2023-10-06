<script lang=ts>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    let show = false

    onMount(() => {
        show = true
    });
</script>

<div class="onMount">
    <h1 class="onMountTitle">onMount</h1>
    <p class="message">I'm using the onMount to display this text</p>

    {#if show}
    <p in:fade out:fade class="hello">Hello World!</p>
    {/if}

</div>


<style>
    .onMount {
        background: white;
        padding: 1rem;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    .onMountTitle {
        border-bottom: 1px solid rgb(228, 228, 228);
        color: black;
    }
    .hello {
        color: black;
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        margin: 3rem 0;
    }
    .message {color: black;}
</style>