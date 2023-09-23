<script>
    import Signup from './signup.svelte'
    import Login from './login.svelte'

    let showSignup = false
    let showLogin = false
</script>

<div class="formSection">
    <h1>Here are my form components</h1>

    <div class="formButtons" class:moduleActive={showSignup || showLogin }>
        <button on:click={() => showSignup = !showSignup} class:active={showSignup}>Signup Form</button>
        <button on:click={() => showLogin = !showLogin} class:active={showLogin}>Login Form</button>
    </div>
</div>

<div>
    {#if showSignup}
        <Signup />
    {/if}
    {#if showLogin}
        <Login />
    {/if}
</div>

<style>
    .formSection {
		padding: 1rem;
	}
	h1 {
		text-align: center;
		margin-bottom: 1rem;
	}
	button {
		border: 1px solid rgb(176, 176, 221);
		padding: 5px 10px;
		border-radius: 5px 10px;
		font-weight: 700;
		margin: .5rem 0;
		color: rgb(176, 176, 221);
	}
	button:hover {
		border: 1px solid rgb(255, 255, 255);
		color: rgb(255, 255, 255);
	}
	.active {
		background: rgb(176, 176, 221);
		color: rgb(79, 79, 79);
		border: none;
	}
	.formButtons {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-bottom: 1rem;
	}
	.moduleActive {
		border-bottom: 1px solid rgb(93, 93, 93);
		padding-bottom: 1rem;
	}
</style>
