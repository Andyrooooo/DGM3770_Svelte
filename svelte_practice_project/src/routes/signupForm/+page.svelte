<script lang="ts">
	import { createEventDispatcher } from 'svelte'

    import {alertModal} from '../svelteTutorialUsers.js'
    import {alertMessage} from '../svelteTutorialUsers.js'

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

	// function that will take the input values and push them up to our parent component
	function addNewPerson() {
		dispatch('personAdded', person)
		resetInputs()
		alertMessage.set("Awesome, your account was created successfully! Enjoy the tutorial!")
        alertModal.set(true)
	}

    // check if the passwords match
    function checkPasswords() {
        if (person.password !== person.confirmPassword) {
            alertMessage.set("Your passwords do not match. Please try again.")
            alertModal.set(true)
        } else {
            addNewPerson()
        }
    }

    // uses store to close the messsge modal
   /*  function closeModal() {
        alertModal.set(false)
    } */
</script>

<div class="bg-white p-4 text-black rounded-md mx-4 mt-14 shadow-md" on:submit={checkPasswords}>

    <h1 class="pb-1.5 mb-4 text-center uppercase">Sign up</h1>

    <form class="md:grid gap-4 grid-cols-3 grid-rows-2">
        <div class="">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name*</label>
            <div class="mt-2 mb-4">
              <input type="text" 
			  name="first-name" 
			  id="first-name" 
			  autocomplete="given-name" 
              pattern="[A-Za-z]+"
			  class="rounded-md w-full border-2 border-slate-400 p-2" 
			  placeholder="John" 
			  required
			  bind:value={person.firstName}
			  >
            </div>
        </div>
  
        <div class="">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name*</label>
            <div class="mt-2 mb-4">
                <input type="text" 
				name="last-name" 
				id="last-name" 
				autocomplete="family-name" 
                pattern="[A-Za-z]+"
				class="rounded-md w-full border-2 border-slate-400 p-2" 
				placeholder="e.g. Smith" 
				required
				bind:value={person.lastName}
				>
            </div>
        </div>
  
        <div class="">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address*</label>
            <div class="mt-2 mb-4">
                <input id="email" 
				name="email" 
				type="email" 
				autocomplete="email" 
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]"
				class="rounded-md w-full border-2 border-slate-400 p-2" 
				placeholder="john@doe.com" 
				required
				bind:value={person.email}
				>
            </div>
        </div>

        <div class="">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
            <div class="mt-2 mb-4">
                <input id="phone" 
				name="phone" 
				type="tel" 
                pattern="[0-9]+"
				class="rounded-md w-full border-2 border-slate-400 p-2" 
				placeholder="801-123-4567"
				bind:value={person.phone}
				>
            </div>
        </div>

        <div class="">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password*</label>
            <div class="mt-2 mb-4">
                <input id="password" 
				type="password" 
				class="rounded-md w-full border-2 border-slate-400 p-2" 
				required
                minlength="6"
                maxlength="12"
                pattern="[a-zA-Z0-9._%+-]+"
				bind:value={person.password}
				>
            </div>
        </div>

        <div class="">
            <label for="reenterPassword" class="block text-sm font-medium leading-6 text-gray-900">Re-enter Password*</label>
            <div class="mt-2 mb-4">
                <input id="reenterPassword" 
				type="password" 
				class="rounded-md w-full border-2 border-slate-400 p-2" 
				required
                minlength="6"
                maxlength="12"
                pattern="[a-zA-Z0-9._%+-]+"
				bind:value={person.confirmPassword}
				>
            </div>
        </div>

        <div></div>

        <div class="container flex flex-col items-center">
            <button class="submitButton py-1.5 px-6 rounded-lg font-bold text-slate-400 mb-4">Submit</button>
        </div>
        
    </form>
</div>
<!-- 
{#if $alertModal}
    <div class="messageModal p-4 absolute vw-40 top-vh-30 right-vw-30 rounded-md z-3">
    
        <p class="modalMessage text-black text-center pb-4">{$alertMessage}</p>
        <div class="container flex flex-col items-center">
            <button class="close" on:click={closeModal}>Close</button>
        </div>
    </div>
{/if} -->


<style>
    h1 {
        border-bottom: 1px solid rgb(221, 221, 221);
    }
    .submitButton {
        border: 2px solid rgb(132, 132, 160);
    }
    .submitButton:hover {
        background: rgb(199, 199, 241);
        border: 2px solid rgb(199, 199, 241);
    }
    /* .messageModal {
        background: rgb(199, 199, 241);
        color:rgb(132, 132, 160);
    }
    .modalMessage {
        border-bottom: 1px solid rgb(163, 163, 197);
    }
    .close {
        border: 2px solid rgb(132, 132, 160);
    }
    .close:hover {
        border: 2px solid white;
        color: white;
    } */
    /* .passwordLabel {
        font-size: .7rem;
        margin-top: -1rem;
    } */
    /* .errorMessageName {
        padding: .2rem .4rem;
        box-shadow: 1px 2px 5px 1px rgb(162, 162, 162);
        z-index: 999;
        position: absolute;
        font-size: .7rem;
        border-radius: 5px;
        font-weight: 700;
        margin-top: -.9rem;
        color: red;
    } */
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


        <!-- pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]),{8,12}" -->



        <!-- // input error handling messages
    let errorMessageName = ''
    let errorMessageLast = ''
    let errorMessageEmail = ''
    let firstName = ''
    let lastName = ''
    let email = ''
    let firstAndLastNamePattern = /[A-Za-z]+/
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    let phonePattern = /^\d+$/
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/

    // checks to make sure the input meets the requirements
    function validateAndAdd() {
        if (!firstAndLastNamePattern.test(lastName) && !firstAndLastNamePattern.test(lastName) && !emailPattern.test(email)) {
            errorMessageName = 'Your name should only have letters' 
            errorMessageLast = 'Your last name should only have letters' 
            errorMessageEmail = 'Please enter a valid email address'
        } else if  (!firstAndLastNamePattern.test(firstName)) {
            errorMessageLast = ''
            errorMessageEmail = ''
            errorMessageName = 'Your name should only have letters' 
        } else if (!firstAndLastNamePattern.test(lastName)) {
            errorMessageName = ''
            errorMessageEmail = ''
            errorMessageLast = 'Your last name should only have letters' 
        } else if (!emailPattern.test(email)) {
            errorMessageName = ''
            errorMessageLast = ''
            errorMessageEmail = 'Please enter a valid email address' 
        } else {
            person.firstName = firstName
            person.lastName = lastName
            person.email = email
            errorMessageName = ''
            errorMessageLast = ''
            addNewPerson()
        }
        
    } -->