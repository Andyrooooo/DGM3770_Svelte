<script lang=ts>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    let show = false

    onMount(() => {
        show = true
    });
</script>



    {#if show}
    <p in:fade out:fade class="text-black text-5xl font-bold text-center my-12 mx-0">Hello World!</p>
    {/if}
