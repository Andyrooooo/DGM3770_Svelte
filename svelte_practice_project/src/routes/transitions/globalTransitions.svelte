<script>
    import { slide } from 'svelte/transition'

    let showItems = true
    let i = 5
    let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
</script>


<div class="hover:shadow-lg bg-slate-100 text-black p-2 rounded-lg mt-4">

    <h1 class="transitionsTitle text-btn-border">Global Transitions</h1>
    
    <label>
        <input type="checkbox" bind:checked={showItems} />
        show list
    </label>
    
    <label>
        <input type="range" bind:value={i} max="10" />
    </label>
    
    {#if showItems}
        {#each items.slice(0, i) as item}
            <div class="py-1 px-0 slide" transition:slide|global>
                {item}
            </div>
        {/each}
    {/if}
</div>


<style>
    .transitionsTitle {border-bottom: 1px solid rgb(193, 193, 193);}

    .slide {
		border-top: 1px solid #eee;
	}
</style>