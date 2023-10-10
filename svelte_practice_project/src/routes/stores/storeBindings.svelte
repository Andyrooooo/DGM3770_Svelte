<script lang=ts>
    import {name, greeting} from './bindingStore.js'

    let modal = false
</script>
    


<div class="binding">
    <h1 class="bindingTitle">Store Bindings</h1>

    <p class="description">In this example, we can add and delete "users" from our user list using <a class="important">Custom stores</a></p>

    <label>Please enter your name</label>
    <input class="inputName" bind:value={$name} />
    <div class="buttonContainer">
        <button class="submitButton" on:click={() => modal = true}>Submit</button>
    </div>
    

    {#if modal} 
    <div class="modalContainer">
        <h2>Greetings!</h2>
        <p class="greetingMessage">{$greeting}</p>

        <div class="buttonContainer">
            <button class="closeButton" on:click={() => modal = false}>Close</button>
        </div>
    </div>
    {/if}

</div>


<style>
    .binding {
        background: rgb(0, 0, 0);
        padding: 1rem;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .bindingTitle {
        border-bottom: 1px solid rgb(126, 126, 126);
    }
    .important {
        color: rgb(104, 104, 226);
    }
    .description {
        margin-bottom: 1rem;
    }
    .inputName {
        width: 100%;
        padding: .5rem 5px;
        color: black;
    }
    .buttonContainer {
        display: flex;
        justify-content: center;
    }
    .submitButton {
        border: 2px solid rgb(104, 104, 226);
        padding: .5rem 1rem;
        margin-top: 5px;
        border-radius: 10px;
        color:rgb(104, 104, 226);
    }
    .submitButton:hover {
        background: rgb(104, 104, 226);
        color: white;
    }
    .modalContainer {
        background: white;
        position: fixed;
        width: 75%;
        margin: 0 12.5%;
        top: 50%;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 1px 1px 4px black;
    }
    .greetingMessage {
        color: black;
        border-bottom: 1px solid rgb(220, 220, 220);
        text-align: center;
    }
    h2 {
        color: black;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    .closeButton {
        color: black;
        border: 2px solid rgb(104, 104, 226);
        color:rgb(104, 104, 226);
        padding: .5rem 1rem;
        border-radius: 10px;
        margin-top: .5rem;
    }
    .closeButton:hover {
        background: rgb(104, 104, 226);
        color: white;
    }
</style>