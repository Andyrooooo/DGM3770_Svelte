<script>
    import { fly } from 'svelte/transition'

    let visible = true
    let status = 'waiting...'
</script>


<div class="shadow-md bg-slate-200 text-black p-2 rounded-lg mt-4">

    <h1 class="transitionsTitle text-btn-border">Transition Events</h1>
    
    <p>status: {status}</p>

    <label>
        <input type="checkbox" bind:checked={visible} />
        visible
    </label>

    {#if visible}
        <p 
            transition:fly={{ y: 200, duration: 2000 }}
            on:introstart={() => status = 'intro started'}
            on:outrostart={() => status = 'outro started'}
            on:introend={() => status = 'intro ended'}
            on:outroend={() => status = 'outro ended'}
        >
            Flies in and out
        </p>
    {/if}
</div>


<style>
    .transitionsTitle {border-bottom: 1px solid rgb(193, 193, 193);}
</style>