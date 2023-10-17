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

<div class="beforeAfter text-black p-4">
    <h1 class="beforeAfterTitle text-black">BeforeUpdate and afterUpdate</h1>

    <p class="mb-8">In here we use <a class="important">beforeUpdate</a> and <a class="important">afterUpdate</a> to show us how many todos we have before and after we add a new todo</p>

    <form on:submit={addNewTodo}>
        <label for="name">Add Todo</label>
        <input type="text" class="box-border w-full py-4 px-2 rounded-md mt-.5 mb-4 mx-0" name="name" bind:value={name}/>

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

    <div class="todoCount flex justify-around rounded-tr-md rounded-tl-md py-1 px-0">
        <p class="text-white">{after}</p>
        <p class="text-white">{before}</p>
    </div>

    <ul class="bg-white p-2">
        {#each todos as todo}
        <li class="text-slate-600" >{todo}</li>
        {/each}
    </ul>


</div>


<style>
    .beforeAfter {
        background: rgb(181, 181, 181);
    }
    .beforeAfterTitle {
        border-bottom: 1px solid rgb(154, 154, 154);
    }
    
    .addBTN {
        border: 2px solid rgb(122, 122, 226);
        color: rgb(122, 122, 226);
        padding: .25rem 1.5rem .75rem 1.5rem;
        font-size: 2rem;
    }
    .addBTN:hover {
        background: rgb(122, 122, 226);
        color: rgb(79, 79, 79);
    }
    .todoCount {
        background-color: rgb(114, 114, 114);
    }
    .important {
        color: rgb(122, 122, 226);
    }
</style>