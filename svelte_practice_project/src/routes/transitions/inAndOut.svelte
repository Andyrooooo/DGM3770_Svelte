<script>
    import {fly, fade} from 'svelte/transition'
    let visible = true
</script>


<div class="hover:shadow-lg bg-slate-200 text-black p-2 rounded-lg">
    <h1 class="inOutTitle text-btn-border">In and Out</h1>

    <label>
        <input type="checkbox" bind:checked={visible} />
        <span class="ml-2">Visible</span>
    </label>

    {#if visible}
        <p in:fade  out:fly={{ y: 200, duration: 2000 }}>Fades in and flies out</p>
    {/if}
</div>

<style>
    .inOutTitle {border-bottom: 1px solid rgb(193, 193, 193);}
</style>