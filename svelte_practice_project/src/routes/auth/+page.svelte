<!-- <script>
    import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'
</script>

{#if $page.data.session?.user}
    <p>Signed in as {$page.data.session.user.email}</p>
    <button on:click={signOut}>Sign out</button>
{:else}
    <p class="py-2 w-full noSignInBanner pl-4 shadow-md">Not signed in.</p>
    <div class="flex justify-center">
        <button class="signInBTN my-10 py-2 px-6 rounded-md" on:click={() => signIn('github')}>Sign in</button>
    </div>
{/if} -->
<h1>Hello</h1>