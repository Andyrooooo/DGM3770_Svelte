<script lang=ts>
   import { afterUpdate, beforeUpdate } from 'svelte'

let todos = []
let name = ''
let before = ''
let after = ''
let count = 0
let previousCount = 0

function addNewTodo() {
    todos = [...todos, name]
    name = ''

    previousCount = count
    count += 1
}

beforeUpdate(() => {
    before = `You did have ${previousCount} todos`
});

afterUpdate(() => {
    after = `You now have ${count} todos`
})

</script>


<!-- 346px height -->

<div class="bg-white text-black p-4">

    <form on:submit={addNewTodo}>
        <label for="name">Add Todo</label>
        <input type="text" class="p-2 border-2 border-btn-border text-btn-border w-full rounded-lg mb-4 outline-none" name="name" bind:value={name} placeholder="Enter todo..."/>

        <!--         box-sizing: border-box;
        width: 100%;
        padding: 1rem .5rem 1rem .5rem;
        border-radius: 10px;
        margin: 5px 0 1rem 0; -->

        <div class="BTNContainer flex justify-center">
            <input type="submit" value="+" class="addBTN rounded-lg cursor-pointer" />
        </div>
    </form>

    <label>Your todo list</label>

    <div class="bg-btn-border flex justify-around rounded-tr-md rounded-tl-md py-1 px-0">
        <p class="text-white">{after}</p>
        <p class="text-white">{before}</p>
    </div>

    <ul class="bg-slate-100 p-2">
        {#each todos as todo}
        <li class="text-slate-600" >{todo}</li>
        {/each}
    </ul>


</div>


<style>
    
    .addBTN {
        border: 2px solid rgb(122, 122, 226);
        color: rgb(122, 122, 226);
        padding: .25rem 1.5rem .75rem 1.5rem;
        font-size: 2rem;
    }
    .addBTN:hover {
        background: rgb(122, 122, 226);
        color: white;
    }
</style>