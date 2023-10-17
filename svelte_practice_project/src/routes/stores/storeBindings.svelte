<script lang=ts>
    import {name, greeting} from './bindingStore.js'

    let modal = false
</script>
    


<div class="bg-black p-4 rounded-bl-md rounded-br-md">
    <h1 class="bindingTitle">Store Bindings</h1>

    <p class="mb-4">In this example, we can add and delete "users" from our user list using <a class="important">Custom stores</a></p>

    <label>Please enter your name</label>
    <input class="w-full p-2 text-black" bind:value={$name} />
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
    .bindingTitle {
        border-bottom: 1px solid rgb(126, 126, 126);
    }
    .important {
        color: rgb(104, 104, 226);
    }
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