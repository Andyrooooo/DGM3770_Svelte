<script lang=ts>
    import { coworkers } from './arrayStore.js'
    import Remove from './removeCoworker.svelte'
    import Add from './addCoworker.svelte'

    let myCoworkers

    // get us our coworkers array and assigns it to the myCoworkers variable
    coworkers.subscribe(value => {
        myCoworkers = value
    })
</script>
    
<div class="text-black rounded-tr-md rounded-tl-md">

    <p class="text-center mb-1">You have <a class="important font-bold">{myCoworkers.length}</a> coworkers added</p>
    <!-- loops through and gives us each coworkers name, age, position -->
    <div class="bg-white p-4 flex justify-around flex-wrap gap-4 mb-4">
        {#each myCoworkers as coworker}
        <div class="coworker p-2 rounded-md shadow-md">
        <p><a class="important">Name: </a>{coworker.name}</p>
        <p><a class="important">Age: </a> {coworker.age}</p>
        <p><a class="important">Position: </a>{coworker.position}</p>
        </div>
        {/each}
    </div>

    <p>Need to remove someone?</p>
    <Remove />

    <p>Need to add someone?</p>
    <Add />
</div>


<style>
    .important {
        color: rgb(104, 104, 226);
    }
    
    .coworker {
        background: rgb(209, 209, 232);
    }
    
</style>