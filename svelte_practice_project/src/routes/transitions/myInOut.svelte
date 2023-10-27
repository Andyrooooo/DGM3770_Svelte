<script>
    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition'

    let images = [
        {
            id: "",
            largeImageURL: ""
        }
    ]

    let slideClicked = false
    function openCloseSlide() {
        slideClicked = !slideClicked
    }

    // array of text to change with the images
    let texts = [
        "Particles and Waves", 
        "Study Art",
        "Tree",
        "Forest",
        "Computer Art",
        "Computer Graduate",
        "Snail",
        "Planets and Stars",
        "Astronaut" ,
        "Robot",
    ]

    // fetches the images from the pixabay API
    async function getImages() {
        const res = await fetch('https://pixabay.com/api/?key=27451059-3296f44aa17ab4f2b7ae99b02&category=science&min_width="600"&min_height="300"&per_page=10')
        let data = await res.json()
        images = data.hits
        console.log(images)
    }
    onMount(getImages)

    let totalItems = 10 
    let itemsPerPage = 1 
    let currentPage = 1 
    
    // gets our total pages which will be one image per page
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    // allows us to go to the next image
    function nextPage() {
        if (currentPage < totalPages) {
        currentPage += 1
        }
    }

    // allows us to go to the next image
    function prevPage() {
        if (currentPage > 1) {
        currentPage -= 1
        }
    }

</script>


<div class="hover:shadow-lg bg-slate-200 text-black p-2 rounded-lg mt-4 container">

    <h1 class="transitionsTitle text-btn-border">Transition 2: In and Out</h1>

    <p>For this component we use the <a class="text-btn-border">fly</a> transition effect. The fly transition allows us to get a great effect like the carousel below. Wait you can't see it? That's because it's not there yet! Click the button below to open the carousel and see the images fly in!</p>

    <div class="flex justify-center my-2">
        <button 
            class="px-4 py-2 text-btn-border rounded-lg opClBTN"
            on:click={openCloseSlide}>
            <!-- Helps us change the text in the button -->
            {#if slideClicked}
                Close
            {:else}
                Open
            {/if}
        </button>
    </div>

    {#if slideClicked}
        <div class="bg-slate-300 p-4 rounded-md max-w-sm mx-auto mt-4" transition:fly="{{ x: 400, duration: 750}}">
            <!-- A forEach that splits up the images, starts at 0 and ends at 1 -->
            {#each images.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as image}

                <div class="image-container">
                    <img
                        src="{image.largeImageURL}"
                        alt="Random art from pixabay"
                        class="max-h-52 mx-auto"
                    />
                </div>

                <div class="border-slate-400 border-t-2 mt-3 pt-2"></div>
            {/each} 
            <!-- We do the same here with slice and same variables but changes the text -->
            {#each texts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as text}
                <p class="text-center text-btn-border" transition:fly="{{ x: 400, duration: 1000}}">{text}</p>
            {/each}
        </div>
    {/if}


    {#if slideClicked}
        <div class="flex justify-center m-2" transition:fly="{{ x: 400, duration: 1250}}">
            <button 
                on:click={prevPage}
                class="fa-solid fa-chevron-left text-btn-border text-xl bg-slate-300 rounded-3xl py-1 px-3 mr-4 arrowBTN">
            </button>

                <p class="text-md pt-2">
                    <a class="text-btn-border">{currentPage}</a> 
                    of 
                    <a>{totalPages}</a>
                </p>
                
            <button 
                on:click={nextPage}
                class="fa-solid fa-chevron-right text-btn-border text-xl bg-slate-300 rounded-3xl py-1 px-3 ml-4 arrowBTN">
            </button>
        </div>
    {/if}
    
</div>


<style>
    .transitionsTitle {border-bottom: 1px solid rgb(193, 193, 193);}
    .arrowBTN:hover {
        box-shadow: 0 1px 2px 0 rgb(104, 104, 226);
    }
    .opClBTN {
        border: 2px solid rgb(104, 104, 226);
    }
    .opClBTN:hover {
        background:rgb(104, 104, 226);
        color: white;
    }
    .container {
        height: 33rem;
    }
</style>