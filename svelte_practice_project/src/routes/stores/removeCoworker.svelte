<script>
    import { coworkers } from './arrayStore.js'

    let myCoworkers

    // get us our coworkers array and assigns it to the myCoworkers variable
    coworkers.subscribe(value => {
        myCoworkers = value
    })

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

    <select bind:value={coworkerToRemove} class="removeCoworker p-2 border-2 border-btn-border text-btn-border rounded-lg bg-inherit">
        <option></option>
        {#each myCoworkers as coworker}
            <option>{coworker.name}</option>
        {/each}
    </select>

    <button type="submit" class="removeBTN basis-1/5 p-2 rounded-lg">Remove</button>

</form>

<style>
    .removeCoworker {
        flex-basis: 78%;
    }
    .removeBTN {
        border: 2px solid rgb(255, 148, 148);
        color: rgb(255, 148, 148);
    }
    .removeBTN:hover {
        background:rgb(255, 148, 148);
        color: white;
    }
</style>