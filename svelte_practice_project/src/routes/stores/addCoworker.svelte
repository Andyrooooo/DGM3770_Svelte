<script>
    import { coworkers } from './arrayStore.js'

    let myCoworkers

    // get us our coworkers array and assigns it to the myCoworkers variable
    coworkers.subscribe(value => {
        myCoworkers = value
    })

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

        myCoworkers.push(newCoworker)
        console.log(myCoworkers)

        newName = ''
        newAge = ''
        newPosition = ''

        coworkers.update(value => {
        return value = myCoworkers
        })
    }
    
</script>

<form class="flex justify-between mb-4 flex-wrap" on:submit={addCoworker}>
    <input class="p-2 border-2 border-btn-border text-btn-border rounded-lg bg-inherit" type="text" placeholder="name" bind:value={newName}>
    <input class="p-2 border-2 border-btn-border text-btn-border rounded-lg bg-inherit" type="number" placeholder="age" bind:value={newAge}>
    <input class="p-2 border-2 border-btn-border text-btn-border rounded-lg bg-inherit" type="text" placeholder="position" bind:value={newPosition}>
    <div class="flex justify-center basis-full">
        <button class="rounded-lg p-2 hover:text-white mt-4" type="submit">Add</button>
    </div>
</form>


<style>
    input {
        width: 32%;
    }
    button {
        border: 2px solid rgb(166, 166, 232);
        color:rgb(166, 166, 232);
        width: 20%;
        }
    button:hover {
        background:rgb(166, 166, 232);
    }
</style>