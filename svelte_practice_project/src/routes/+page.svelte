<script>
	import Introduction from './introduction/+page.svelte'
	import Reactivity from './reactivity/+page.svelte'
	import Props from './props/+page.svelte'
	import Logic from './logic/+page.svelte'	
	import Events from './events/+page.svelte'
	import Bindings from './bindings/+page.svelte'
	import SignupForm from './signupForm/+page.svelte'
	import LoginForm from './loginComponent/+page.svelte'
	import LifeCycle from './lifecycle/+page.svelte'

	let showIntroduction = false
	let showReactivity = false
	let showProps = false
	let showLogic = false
	let showEvents = false
	let showBindings = false
	let showSignup = false
	let showLogin = false
	let showLifeCycle = true

	// Our empty inital array 
	let persons = []

	const addingNewPerson = async (event) => {
		const person = event.detail

		// creates an id for the new object if it does not already have one
		let newID = persons.length > 0 ? persons[persons.length - 1].id + 1 : 1

		// new person object gets assigned the input values from our other array
		const newPerson = {
			firstName: person.firstName,
			lastName: person.lastName,
			email: person.email,
			phone: person.phone,
			password: person.password,
			confirmPassword: person.confirmPassword,
			id: newID
		}
		// we then add the new object to the array as a NEW array
		persons = [...persons, newPerson]

		/* // fetches the JSON server data and adds the new object to it
		fetch('http://localhost:8000/persons', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(person)
		}) */
	}


	// function that will check the Persons array and find the email and password requested to login
	let checkTheLogin = async (event) => {
		// data passed up from the login component
		const {email, password} = event.detail

		// 
		const arrayUser = persons.find(person => person.email === email && person.password === password)

		/* const response = await fetch('http://localhost:8000/persons')
		if (!response.ok) throw Error('There was an error fetching the data')
		let data = await response.json()

		let user = data.find(person => person.email === email && person.password === password) */
			

		if (arrayUser) {
      		alert('Login successful!')
			showLogin = false
		} else {
			alert('Invalid email or password. Please try again.')
		}

		/* if (user) {
      		alert('JSON data: Login successful!')
		} else {
			alert('JSON data: Invalid email or password. Please try again.')
		} */
	}
</script>



<div class:loginModalBackground={showLogin}>

	<div class="introductionPage">
		<div class="introductionHeader">
			<h1 class="title">DGM 3770 - Svelte</h1>
			<button on:click={() => showLogin = true} class="signIn">Sign In</button>
		</div>

		{#if showLogin}
			<div class:loginModal={showLogin}>
				<div class="cancelButtonContainer">
					<button on:click={() => showLogin = false} class="cancel">X</button>
				</div>
		
				<div class="form">
					<LoginForm on:checkLogin={checkTheLogin}/>
				</div>
			</div>
		{/if}
	
		<div class="sectionButtons" class:moduleActive={showIntroduction || showReactivity || showProps || showLogic || showEvents || showBindings || showSignup || showLifeCycle}>
			<button on:click={() => showIntroduction = !showIntroduction} class:active={showIntroduction}>Introduction</button>
			<button on:click={() => showReactivity = !showReactivity} class:active={showReactivity}>Reactivity</button>
			<button on:click={() => showProps = !showProps} class:active={showProps}>Props</button>
			<button on:click={() => showLogic = !showLogic} class:active={showLogic}>Logic</button>
			<button on:click={() => showEvents = !showEvents} class:active={showEvents}>Events</button>
			<button on:click={() => showBindings = !showBindings} class:active={showBindings}>Bindings</button>
			<button on:click={() => showSignup = !showSignup} class:active={showSignup}>Signup Form</button>
			<button on:click={() => showLifeCycle = !showLifeCycle} class:active={showLifeCycle}>Life Cycle</button>
		</div>
	
		<div>
			{#if showIntroduction}
				<Introduction />
			{/if}
			{#if showReactivity}
				<Reactivity />
			{/if}
			{#if showProps}
				<Props />
			{/if}
			{#if showLogic}
				<Logic />
			{/if}
			{#if showEvents}
				<Events />
			{/if}
			{#if showBindings}
				<Bindings />
			{/if}
			{#if showSignup}
				<SignupForm on:personAdded={addingNewPerson}/>
				<!-- <SignupForm /> -->
			{/if}
			{#if showLifeCycle}
				<LifeCycle />
				<!-- <SignupForm /> -->
			{/if}
		</div>
	
	</div>
	
	
	<div class="introductionFooter">
		<h1 class="footer">Andrew Kester</h1>
	</div>
</div>



<style>
	.title {
		color: rgb(79, 79, 79);
		float: left;
	}
	.signIn {
		text-align: center;
		float: right;
		color: rgb(79, 79, 79);
		border: none;
		padding: 0;
		margin: 0;
	}
	.signIn:hover {
		color: white;
		border: none;
	}
	.introductionPage {
		/* padding: 1rem; */
		display: flex;
		flex-direction: column;
		min-height: 94.6vh;
	}
	.introductionHeader {
		background: rgb(199, 199, 241);
		padding: 1rem;
		display: inline-block;
		width: 100%;
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
	.sectionButtons {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin: 1rem;
		gap: 0 .9rem;
	}
	.moduleActive {
		border-bottom: 1px solid rgb(93, 93, 93);
		padding-bottom: 1rem;
	}
	.footer {
		text-align: center;
		background: rgb(199, 199, 241);
		padding: .5rem 0;
		width: 100%;
		color: rgb(79, 79, 79);
	}
	.loginModal {
		background: rgba(84, 84, 84, 0.95);
		z-index: 2;
		min-height: 100vh;
		min-width: 100vw;
		position: absolute;
	}
	.loginModalBackground {
		z-index: 1;
		position: relative;
	}
	.cancel {
		border: none;
		text-align: right;
		border: 1px solid rgb(176, 176, 221);
		float: right;
	}
	.cancel:hover {
		border: 1px solid rgb(255, 255, 255);
		color: white;
	}
	.cancel:active {
		border: none;
	}
	.cancelButtonContainer {
		width: 100%;
		margin-bottom: 4.8rem;
		padding-right: 1rem;
		padding-top: 3px;
	}
	.form {
		width: 400px;
		margin: 0 auto;
	}
</style>


<!-- <p>The introduction tutorial will be located <a href="/introduction" class="link">here.</a></p>
<p>The reactivity tutorial will be located <a href="/reactivity" class="link">here.</a></p>
<p>The props tutorial will be located <a href="/props" class="link">here.</a></p>
<p>The logic tutorial will be located <a href="/logic" class="link">here.</a></p>
<p>The Events tutorial will be located <a href="/events" class="link">here.</a></p>
<p>The Bindings tutorial will be located <a href="/bindings" class="link">here.</a></p> -->

<!-- dont forget when you add <script lang="ts"><script> -->


	<!-- {#if showIntroduction}
			<Introduction />
		{:else if showReactivity}
			<Reactivity />
		{:else if showProps}
			<Props />
		{:else if showLogic}
			<Logic />
		{:else if showEvents}
			<Events />
		{:else if showBindings}
			<Bindings />
		{/if} -->



		<!-- old custom event code -->
		<!-- let persons = []

		function addingNewPerson(event) {
			const person = event.detail
			persons = [...persons, person]
			console.log(persons)
		}  -->