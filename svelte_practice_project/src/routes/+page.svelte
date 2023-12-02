<script>
	import Introduction from './introduction/+page.svelte'
	import Reactivity from './reactivity/+page.svelte'
	import Props from './props/+page.svelte'
	import Logic from './logic/+page.svelte'	
	import Events from './events/+page.svelte'
	import Bindings from './bindings/+page.svelte'
	import LifeCycle from './lifecycle/+page.svelte'
	import Stores from './stores/+page.svelte'
	import Motion from './motion/+page.svelte'
	import Transitions from './transitions/+page.svelte'
	import Animations from './animations/+page.svelte'
	import { alertModal } from './svelteTutorialUsers.js'
	import { onMount } from 'svelte'
    import { page } from '$app/stores'
	import LogoutModal from './logoutModal/+page.svelte'
	import Header from './header/+page.svelte'
	import LoginPrompt from './loginPrompt/+page.svelte'

	let showLogin 
	onMount(() => {
		showLogin = true
	})

	let showIntroduction = false
	let showReactivity = false
	let showProps = false
	let showLogic = false
	let showEvents = false
	let showBindings = false
	// let showSignup = false
	let showLifeCycle = false
	let showStores = false
	let showMotion = false
	let showTransitions = false
	let showAnimations = false

</script>



<div class:loginModalBackground={showLogin}>

		<div class="introductionPage flex flex-col">

			<!-- if the user is signed int then the header will show -->
			{#if $page.data.session?.user}
				<Header />
			{/if}

			<!-- if the user is not signed in then the login form will show -->
			{#if !$page.data.session?.user}
				<div class:loginModal={showLogin}>
					<LoginPrompt />
				</div>
			{/if}

			<!-- alert modal will popup when signout has been clicked -->
			{#if $alertModal}
				<LogoutModal />
			{/if}

			<!-- if the user is signed in then the introduction page will show this modal and custom message and other buttons-->
			{#if $page.data.session?.user}

				<div class="flex flex-wrap justify-around m-4 gap-y-0 gap-x-3.5" class:moduleActive={showIntroduction || showReactivity || showProps || showLogic || showEvents || showBindings || showLifeCycle || showStores || showMotion || showTransitions || showAnimations}>
					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showIntroduction = !showIntroduction} class:active={showIntroduction}>Introduction</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showReactivity = !showReactivity} class:active={showReactivity}>Reactivity</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showProps = !showProps} class:active={showProps}>Props</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showLogic = !showLogic} class:active={showLogic}>Logic</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showEvents = !showEvents} class:active={showEvents}>Events</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showBindings = !showBindings} class:active={showBindings}>Bindings</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showLifeCycle = !showLifeCycle} class:active={showLifeCycle}>Life Cycle</button>
					
					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showStores = !showStores} class:active={showStores}>Stores</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showMotion = !showMotion} class:active={showMotion}>Motion</button>
					
					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 hover:text-white" on:click={() => showTransitions = !showTransitions} class:active={showTransitions}>Transitions</button>

					<button class="py-1 px-2 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md font-bold my-2 mx-0 text-white hover:text-white" on:click={() => showAnimations = !showAnimations} class:active={showAnimations}>Animations</button>
				</div>
			{/if}
		
			<div>
				{#if showIntroduction}<Introduction />{/if}
				{#if showReactivity}<Reactivity />{/if}
				{#if showProps}<Props />{/if}
				{#if showLogic}<Logic />{/if}
				{#if showEvents}<Events />{/if}
				{#if showBindings}<Bindings />{/if}
				{#if showLifeCycle}<LifeCycle />{/if}
				{#if showStores}<Stores />{/if}
				{#if showMotion}<Motion />{/if}
				{#if showTransitions}<Transitions />{/if}
				{#if showAnimations}<Animations />{/if}
			</div>
		
		</div>
		
		{#if $page.data.session?.user}
			<div class="introductionFooter">
				<h1 class="footer text-center py-2 px-0 w-full text-slate-600">Andrew Kester</h1>
			</div>
		{/if}
</div>



<style>
	button {
		border: 2px solid rgb(176, 176, 221);
		color: rgb(176, 176, 221);
	}
	button:hover {
		border: 2px solid rgb(255, 255, 255);
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
	.introductionPage {
		min-height: 94.6vh;
	}
</style>