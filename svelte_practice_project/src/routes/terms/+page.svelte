<script>
    // import { goto } from '$app/navigation'
    export let data

    import { alertModal } from '../svelteTutorialUsers.js'
	import { onMount } from 'svelte'
    import { page } from '$app/stores'
	import LogoutModal from '../logoutModal/+page.svelte'
	import Header from '../header/+page.svelte'
	import LoginPrompt from '../loginPrompt/+page.svelte'

    let showLogin 
	onMount(() => {
		showLogin = true
	})
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

        {#if $page.data.session?.user}
            <h2 class="mx-4 mt-4 mb-2 text-center">Welcome to Svelte Terms!</h2>

            <div class="m-4 ring-btn-border ring-2 rounded-md px-4 pt-4">
                <p>Unsure about some of the concepts within the tutorial? No worries we have a list here of some of the different parts of Svelte and we'll help you get to a place that makes sense. Take a look below and see if any of these are what you need!</p>
                <div class="flex justify-center"><i class="fa-solid fa-chevron-down text-lg pb-2"></i></div>
            </div>

            <div class="mt-0 mb-4 flex flex-wrap justify-around">
                {#each data.summaries as { term, title }}
                    <!-- <li class="hover:text-btn-border mx-4 hover:border-l-4 hover:pl-2 mb-2 basis-5/12"> -->
                    <a href="/terms/{term}" class="mx-4 mb-4 basis-5/12 ring-btn-border ring-4 hover:bg-btn-border rounded-md p-2 text-center">
                        <i class="fa-solid fa-book mr-2"></i>
                        {title}
                    </a>
                {/each}
            </div>
        {/if}

    
    </div>
    
    {#if $page.data.session?.user}
        <div class="introductionFooter">
            <h1 class="footer text-center py-2 px-0 w-full text-slate-600">Andrew Kester</h1>
        </div>
    {/if}
</div>



<style>
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