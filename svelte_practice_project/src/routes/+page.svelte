<script>
	import Introduction from './introduction/+page.svelte'
	import Reactivity from './reactivity/+page.svelte'
	import Props from './props/+page.svelte'
	import Logic from './logic/+page.svelte'	
	import Events from './events/+page.svelte'
	import Bindings from './bindings/+page.svelte'
	// import SignupForm from './signupForm/+page.svelte'
	/* import LoginForm from './loginComponent/+page.svelte' */
	import LifeCycle from './lifecycle/+page.svelte'
	import Stores from './stores/+page.svelte'
	import Motion from './motion/+page.svelte'
	import Transitions from './transitions/+page.svelte'
	import Animations from './animations/+page.svelte'
	/* import { persons } from './svelteTutorialUsers.js' */
	import { alertModal } from './svelteTutorialUsers.js'
	import { alertMessage } from './svelteTutorialUsers.js'
	import { onMount } from 'svelte'
	import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'


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
	let showMotion = false
	let showTransitions = false
	let showAnimations = false
	alertMessage.set('Login successful!')
	alertModal.set(true)
	let authMenu = false


	// this function will close the modal that gives messages to the user
	function closeModal() {
        alertModal.set(false)
    }

	// this function will sign the user in using the github auth
	function signInAuth() {
		signIn('github')
	}

	// this function will sign the user out using the github auth
	function signOutAuth() {
		signOut()
	}

	// this function will toggle the avatar menu
	function toggleAuthMenu() {
		authMenu = !authMenu
	}
</script>



<div class:loginModalBackground={showLogin}>
	<div class:signupModalBackground={showSignup}>

		<div class="introductionPage flex flex-col">

			<!-- if the user is signed int then the header will show -->
			{#if $page.data.session?.user}
				<div class="introductionHeader relative p-4 inline w-full">
					<h1 class="float-left text-slate-600 mt-2">DGM 3770 - Svelte</h1>

					<!---------------------- If the user is signed in then it will show their avatar picture ---------------------------->
					{#if $page.data.session?.user}
						<button on:click={toggleAuthMenu} class="float-right rounded-full w-10 h-10 hover:ring-4 hover:ring-btn-border avatarMenuBTN">
							<img src={$page.data.session.user.image} class="rounded-full" alt="user avatar"/>
						</button>
					{/if}

					<!--------------------------------------------- OAUTH MENU ---------------------------------------------------------->
					{#if authMenu}
						<div class="absolute ring-1 ring-btn-border w-52 right-4 top-16 px-4 py-2 rounded-md avatarMenu">
							<p class="text-black w-full">{$page.data.session.user.name}</p>
							<p class="text-btn-border w-full avatarEmail pb-2">{$page.data.session.user.email}</p>
							<div class="flex justify-center">
								<button on:click={signOutAuth} class="text-slate-600 font-bold logout pt-1">Sign out</button>
							</div>
						</div>
					{/if}
				</div>
				
			{/if}

			<!-- if the user is not signed in then the login form will show -->
			{#if !$page.data.session?.user}
				<div class:loginModal={showLogin}>
					<!-- <div class="cancelButtonContainer">
						<button on:click={() => showLogin = false} class="cancel">X</button>
					</div> -->
			
					<div class="form my-0 mx-auto">
						<!-- these are custom events that check the login and when the signup form is clicked in the login form -->
						<!-- <LoginForm on:checkLogin={checkTheLogin}  on:bringUpSignup={openSignup}/> -->
						<h1 class="text-center mt-4 text-btn-border bg-white p-4 rounded-md">Andrew Kester's DGM 3770 Svelte Tutorial</h1>

						<div class="bg-white p-4 text-black rounded-md px-4 pt-4 pb-8 mt-6">
							<h1 class="pb-1.5 mb-4 text-center uppercase signInLabel">Sign In</h1>

							<div class="flex justify-center mb-4">
								<i class="fa-brands fa-github text-9xl githubLogo"></i>
							</div>

							<p class="text-center">Sign in with <button class="py-2 githubBTN font-bold" on:click={signInAuth}> GitHub</button> </p>
						</div>
					</div>
				</div>
			{/if}

			
    

			<!-- {#if showSignup}
				<div class:signupModal={showSignup}>
					 <div class="cancelButtonContainer">
						<button on:click={() => showSignup = false} class="cancel">X</button>
					</div> 
			
					<div class="">
						<SignupForm on:personAdded={addingNewPerson} />
					</div>
				</div>
			{/if} -->

			<!-- if the user is signed in then the introduction page will show -->
			{#if $page.data.session?.user}

				{#if $alertModal}
					<div class="messageModal p-4 w-vw-40 absolute top-vh-30 right-svw-30 rounded-md">
						<p class="modalMessage text-black text-center pb-4">{$alertMessage}</p>
						<div class="modalButtonContainer w-full flex justify-center">
							<button class="close text-slate-500 mt-4 rounded-lg font-bold py-1.5 px-6 hover:text-white" on:click={closeModal}>Close</button>
						</div>
					</div>
				{/if}

				<div class="flex flex-wrap justify-around m-4 gap-y-0 gap-x-3.5" class:moduleActive={showIntroduction || showReactivity || showProps || showLogic || showEvents || showBindings || showLifeCycle || showStores || showMotion || showTransitions || showAnimations}>
					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showIntroduction = !showIntroduction} class:active={showIntroduction}>Introduction</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showReactivity = !showReactivity} class:active={showReactivity}>Reactivity</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showProps = !showProps} class:active={showProps}>Props</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showLogic = !showLogic} class:active={showLogic}>Logic</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showEvents = !showEvents} class:active={showEvents}>Events</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showBindings = !showBindings} class:active={showBindings}>Bindings</button>

					<!-- <button on:click={() => showSignup = !showSignup} class:active={showSignup}>Signup Form</button> -->
					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showLifeCycle = !showLifeCycle} class:active={showLifeCycle}>Life Cycle</button>
					
					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showStores = !showStores} class:active={showStores}>Stores</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showMotion = !showMotion} class:active={showMotion}>Motion</button>
					
					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showTransitions = !showTransitions} class:active={showTransitions}>Transitions</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 text-white hover:text-white" on:click={() => showAnimations = !showAnimations} class:active={showAnimations}>Animations</button>
				</div>
			{/if}
		
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
				{#if showMotion}
					<Motion />
				{/if}
				{#if showTransitions}
					<Transitions />
				{/if}
				{#if showAnimations}
					<Animations />
				{/if}
			</div>
		
		</div>
		
		{#if $page.data.session?.user}
			<div class="introductionFooter">
				<h1 class="footer text-center py-2 px-0 w-full text-slate-600">Andrew Kester</h1>
			</div>
		{/if}
	</div>
</div>



<style>
	.avatarEmail {
		border-bottom: 1px solid rgb(179, 179, 179);
	}
	.avatarMenu {
		background: rgb(222, 222, 239);
	}
	.avatarMenuBTN {
		border: none;
	}
	.avatarMenuBTN:hover {
		border: none;
	}
	.signInLabel {
		border-bottom: 1px solid rgb(221, 221, 221);
	}
	.githubLogo {
		color: rgb(108, 108, 192);
	}
	.githubBTN {
		border: none;
		color: rgb(108, 108, 192);
	}
	.githubBTN:hover {
		border: none;
		color:rgb(53, 53, 176);
	}
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
	.logout:hover {
		color: rgb(53, 53, 176);
		border: none; 
	}
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









		<!-------------------------------------------------------------------------------------------------------------------------
				/* // function that will check the Persons array and find the email and password requested to login
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

	} */

	<button on:click={() => showSignup = true} class="signIn">| Sign Up</button>
					<button on:click={() => showLogin = true} class="signIn">Sign In | </button> -->

					<!-- <button on:click={() => showLogin = true} class="text-center float-right text-slate-600 font-bold logout">Log Out</button>



	/* // function that will open the signup form component
	let openSignup = async () => {
		showLogin = false
		showSignup = true
	} */



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




<styles>
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
</styles>
-->