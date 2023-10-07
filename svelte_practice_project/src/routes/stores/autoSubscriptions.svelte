<script lang=ts>
    import { coworkers } from './arrayStoreTwo.js'
    import Remove from './removeCoworkerTwo.svelte'
    import Add from './addCoworkerTwo.svelte'
</script>
    
<div class="writeableStores">
    <h1 class="writeableStoresTitle">Auto-subscriptions</h1>

    <p class="description">In here we also use the previous example and store but add the unsubscribe and destroy using the <a class="important">$</a> reserved character</p>

    <p>You have <a class="important">{$coworkers.length}</a> coworkers added</p>
    <!-- loops through and gives us each coworkers name, age, position -->
    <div class="coworkerList">
        {#each $coworkers as coworker}
        <div class="coworker">
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
        color: black;
        padding: 1rem;
    }

    .writeableStoresTitle {
        border-bottom: 1px solid rgb(154, 154, 154);
    }
    .important {
        color: rgb(104, 104, 226);
    }
    .description {
        margin-bottom: 1rem;
    }
    .coworkerList {
        background: rgb(224, 224, 224);
        padding: 1rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    .coworker {
        background: rgb(209, 209, 232);
        padding: .5rem;
        border-radius: 10px;
    }
</style>