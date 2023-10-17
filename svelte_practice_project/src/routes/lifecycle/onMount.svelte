<script lang=ts>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    let show = false

    onMount(() => {
        show = true
    });
</script>

<div class="bg-white p-4 rounded-tr-md rounded-tl-md">
    <h1 class="onMountTitle text-black">onMount</h1>
    <p class="text-black">I'm using the onMount to display this text</p>

    {#if show}
    <p in:fade out:fade class="text-black text-5xl font-bold text-center my-12 mx-0">Hello World!</p>
    {/if}

</div>


<style>
    .onMountTitle {
        border-bottom: 1px solid rgb(228, 228, 228);
    }
</style>