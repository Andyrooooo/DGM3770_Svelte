<script lang=ts>
    import { users } from './customStore.js'

    let userName = ''

</script>
    


<div>

    <p class="userAmount text-center px-2 pt-2 pb-0 rounded-md">There is {$users.length === 0 ? 'no users' : $users.length === 1 ? `${$users.length} user` : `${$users.length} users`} currently in the system</p>

    <input class="p-2 border-2 border-btn-border text-btn-border bg-inherit w-full mt-2 rounded-lg" type="text" bind:value={userName} placeholder="Enter your name..." />
    
    <div class="flex justify-center">
    <button class="addUser py-2 px-0 rounded-lg mt-2" on:click={() => {
        let user = {name: userName}
        users.addUser(user)
        userName = ''
    }}>
    Add user
    </button>
    </div>

    <ul class="mt-4">
        {#each $users as user}
            <li class="flex justify-between mt-4">
            <input class="displayName text-black p-1 outline-none bg-none text-white rounded-sm" value='{user.name}' readonly/>
            <button class="deleteButton basis-1/5 py-1 px-2 rounded-lg text-red" on:click={() => {users.removeUser(user)}}>Delete User</button>
            </li>
        {/each}
    </ul>
</div>


<style>
    .userAmount {
        color:rgb(104, 104, 226);
    }
    .addUser {
        width: 24%;
        border: 2px solid rgb(104, 104, 226);
        color: rgb(104, 104, 226);
    }
    .addUser:hover {
        background:rgb(104, 104, 226);
        color: white;
    }
    .deleteButton {
        border: 2px solid red;
        color: red;
    }
    .deleteButton:hover {
        background: red;
        color: white;
    }
    .displayName {
        flex-basis: 79%;
        border: 2px solid white;
        color: black;
    }
</style>