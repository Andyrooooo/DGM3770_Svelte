<script>
    import { coworkers } from './arrayStoreTwo.js'

    let coworkerToRemove

    // filters through the array and removes the coworker that matches the selected option
    function removeCoworker() {
        coworkers.update(value => {
            return value.filter(coworker => coworker.name !== coworkerToRemove)
        })
    }
</script>

<!-- a form to display each coworker and select a specific coworker to be removed -->
<form class="flex justify-between mb-4" on:submit={removeCoworker}>

    <select bind:value={coworkerToRemove} class="removeCoworker rounded-md p-2">
        <option></option>
        {#each $coworkers as coworker}
            <option>{coworker.name}</option>
        {/each}
    </select>

        <button type="submit" class="removeBTN basis-1/5 p-2 rounded-lg">Remove</button>
</form>

<style>
    .removeCoworker {
        flex-basis: 78%;
        border: 2px solid rgb(112, 112, 112);
    }
    .removeBTN {
        border: 2px solid rgb(255, 106, 106);
        color: rgb(255, 106, 106);
    }
    .removeBTN:hover {
        background:rgb(255, 106, 106);
        color: white;
    }
</style>