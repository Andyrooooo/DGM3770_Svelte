<script lang=ts>
    import {name, greeting} from './bindingStore.js'

    let modal = false
</script>
    


<div class="rounded-bl-md rounded-br-md">

    <label>Please enter your name</label>
    <input class="w-full p-2 border-2 border-btn-border text-btn-border bg-inherit rounded-lg mt-2" bind:value={$name} />
    <div class="flex justify-center">
        <button class="submitButton py-2 px-4 mt-2 rounded-lg" on:click={() => modal = true}>Submit</button>
    </div>
    

    {#if modal} 
    <div class="modalContainer bg-white fixed w-3/4 top-2/4 p-4 rounded-md shadow-md">
        <h2 class="text-black text-2xl text-center mb-8">Greetings!</h2>
        <p class="greetingMessage text-black text-center">{$greeting}</p>

        <div class="flex justify-center">
            <button class="closeButton text-black py-2 px-4 rounded-lg mt-2" on:click={() => modal = false}>Close</button>
        </div>
    </div>
    {/if}

</div>


<style>
    .submitButton {
        border: 2px solid rgb(104, 104, 226);
        color:rgb(104, 104, 226);
    }
    
    .submitButton:hover {
        background: rgb(104, 104, 226);
        color: white;
    }
    .modalContainer {
        margin: 0 12.5%;
    }
    .greetingMessage {
        border-bottom: 1px solid rgb(220, 220, 220);
    }
    .closeButton {
        border: 2px solid rgb(104, 104, 226);
        color:rgb(104, 104, 226);
    }
    .closeButton:hover {
        background: rgb(104, 104, 226);
        color: white;
    }
</style>