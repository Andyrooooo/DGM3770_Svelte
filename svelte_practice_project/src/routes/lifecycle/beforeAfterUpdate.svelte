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

<div class="beforeAfter">
    <h1 class="beforeAfterTitle">BeforeUpdate and afterUpdate</h1>

    <p class="description">In here we use <a class="important">beforeUpdate</a> and <a class="important">afterUpdate</a> to show us how many todos we have before and after we add a new todo</p>

    <form on:submit={addNewTodo}>
        <label for="name">Add Todo</label>
        <input type="text" class="name" name="name" bind:value={name}/>

        <div class="BTNContainer">
            <input type="submit" value="+" class="addBTN" />
        </div>
    </form>

    <label>Your todo list</label>

    <div class="todoCount">
        <p class="message">{after}</p>
        <p class="message">{before}</p>
    </div>


    <ul class="todoList">
        {#each todos as todo}
        <li class="todo" >{todo}</li>
        {/each}
    </ul>


</div>


<style>
    .beforeAfter {
        background: rgb(181, 181, 181);
        padding: 1rem;
        color: black;
    }
    .beforeAfterTitle {
        color: black;
        border-bottom: 1px solid rgb(154, 154, 154);
    }
    .description {
        margin-bottom: 2rem;
    }
    .name {
        box-sizing: border-box;
        width: 100%;
        padding: 1rem .5rem 1rem .5rem;
        border-radius: 10px;
        margin: 5px 0 1rem 0;
    }
    .BTNContainer {
        display: flex;
        justify-content: center;
    }
    .addBTN {
        border: 2px solid rgb(166, 166, 232);
        color: rgb(166, 166, 232);
        border-radius: 10px;
        padding: .25rem 1.5rem .75rem 1.5rem;
        cursor: pointer;
        font-size: 2rem;
    }
    .addBTN:hover {
        background: rgb(166, 166, 232);
        color: rgb(79, 79, 79);
    }
    .todoList {
        background: rgb(255, 255, 255);
        padding: .5rem;
    }
    .todo {
        color: rgb(111, 111, 111);
    }
    .todoCount {
        display: flex;
        justify-content: space-around;
        background-color: rgb(114, 114, 114);
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        padding: 5px 0;
    }
    .message {color: rgb(255, 255, 255);}
    .important {
        color: rgb(137, 137, 238);
    }
</style>