<script>
    let scoops = 1
	let flavours = []

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })
</script>

<div class="slctMultiple">
    <h1>Select Multiple</h1>

    <h2>Size</h2>

    {#each [1, 2, 3, 4, 5] as number}
        <label class="scoop">
            <input type="radio" name="scoops" value={number} bind:group={scoops} />

            {number} {number === 1 ? 'scoop' : 'scoops'}
        </label>
    {/each}

    <h2 class="flvrs">Flavours</h2><p>Please use <a>ctrl</a> or <a>ctrl</a> to select multiple flavors</p>

    <select multiple bind:value={flavours} class="flavors">
        {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple', 'vanilla', 'cherry'] as flavour}
            <option value={flavour}>{flavour}</option>
        {/each}
    </select>

    <!-- {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
        <label class="flavors">
            <input type="checkbox" name="flavours" value={flavour} bind:group={flavours}/>

            {flavour}
        </label>
    {/each} -->

    {#if flavours.length === 0}
        <p class="warning">Please select at least one flavour</p>
    {:else if flavours.length > scoops}
        <p class="warning">Can't order more flavours than scoops!</p>
    {:else}
        <ul>
            You ordered:
            <li>{scoops} {scoops === 1 ? 'scoop' : 'scoops'}</li>
            <li>{formatter.format(flavours)}</li>
        </ul>
    {/if}
</div>

<style>
    .slctMultiple {
        background: rgb(66, 66, 66);
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    h1 {
        flex-basis: 100%;
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    h2 {
        flex-basis: 100%;
    }
    .flvrs {
        margin-top: 1rem;
    }
    p {margin-top: 1rem;}
    p.warning {
        color: rgb(255, 82, 82);
    }
    .flavors, .scoop {
        width: 100%;
    }
    .flavors {
        color: black;
        border-radius: 0;
    }
    ul {
        flex-basis: 100%;
        margin-top: 1rem;
        background: rgb(175, 175, 175);
        padding: 5px;
        border-radius: 5px;
    }
    li:first-child {
        border-top: 1px solid rgb(95, 95, 95);
        padding-top: .5rem;
    }
</style>