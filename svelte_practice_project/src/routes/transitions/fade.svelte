<script>
    import { fade } from 'svelte/transition'

    let openModal = false
</script>


<div class="shadow-md bg-slate-200 text-black p-2 rounded-lg mt-4">

    <h1 class="transitionsTitle text-btn-border">Transition 3: Fade In and Out</h1>

    <p>For this component we use the <a class="text-btn-border">fade</a> transition effect. Below I created a funny little component that will make use of the fade in and fade out. I don't want to give away what it does, so try it out!</p>

    <div class="bg-slate-400 pb-12 pt-14 px-4 my-4 lg:w-8/12 lg:mx-auto">
        <p class="text-center my-4 text-btn-border">Choose a button</p>
        <div class="flex justify-center">
            <button on:click={() => openModal = true} class="py-2 px-6 my-3 mr-2 choiceOne rounded-lg text-btn-border">This One</button>
            <button on:click={() => openModal = true} class="py-2 px-6 my-3 ml-2 choiceTwo rounded-lg">No This One</button>
        </div>
    </div>

    {#if openModal}
        <div in:fade out:fade class="bg-white pb-0 pt-4 px-4 rounded-md my-4 modalPopup">
            <p class="text-center my-4">WRONG!!! Maybe you should have pressed the other button. Want to try again?</p>
            <div class="border-b pb-4"></div>
            <div class="flex justify-center">
                <button on:click={() => openModal = false} class="py-2 px-6 my-3 choiceOne rounded-lg text-btn-border">Dismiss</button>
            </div>
        </div>
    {/if}
</div>


<style>
    .transitionsTitle {border-bottom: 1px solid rgb(193, 193, 193);}
    .modalPopup {
        position: fixed;
        top: 40%;
        z-index: 9;
        width: 60%;
        right: 20%;
        border: 1px solid rgb(104, 104, 226);
    }
    .choiceOne {
        border: 2px solid rgb(104, 104, 226);
    }
    .choiceOne:hover {
        background-color:rgb(104, 104, 226);
        color: white;
    }
    .choiceTwo {
        border: 2px solid rgb(35, 35, 218);
        color: rgb(35, 35, 218);
    }
    .choiceTwo:hover {
        background: rgb(35, 35, 218);
        color: white;
    }
</style>