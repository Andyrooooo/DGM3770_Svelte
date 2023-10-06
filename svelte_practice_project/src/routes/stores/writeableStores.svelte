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
    
<div class="writeableStores">
    <h1 class="writeableStoresTitle">Writeable Stores</h1>

    <p class="description">In this example we use <a class="important">Writable Stores</a> to add and remove coworkers from our list</p>

    <p>You have <a class="important">{myCoworkers.length}</a> coworkers added</p>
    <!-- loops through and gives us each coworkers name, age, position -->
    <div class="coworkerList">
        {#each myCoworkers as coworker}
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
        background: white;
        color: black;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
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