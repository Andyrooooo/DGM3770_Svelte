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
	import Stores from './stores/+page.svelte'
	import { persons } from './svelteTutorialUsers.js'
	import { alertModal } from './svelteTutorialUsers.js'
	import { alertMessage } from './svelteTutorialUsers.js'
	import { onMount } from 'svelte'

	let showIntroduction = false
	let showReactivity = false
	let showProps = false
	let showLogic = false
	let showEvents = false
	let showBindings = false
	let showSignup = false
	let showLogin
	onMount(() => {
		showLogin = true
	})
	let showLifeCycle = false
	let showStores = false

	const addingNewPerson = async (event) => {
		// data passed up from the signup form component using a custom event
		const person = event.detail

		// creates an id for the new object if it does not already have one
		let newID = $persons.length > 0 ? $persons[$persons.length - 1].id + 1 : 1

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

		// We then pass the new person object to the custom data store
		persons.addUser(newPerson)

		// after user is added we close the form
		showSignup = false
	}


	// function that will check the Persons array and find the email and password requested to login
	let checkTheLogin = async (event) => {
		// data passed up from the login component
		const {email, password} = event.detail

		// variable that will find the user in the array that matches the email and password if it is there
		const arrayUser = $persons.find(person => person.email === email && person.password === password)

		// if-else statement that will populate the message modal when the credentials are correct or incorrect
		if (arrayUser) {
      		alertMessage.set('Login successful!')
			alertModal.set(true)
			showLogin = false
		} else {
			alertMessage.set('Invalid email or password. Please try again.')
			alertModal.set(true)
		}

	}

	// function that will open the signup form component
	let openSignup = async () => {
		showLogin = false
		showSignup = true
	}

	// this function will close the modal that gives messages to the user
	function closeModal() {
        alertModal.set(false)
    }
</script>



<div class:loginModalBackground={showLogin}>
	<div class:signupModalBackground={showSignup}>

		<div class="introductionPage flex flex-col">
			<div class="introductionHeader p-4 inline w-full">
				<h1 class="float-left text-slate-600">DGM 3770 - Svelte</h1>

				<!-- <button on:click={() => showSignup = true} class="signIn">| Sign Up</button>
				<button on:click={() => showLogin = true} class="signIn">Sign In | </button> -->

				<button on:click={() => showLogin = true} class="text-center float-right text-slate-600 font-bold hover:text-white logout">Log Out</button>
			</div>

			{#if showLogin}
				<div class:loginModal={showLogin}>
					<!-- <div class="cancelButtonContainer">
						<button on:click={() => showLogin = false} class="cancel">X</button>
					</div> -->
			
					<div class="form my-0 mx-auto">
						<!-- these are custom events that check the login and when the signup form is clicked in the login form -->
						<LoginForm on:checkLogin={checkTheLogin}  on:bringUpSignup={openSignup}/>
					</div>
				</div>
			{/if}

			{#if $alertModal}
				<div class="messageModal p-4 w-vw-40 absolute top-vh-30 right-svw-30 rounded-md">
					<p class="modalMessage text-black text-center pb-4">{$alertMessage}</p>
					<div class="modalButtonContainer w-full flex justify-center">
						<button class="close text-slate-500 mt-4 rounded-lg font-bold py-1.5 px-6 hover:text-white" on:click={closeModal}>Close</button>
					</div>
				</div>
			{/if}
    

			{#if showSignup}
				<div class:signupModal={showSignup}>
					<!-- <div class="cancelButtonContainer">
						<button on:click={() => showSignup = false} class="cancel">X</button>
					</div> -->
			
					<div class="">
						<SignupForm on:personAdded={addingNewPerson} />
					</div>
				</div>
			{/if}
		
			<div class="flex flex-wrap justify-around m-4 gap-y-0 gap-x-3.5" class:moduleActive={showIntroduction || showReactivity || showProps || showLogic || showEvents || showBindings || showLifeCycle || showStores}>
				<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showIntroduction = !showIntroduction} class:active={showIntroduction}>Introduction</button>

				<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showReactivity = !showReactivity} class:active={showReactivity}>Reactivity</button>

				<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showProps = !showProps} class:active={showProps}>Props</button>

				<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showLogic = !showLogic} class:active={showLogic}>Logic</button>

				<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showEvents = !showEvents} class:active={showEvents}>Events</button>

				<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showBindings = !showBindings} class:active={showBindings}>Bindings</button>

				<!-- <button on:click={() => showSignup = !showSignup} class:active={showSignup}>Signup Form</button> -->
				<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showLifeCycle = !showLifeCycle} class:active={showLifeCycle}>Life Cycle</button>
				
				<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showStores = !showStores} class:active={showStores}>Stores</button>
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
				<!-- {#if showSignup}
					<SignupForm on:personAdded={addingNewPerson}/>
				{/if} -->
				{#if showLifeCycle}
					<LifeCycle />
				{/if}
				{#if showStores}
					<Stores />
				{/if}
			</div>
		
		</div>
		
		
		<div class="introductionFooter">
			<h1 class="footer text-center py-2 px-0 w-full text-slate-600">Andrew Kester</h1>
		</div>
	</div>
</div>



<style>
	.introductionPage {
		min-height: 94.6vh;
	}
	.introductionHeader {
		background: rgb(199, 199, 241);
	}
	
	button {
		border: 2px solid rgb(176, 176, 221);
		color: rgb(176, 176, 221);
	}
	button:hover {
		border: 2px solid rgb(255, 255, 255);
	}
	.logout {
		border: none; 
		color:rgb(93, 93, 93);
	}
	.logout:hover {border: none;}
	.active {
		background: rgb(176, 176, 221);
		color:rgb(93, 93, 93);
	}
	.moduleActive {
		border-bottom: 1px solid rgb(93, 93, 93);
		padding-bottom: 1rem;
	}
	.footer {
		background: rgb(199, 199, 241);
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
	.signupModalBackground {
		z-index: 1;
		position: relative;
	}
	.signupModal {
		background: rgba(84, 84, 84, 0.95);
		z-index: 2;
		min-height: 100vh;
		min-width: 100vw;
		position: absolute;
	}
	/* .cancel {
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
	} */
	.form {
		width: 400px;
	}

	.messageModal {
        background: rgb(199, 199, 241);
		z-index: 3;
    }
    .modalMessage {
        border-bottom: 1px solid rgb(163, 163, 197);
    }
    .close {
        border: 2px solid rgb(132, 132, 160);
    }
    .close:hover {
        border: 2px solid white;
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



		
		<!--  // fetches the JSON server data and adds the new object to it
		fetch('http://localhost:8000/persons', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(person)
		})  -->


		<!-- const response = await fetch('http://localhost:8000/persons')
		if (!response.ok) throw Error('There was an error fetching the data')
		let data = await response.json()

		let user = data.find(person => person.email === email && person.password === password) -->


		<!-- 
		 if (user) {
      		alert('JSON data: Login successful!')
		} else {
			alert('JSON data: Invalid email or password. Please try again.')
		}  -->