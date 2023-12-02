<script>
    import { page } from '$app/stores'
    import { alertModal } from '../svelteTutorialUsers.js'
	import { alertMessage } from '../svelteTutorialUsers.js'
	import { alertSecondMessage } from '../svelteTutorialUsers.js'

    let showMenu = false
    let authMenu = false

    function toggleMenu() {
        showMenu = !showMenu
    }

    // this function will toggle the avatar menu
	function toggleAuthMenu() {
		authMenu = !authMenu
	}

    function signOutOfApp() {
		alertMessage.set('Logging Out')
		alertSecondMessage.set('Are you sure you would like to log out?')
		alertModal.set(true)
	}
</script>

<div class="introductionHeader p-4 inline w-full flex">
    <h1 class="float-left text-slate-600 mt-2 basis-4/12">DGM 3770 - Svelte</h1>

    <!------------------------ navigation button to show routing ------------------------>
    <div class="basis-4/12">
        <div class="flex justify-center">
            <button on:click={toggleMenu} class:menuOpen={showMenu} class="navBTN p-2 dropdownTop flex justify-between relative z-20">
                <label for="drop down menu"><a class="text-btn-border">Navigation</a></label>
                <i class="fa-solid fa-chevron-down {showMenu ? 'rotated mt-1' : 'rotateAgain'} ml-2 mt-1 chevronIcon"></i>
            </button>

            {#if showMenu}
                <nav class:drawerOpen={showMenu} class="px-9 py-2 rounded-bl-md rounded-br-md dropdownBot absolute z-10 top-14">
                    <a class="block text-slate-600 hover:text-btn-border" href="/">Home</a>
                    <a class="block text-slate-600 hover:text-btn-border" href="/terms">Terms</a>
                </nav>
            {/if}
        </div>
    </div>

    <!---------------------- If the user is signed in then it will show their avatar picture ---------------------------->
    {#if $page.data.session?.user}
        <div class="basis-4/12">
            <button on:click={toggleAuthMenu} class="float-right rounded-full w-10 h-10 hover:ring-4 hover:ring-btn-border avatarMenuBTN">
                <img src={$page.data.session.user.image} class="rounded-full" alt="user avatar"/>
            </button>
        </div>
    {/if}

    <!--------------------------------------------- OAUTH MENU ---------------------------------------------------------->
    {#if authMenu}
        <div class="absolute ring-1 ring-btn-border w-52 right-4 top-16 px-4 py-2 rounded-md avatarMenu">
            <p class="text-black w-full">{$page.data.session.user.name}</p>
            <p class="text-btn-border w-full avatarEmail pb-2">{$page.data.session.user.email}</p>
            <div class="flex justify-center">
                <button on:click={signOutOfApp} class="text-slate-600 font-bold logout pt-1">Sign out</button>
            </div>
        </div>
    {/if}
</div>


<style>
    .avatarEmail {
		border-bottom: 1px solid rgb(179, 179, 179);
	}
	.avatarMenu {
		background: rgb(215, 215, 241);
	}
	.avatarMenuBTN {
		border: none;
	}
	.avatarMenuBTN:hover {
		border: none;
	}
    .introductionHeader {
		background: rgb(199, 199, 241);
	}
    .logout {
		border: none; 
		color:rgb(93, 93, 93);
	}
	.logout:hover {
		color: rgb(53, 53, 176);
		border: none; 
	}
    .dropdownBot {
        border-bottom: 1px solid rgb(104, 104, 226);
        border-left: 1px solid rgb(104, 104, 226);
        border-right: 1px solid rgb(104, 104, 226);
		background: rgb(215, 215, 241);
    }
    .menuOpen {
        box-shadow: 0 1px 2px 0 rgb(104, 104, 226);
    }
    .drawerOpen {
        box-shadow: 0 1px 2px 0 rgb(104, 104, 226);
    }
	.rotated {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }
    .rotateAgain {
        transform: rotate(360deg);
        transition: transform 0.3s ease;
    }
	.dropdownTop {
        border: 1px solid rgb(104, 104, 226);
        border-radius: 0.375rem;
    }
	.dropdownTop:hover {
		border: none;
		border: 1px solid rgb(104, 104, 226);
	}
	.chevronIcon {
		color: rgb(53, 53, 176);
	}
</style>