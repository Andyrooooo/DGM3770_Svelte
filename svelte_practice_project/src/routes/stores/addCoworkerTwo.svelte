<script>
    import { coworkers } from './arrayStoreTwo.js'

    let newName
    let newAge
    let newPosition

    // This long function creates a new object with the input values and adds it to our array and then updates the store
    function addCoworker() {
        let newCoworker = {
            name: newName,
            age: newAge,
            position: newPosition
        }

        $coworkers.push(newCoworker)
       /*  console.log($coworkers) */

        newName = ''
        newAge = ''
        newPosition = ''

        coworkers.update(value => {
        return value = $coworkers
        })
    }
    
</script>

<form class="flex justify-between mb-4 flex-wrap" on:submit={addCoworker}>
    <input class="p-2 rounded-md mb-2" type="text" placeholder="name" bind:value={newName}>
    <input class="p-2 rounded-md mb-2" type="number" placeholder="age" bind:value={newAge}>
    <input class="p-2 rounded-md mb-2" type="text" placeholder="position" bind:value={newPosition}>
    <div class="flex justify-center basis-full">
        <button class="rounded-lg p-2 hover:text-white" type="submit">Add</button>
    </div>
</form>


<style>
    input {
        border: 2px solid rgb(112, 112, 112);
        width: 32%;
        background: rgb(196, 196, 196);
    }
    button {
        width: 20%;
        border: 2px solid rgb(142, 142, 231);
        color:rgb(142, 142, 231);
        }
        
    button:hover {
        background:rgb(142, 142, 231);
    }
</style>