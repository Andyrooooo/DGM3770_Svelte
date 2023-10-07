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
    <input type="text" placeholder="Janice" bind:value={newName}>
    <input type="number" placeholder="28" bind:value={newAge}>
    <input type="text" placeholder="Developer" bind:value={newPosition}>
    <button type="submit">Add</button>
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
    }
    button {
        flex-basis: 100%;
        border: 2px solid rgb(166, 166, 232);
        border-radius: 10px; 
        color:rgb(166, 166, 232);
        padding: .5rem;
        }
    button:hover {
        background:rgb(166, 166, 232);
        color: white;
    }
</style>