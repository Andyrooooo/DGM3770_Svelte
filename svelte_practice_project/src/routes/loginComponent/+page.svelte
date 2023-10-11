<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    let email = ''
    let password = ''
    /* export let loginAlert = false */

    // custom event that passes up the login component to the parent component
    function loginCheck() {
        dispatch('checkLogin', {email, password})
    }

    // custom event that when clicked will close the login component and open the signup component
    function bringUpSignup() {
        dispatch('bringUpSignup')
    }
</script>

<div class="loginForm">
    <h1>Sign In</h1>

    <form class="" on:submit={loginCheck}>
  
        <div class="">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address*</label>
            <div class="mt-2">
                <input 
                id="email" 
                name="email" 
                type="email" 
                autocomplete="email" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                placeholder="john@doe.com" 
                required
                bind:value={email}
                >
            </div>
        </div>

        <div class="">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Password*</label>
            <div class="mt-2">
                <input id="phone" 
                name="phone" 
                type="password" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                required
                bind:value={password}
                >
            </div>
        </div>

        <!-- {#if loginAlert}
        <p class="loginAlert">Invalid username or password</p>
        {/if} -->

        <div class="container flex flex-col items-center">
            <button class="block w-half rounded- border-0 py-1.5 loginButton">Login</button>
        </div>
    </form>

    <div class="container flex flex-col items-center">
        <p>No account? Signup <button class="important" on:click={bringUpSignup}>here</button></p>
    </div>
</div>

<style>
    .loginForm {
        background: white;
        padding: 1rem;
        color: black;
        border-radius: 10px;
		margin: 1rem 1rem 2rem 1rem;
    }
    h1 {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding-bottom: 5px;
        margin-bottom: 1rem;
        text-align: center;
        text-transform: uppercase;
    }
    input {
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 1rem;
    }
    .loginButton {
        border: 2px solid rgb(132, 132, 160);
        margin-top: 1rem;
        padding: .4rem 1.5rem;
        border-radius: 5px;
        font-weight: 700;
        color: rgb(132, 132, 160);
    }
    .loginButton:hover {
        background: rgb(199, 199, 241);
        border: 2px solid rgb(199, 199, 241);
    }
    /* .loginAlert {
        color: red;
        text-align: center;
        font-size: .8rem;
        margin-top: -1rem;
    } */
    .important {color: rgb(108, 108, 192);}
</style>