<script lang=ts>
    import { users } from './customStore.js'

    let userName = ''

</script>
    


<div class="custom">
    <h1 class="customTitle">Custom Stores</h1>

    <p class="description">In this example, we can add and delete "users" from our user list using <a class="important">Custom stores</a></p>

    <p class="userAmount">There is {$users.length === 0 ? 'no users' : $users.length === 1 ? `${$users.length} user` : `${$users.length} users`} currently in the system</p>

    <input class="nameInput" type="text" bind:value={userName} placeholder="Enter your name" />
    
    <div class="addUserContainer">
    <button class="addUser" on:click={() => {
        let user = {name: userName}
        users.addUser(user)
        userName = ''
    }}>
    Add user
    </button>
    </div>

    <ul class="userList">
        {#each $users as user}
            <li class="listItem">
            <input class="displayName" value='{user.name}' readonly/>
            <button class="deleteButton" on:click={() => {users.removeUser(user)}}>Delete User</button>
            </li>
        {/each}
    </ul>
</div>


<style>
    .custom {
        background: rgb(67, 66, 66);
        padding: 1rem;
    }
    .customTitle {
        border-bottom: 1px solid rgb(126, 126, 126);
    }
    .important {
        color: rgb(104, 104, 226);
    }
    .description {
        margin-bottom: 1rem;
    }
    input {
        color: black;
    }
    .userAmount {
        text-align: center;
        padding: .5rem .5rem 0 .5rem;
        color:rgb(104, 104, 226);
        border-radius: 5px;
    }
    .nameInput {
        padding: .5rem 5px;
        width: 100%;
        margin-top: 1rem;
        background: rgb(231, 231, 231);
    }
    .addUser {
        width: 24%;
        border: 2px solid rgb(104, 104, 226);
        padding: .4rem 0;
        border-radius: 10px;
        color: rgb(104, 104, 226);
        margin-top: 5px;
    }
    .addUser:hover {
        background:rgb(104, 104, 226);
        color: white;
    }
    .userList {
        margin-top: 1rem;
    }
    .listItem {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }
    .deleteButton {
        flex-basis: 20%;
        border: 2px solid red;
        padding: .2rem .4rem;
        border-radius: 10px;
        color: red;
    }
    .deleteButton:hover {
        background: red;
        color: white;
    }
    .displayName {
        flex-basis: 79%;
        padding: 5px;
        outline: none;
        border: 2px solid white;
        background: none;
        color: white;
        border-radius: 5px;
    }
    .addUserContainer {
        display: flex;
        justify-content: center;
    }
</style>