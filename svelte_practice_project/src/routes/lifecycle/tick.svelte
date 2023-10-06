<script lang=ts>

    import {tick} from 'svelte'
    let randomVehicleName = ''

	async function addStarWarsVehicles() {
        let response = await fetch('https://swapi.dev/api/vehicles/')
        let data = await response.json()
        
        await tick()
        let randomIndex = Math.floor(Math.random() * data.results.length)
        randomVehicleName = data.results[randomIndex].name
	}
 
</script>
 
 
 <!-- 346px height -->
 
<div class="tick">
    <h1 class="tickTitle">Tick</h1>

    <p class="description">In this example we use the <a class="important">tick</a> function to help us grab a new Starwars vehicle name at random</p>

    <div class="buttonConatiner">
        <button class="vehicleBTN" on:click={addStarWarsVehicles}>Get Random Vehicle</button>
    </div>

    <div class="nameContainer">
        <p class="name">{randomVehicleName}</p>
    </div>

</div>
 
 
<style>
    .tick {
        background: rgb(129, 129, 129);
        padding: 1rem;
    }
    .tickTitle {
    border-bottom: 1px solid rgb(147, 147, 147);
    }
    .description {
        margin-bottom: 2rem;
    }

    .important {
        color: rgb(166, 166, 232);
    }

    .vehicleBTN {
        padding: .5rem 1rem;
        color: rgb(166, 166, 232);
        border: 2px solid rgb(166, 166, 232);
        border-radius: 10px;
    }
    .vehicleBTN:hover {
        background: rgb(166, 166, 232);
        color: rgb(79, 79, 79);
    }
    .buttonConatiner {
        display: flex;
        justify-content: center;
    }
    .nameContainer {
        background: white;
        padding: 1rem;
        margin-top: 1rem;
    }
    .name {
        text-align: center;
        color: black;
    }
</style>