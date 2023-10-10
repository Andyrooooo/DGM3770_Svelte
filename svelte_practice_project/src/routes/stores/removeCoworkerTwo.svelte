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
<form on:submit={removeCoworker}>

    <select bind:value={coworkerToRemove} class="removeCoworker">
        <option></option>
        {#each $coworkers as coworker}
            <option>{coworker.name}</option>
        {/each}
    </select>

        <button type="submit" class="removeBTN">Remove</button>
</form>

<style>
    form {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .removeCoworker {
        flex-basis: 78%;
        border: 2px solid rgb(112, 112, 112);
        border-radius: 5px;
        padding: .5rem;
        background: rgb(196, 196, 196);
    }
    .removeBTN {
        flex-basis: 20%;
        border: 2px solid rgb(255, 106, 106);
        color: rgb(255, 106, 106);
        padding: .5rem;
        border-radius: 10px;
    }
    .removeBTN:hover {
        background:rgb(255, 106, 106);
        color: white;
    }
</style>