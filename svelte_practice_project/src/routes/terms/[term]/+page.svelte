<script>
export let data

import { alertModal } from '../../svelteTutorialUsers.js'
import { onMount } from 'svelte'
import { page } from '$app/stores'
import LogoutModal from '../../logoutModal/+page.svelte'
import Header from '../../header/+page.svelte'
import LoginPrompt from '../../loginPrompt/+page.svelte'

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
        <h1 class="m-4 text-btn-border text-xl">{data.term.title}</h1>
        <div class="mx-4 mb-4 mt-0">{@html data.term.content}</div>
        <p class="mx-4 mb-4">Examples:</p>
        <img class="ring-btn-border ring-2 mx-4 mb-3 rounded-md w-11/12 mx-auto" src={data.term.imageOne} alt="code demonstration 1"/>
        <img class="ring-btn-border ring-2 mx-4 mb-3 rounded-md w-11/12 mx-auto" src={data.term.imageTwo} alt="code demonstration 2"/>
        {#if data.term.imageThree}
            <img class="ring-btn-border ring-2 mx-4 mb-3 rounded-md w-11/12 mx-auto" src={data.term.imageThree} alt="code demonstration 3"/>
        {/if}
        {#if data.term.imageFour}
            <img class="ring-btn-border ring-2 mx-4 mb-3 rounded-md w-11/12 mx-auto" src={data.term.imageFour} alt="code demonstration 4"/>
        {/if}
        {#if data.term.imageFive}
            <img class="ring-btn-border ring-2 mx-4 mb-3 rounded-md w-11/12 mx-auto" src={data.term.imageFive} alt="code demonstration 4"/>
        {/if}
        {#if data.term.imageSix}
            <img class="ring-btn-border ring-2 mx-4 mb-3 rounded-md w-11/12 mx-auto" src={data.term.imageSix} alt="code demonstration 4"/>
        {/if}
        <p class="mx-4 mb-6 mt-1">If you would like to try it out here is the Svelte tutorial: <a class="text-btn-border" target="_blank" href={data.term.tutorialLink}>{data.term.title}</a></p>
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


