<script>
    import { slide } from 'svelte/transition'
    let showMenu = false

    function toggleMenu() {
        showMenu = !showMenu
    }

    // array of menu items for our list
    let menuItems = ['Introduction', 'Reactivity', 'Props', 'Logic', 'Events', 'Bindings', 'Lifecycle', 'Stores']
</script>


<div class="shadow-md bg-slate-200 text-black p-2 rounded-lg mt-4">

    <h1 class="transitionsTitle text-btn-border">Transition 1: Sliding Dropdown menu</h1>

    <p>For this component we have a mockup dropdown menu of the Svelte menu, the dropdown does not actually have any links or perform anything within the list but showcases the <a class="text-btn-border">Slide</a> transition effect. We use something similar to the <a class="text-btn-border">Global Transitions</a> section but without there being a global transition</p>
    
    <button on:click={toggleMenu} class:menuOpen={showMenu} class="w-full md:w-7/12 md:mx-auto bg-white p-4 mt-4 dropdownTop flex justify-between">
        <label for="drop down menu">Part 1: <a class="text-btn-border">Basic Svelte</a></label>
        <i class="fa-solid fa-chevron-down {showMenu ? 'rotated' : 'rotateAgain'} pt-1"></i>
    </button>
    
    {#if showMenu}
        <ul class:drawerOpen={showMenu} class="w-full md:w-7/12 md:mx-auto bg-gray-100 px-4 py-2 rounded-bl-md rounded-br-md dropdownBot">
            {#each menuItems as item}
                <li transition:slide>{item}</li>
            {/each}
        </ul>
    {/if}
</div>


<style>
    .transitionsTitle {border-bottom: 1px solid rgb(193, 193, 193);}
    .dropdownTop {
        border: 1px solid rgb(104, 104, 226);
        border-radius: 0.375rem;
    }
    /* .dropdownTop:hover {
        box-shadow: 
    } */
    .dropdownBot {
        border-bottom: 1px solid rgb(104, 104, 226);
        border-left: 1px solid rgb(104, 104, 226);
        border-right: 1px solid rgb(104, 104, 226);
    }
    .menuOpen {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow: 0 1px 2px 0 rgb(104, 104, 226);
    }
    .drawerOpen {
        box-shadow: 0 1px 2px 0 rgb(104, 104, 226);
    }
    li:hover {
        text-decoration: underline;
        text-decoration-color:rgb(104, 104, 226);
    }
    .rotated {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }
    .rotateAgain {
        transform: rotate(360deg);
        transition: transform 0.3s ease;
    }
</style>