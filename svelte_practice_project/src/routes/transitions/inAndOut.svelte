<script>
    import {fly, fade} from 'svelte/transition'
    let visible = true
</script>


<div class="hover:shadow-lg bg-slate-100 text-black p-2 rounded-lg">
    <label>
        <input type="checkbox" bind:checked={visible} />
        <span class="ml-2">Visible</span>
    </label>

    {#if visible}
        <p in:fade  out:fly={{ y: 200, duration: 2000 }}>Fades in and flies out</p>
    {/if}
</div>