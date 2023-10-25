<script>
    import { tweened, spring } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	})

    // global variable to store fetch values
    let joke = {
        type: "",
        setup: "",
        punchline: ""
    }

    let jokeQuestion = false
    let jokeAnswer = false
    let progressBar = false
    let message = ""

    // async function to grab a random joke and give us the progress of the fetch
    let grabJoke = async () => {
        message = "loading..."
        progress.set(1)
        progressBar = true
        jokeAnswer = false
        
        // using set timout to showcase the progress bar
        setTimeout(async () => {
            let response = await fetch('https://official-joke-api.appspot.com/random_joke')
            let data = await response.json()
            joke = data
            progress.set(0)
            jokeQuestion = true
            progressBar = false
        }, 1000)
    }
</script>


<div class="hover:shadow-lg bg-slate-100 text-black p-2 rounded-lg">

    <h1 class="tweenTitle">Tweens</h1>
    <p>In this example we use <a class="text-btn-border">Tween</a> to show us the progress bar when the API is loading for our random joke.</p>

    <div class="flex justify-between mt-2">
        {#if jokeAnswer}
        <button class="jokeBTN py-2 px-4 rounded-lg" on:click={grabJoke}>Grab Another Joke</button>
        {/if}

        {#if !jokeAnswer}
        <button class="jokeBTN py-2 px-4 rounded-lg" on:click={grabJoke}>Grab a Joke</button>
        {/if}

        <button class="jokeAnswer py-2 px-4 rounded-lg" on:click={() => jokeAnswer = true}>Get Answer</button>
    </div>

    {#if progressBar}
    <p class="text-center">{message}</p>
    <progress value={$progress} class="mb-4 mt-6"/>
    {/if}

    <p class="mt-2">{joke.type}</p>
    {#if jokeQuestion}
    <div class="p-2 mt-2 mb-2 bg-white jokeCTR">
        <p>Q: {joke.setup}</p>
    </div>
    {/if}

    {#if jokeAnswer}
    <div class="p-2 mt-2 mb-2 bg-white jokeCTR">
        <p>A: {joke.punchline}</p>
    </div>
    {/if}
</div>


<style>
.tweenTitle {border-bottom: 1px solid rgb(193, 193, 193);}
.jokeCTR {border: 1px solid rgb(104, 104, 226);}

progress {
    display: block;
    width: 100%;
}

.jokeBTN {
    border: 2px solid rgb(104, 104, 226);
    color: rgb(104, 104, 226);
}
.jokeBTN:hover {
    background: rgb(104, 104, 226);
    color: white;
}
.jokeAnswer {
    border: 2px solid red;
    color: red;
}
.jokeAnswer:hover {
    background: red;
    color: white;
}
</style>