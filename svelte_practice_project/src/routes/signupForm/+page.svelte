<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	// resets the inputs to empty strings
	function resetInputs() {
		person.firstName = ''
		person.lastName = ''
		person.email = ''
		person.phone = ''
		person.password = ''
		person.confirmPassword = ''
	}

	// object that will take in the input data
	let person = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: ''
	}

	// async function that will take the input values and push them up to our parent component
	const addNewPerson = async () => {
		dispatch('personAdded', person)
		resetInputs()
		alert("Awesome, your account was created successfully!")
	}
</script>

<div class="signupForm" on:submit={addNewPerson}>
    <h1>Sign up</h1>

    <form class="md:grid gap-4 grid-cols-3 grid-rows-2">
        <div class="">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name*</label>
            <div class="mt-2">
              <input type="text" 
			  name="first-name" 
			  id="first-name" 
			  autocomplete="given-name" 
			  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
			  placeholder="John" 
			  required
			  bind:value={person.firstName}
			  >
            </div>
        </div>
  
        <div class="">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name*</label>
            <div class="mt-2">
                <input type="text" 
				name="last-name" 
				id="last-name" 
				autocomplete="family-name" 
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
				placeholder="e.g. Smith" 
				required
				bind:value={person.lastName}
				>
            </div>
        </div>
  
        <div class="">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address*</label>
            <div class="mt-2">
                <input id="email" 
				name="email" 
				type="email" 
				autocomplete="email" 
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
				placeholder="john@doe.com" 
				required
				bind:value={person.email}
				>
            </div>
        </div>

        <div class="">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
            <div class="mt-2">
                <input id="phone" 
				name="phone" 
				type="tel" 
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
				placeholder="801-123-4567"
				bind:value={person.phone}
				>
            </div>
        </div>

        <div class="">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password*</label>
            <div class="mt-2">
                <input id="password" 
				name="passowrd" 
				type="password" 
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
				required
				bind:value={person.password}
				>
            </div>
        </div>

        <div class="">
            <label for="reenterPassword" class="block text-sm font-medium leading-6 text-gray-900">Re-enter Password*</label>
            <div class="mt-2">
                <input id="reenterPassword" 
				name="reenterPassword"
				type="password" 
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
				required
				bind:value={person.confirmPassword}
				>
            </div>
        </div>

		<div class="">
        </div>

        <div class="container flex flex-col items-center">
            <button class="block w-half rounded- border-0 py-1.5 submitButton">Submit</button>
        </div>
        
    </form>
</div>


<style>
    .signupForm {
        background: white;
        padding: 1rem;
        color: black;
        border-radius: 10px;
		margin: 1rem 1rem 2rem 1rem;
		box-shadow: 1px 1px 4px 2px rgb(34, 34, 34);
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
    .submitButton {
        border: 2px solid rgb(132, 132, 160);
        margin-top: 1rem;
        padding: .4rem 1.5rem;
        border-radius: 5px;
        font-weight: 700;
        color: rgb(132, 132, 160);
		margin-bottom: 1rem;
    }
    .submitButton:hover {
        background: rgb(199, 199, 241);
        border: 2px solid rgb(199, 199, 241);
    }
</style>

<!-- <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
        <input type="text" placeholder="Email Address">
        <input type="number" placeholder="phone">
        <input type="text" placeholder="Password">
        <input type="text" placeholder="Confirm Password">

        <button>Sign up</button> -->


<!-- Old custom event code -->
<!-- function addNewPerson() {
		dispatch('personAdded', newPerson)
		// resetInputs() -->
<!-- import { createEventDispatcher } from 'svelte'

		const dispatch = createEventDispatcher()  -->