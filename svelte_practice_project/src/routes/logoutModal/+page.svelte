<script>
    import { alertModal } from '../svelteTutorialUsers.js'
	import { alertMessage } from '../svelteTutorialUsers.js'
	import { alertSecondMessage } from '../svelteTutorialUsers.js'
    import { signOut } from '@auth/sveltekit/client'

    // this function will close the modal that gives messages to the user
    function closeModal() {
        alertModal.set(false)
    }
</script>



<div class="messageModal p-4 w-vw-40 absolute top-vh-30 right-svw-30 rounded-md ring-2 ring-btn-border shadow-md">
    <p class="text-center bg-btn-border rounded-3xl py-2 font-bold">{$alertMessage}</p>
    <p class="modalMessage text-slate-600 text-center pt-4 pb-6">{$alertSecondMessage}</p>
    <div class="w-full flex justify-center">
        <button class="close mt-4 rounded-lg font-bold py-1.5 px-6" on:click={closeModal}>Cancel</button>
        <button class="signout mt-4 rounded-lg font-bold py-1.5 px-6 ml-4" on:click={() => signOut()}>Sign Out</button>
    </div>
</div>



<style>
    .messageModal {
        background: rgb(215, 215, 241);
		z-index: 3;
    }
    .modalMessage {
        border-bottom: 1px solid rgb(163, 163, 197);
    }
	.close {
		border: 2px solid rgb(71 85 105);
		color: rgb(71 85 105);
	}
    .close:hover {
        border: 2px solid rgb(104, 104, 226);
		color: rgb(104, 104, 226);
    }
    .signout {
        border: 2px solid rgb(126, 8, 0);
		color: rgb(126, 8, 0);
    }
    .signout:hover {
        border: 2px solid rgb(255, 0, 0);
        color: rgb(255, 0, 0);
    }
</style>
