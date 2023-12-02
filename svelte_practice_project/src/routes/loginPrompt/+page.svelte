<script>
    import { signIn, signOut } from '@auth/sveltekit/client'
</script>

<div class="form my-0 mx-auto">
    <!-- these are custom events that check the login and when the signup form is clicked in the login form -->
    <h1 class="text-center mt-4 text-btn-border bg-white p-4 rounded-md">Welcome! Please login with GitHub account</h1>

    <div class="bg-white p-4 text-black rounded-md px-4 pt-4 pb-8 mt-6">
        <h1 class="pb-1.5 mb-4 text-center uppercase signInLabel">Sign In</h1>

        <div class="flex justify-center mb-4">
            <i class="fa-brands fa-github text-9xl githubLogo"></i>
        </div>

        <p class="text-center">Sign in with <button class="py-2 githubBTN font-bold" on:click={() => signIn('github')}> GitHub</button> </p>
    </div>
</div>

<style>
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
    .form {
		width: 400px;
	}
</style>