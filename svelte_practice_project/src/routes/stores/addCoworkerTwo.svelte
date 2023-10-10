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

<form on:submit={addCoworker}>
    <input type="text" placeholder="name" bind:value={newName}>
    <input type="number" placeholder="age" bind:value={newAge}>
    <input type="text" placeholder="position" bind:value={newPosition}>
    <div class="addBTNContainer">
        <button type="submit">Add</button>
    </div>
</form>


<style>
    form {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        flex-wrap: wrap;
    }
    input {
        border: 2px solid rgb(112, 112, 112);
        padding: .5rem;
        border-radius: 5px;
        margin-bottom: .5rem;
        width: 32%;
        background: rgb(196, 196, 196);
    }
    button {
        width: 20%;
        border: 2px solid rgb(142, 142, 231);
        border-radius: 10px; 
        color:rgb(142, 142, 231);
        padding: .5rem;
        }
    button:hover {
        background:rgb(142, 142, 231);
        color: white;
    }
    .addBTNContainer {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
</style>