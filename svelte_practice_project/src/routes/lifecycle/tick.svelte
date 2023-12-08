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

    <div class="flex justify-center">
        <button class="vehicleBTN py-2 px-4 rounded-md text-btn-border border-2 border-btn-border hover:bg-btn-border hover:text-white" on:click={addStarWarsVehicles}>Get Random Vehicle</button>
    </div>

    <div class="nameContainer border-2 border-btn-border p-4 mt-4 h-14 bg-slate-100">
        <p class="text-center text-btn-border">{randomVehicleName}</p>
    </div>

</div>
