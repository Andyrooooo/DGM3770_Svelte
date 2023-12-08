<script lang=ts>
    import { coworkers } from './arrayStoreTwo.js'
    import Remove from './removeCoworkerTwo.svelte'
    import Add from './addCoworkerTwo.svelte'
</script>
    
<div class=" text-black p-4">
    <p class="text-center mb-1">You have <a class="important font-bold">{$coworkers.length}</a> coworkers added</p>
    <!-- loops through and gives us each coworkers name, age, position -->
    <div class="bg-white p-4 flex justify-around flex-wrap gap-4 mb-4">
        {#each $coworkers as coworker}
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