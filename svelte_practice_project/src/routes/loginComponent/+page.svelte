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

<div class="bg-white p-4 text-black rounded-md px-4 pt-4 pb-8 mt-14">
    <h1 class="pb-1.5 mb-4 text-center uppercase">Sign In</h1>

    <form on:submit={loginCheck}>
  
        <div>
            <label for="email">Email address*</label>
            <div class="mt-2 mb-4">
                <input
                name="email" 
                type="email" 
                autocomplete="email" 
                class="rounded-md w-full border-2 border-slate-400 p-2" 
                placeholder="john@doe.com" 
                required
                bind:value={email}
                >
            </div>
        </div>

        <div>
            <label for="phone">Password*</label>
            <div class="mt-2 mb-4">
                <input
                name="phone" 
                type="password" 
                class="rounded-md w-full border-2 border-slate-400 p-2" 
                required
                bind:value={password}
                >
            </div>
        </div>

        <!-- {#if loginAlert}
        <p class="loginAlert">Invalid username or password</p>
        {/if} -->

        <div class="container flex flex-col items-center">
            <button class="loginButton mt-4 py-1.5 px-6 rounded-lg font-bold text-slate-400">Login</button>
        </div>
    </form>

    <div class="container flex flex-col items-center">
        <p>No account? Signup <button class="important" on:click={bringUpSignup}>here</button></p>
    </div>
</div>

<style>
    h1 {
        border-bottom: 1px solid rgb(221, 221, 221);
    }
    .loginButton {
        border: 2px solid rgb(132, 132, 160);
    }
    .loginButton:hover {
        background: rgb(199, 199, 241);
        border: 2px solid rgb(199, 199, 241);
    }
    .important {color: rgb(108, 108, 192);}
</style>