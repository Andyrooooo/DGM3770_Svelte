<script lang=ts>
    import { coworkers } from './arrayStoreTwo.js'
    import Remove from './removeCoworkerTwo.svelte'
    import Add from './addCoworkerTwo.svelte'
</script>
    
<div class="writeableStores text-black p-4">
    <h1 class="writeableStoresTitle">Auto-subscriptions</h1>

    <p class="mb-4">In here we also use the previous example and store but add the unsubscribe and destroy using the <a class="important">$</a> reserved character</p>

    <p>You have <a class="important">{$coworkers.length}</a> coworkers added</p>
    <!-- loops through and gives us each coworkers name, age, position -->
    <div class="coworkerList p-4 flex justify-around flex-wrap gap-4 mb-4">
        {#each $coworkers as coworker}
        <div class="coworker p-2 rounded-md">
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
    .writeableStores {
        background: rgb(196, 196, 196);
    }
    .writeableStoresTitle {
        border-bottom: 1px solid rgb(154, 154, 154);
    }
    .important {
        color: rgb(104, 104, 226);
    }
    .coworkerList {
        background: rgb(224, 224, 224);
    }
    .coworker {
        background: rgb(209, 209, 232);
    }
</style>