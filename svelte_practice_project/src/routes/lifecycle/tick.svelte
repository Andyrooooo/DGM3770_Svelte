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
 
<div class="tick p-4 rounded-br-md rounded-bl-md">
    <h1 class="tickTitle">Tick</h1>

    <p class="mb-8">In this example we use the <a class="important">tick</a> function to help us grab a new Starwars vehicle name at random</p>

    <div class="flex justify-center">
        <button class="vehicleBTN py-2 px-4 rounded-md" on:click={addStarWarsVehicles}>Get Random Vehicle</button>
    </div>

    <div class="nameContainer bg-white p-4 mt-4">
        <p class="text-center text-black">{randomVehicleName}</p>
    </div>

</div>
 
 
<style>
    .tick {
        background: rgb(129, 129, 129);
    }
    .tickTitle {
    border-bottom: 1px solid rgb(147, 147, 147);
    }

    .important {
        color: rgb(183, 183, 229);
    }

    .vehicleBTN {
        color: rgb(183, 183, 229);
        border: 2px solid rgb(183, 183, 229);
    }
    .vehicleBTN:hover {
        background: rgb(183, 183, 229);
        color: rgb(79, 79, 79);
    }
</style>