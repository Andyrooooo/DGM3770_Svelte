<script>
    let word = ''
    let newWord = false
    let upperWord = ''

	function convertToUppercase() {
        word = word.toUpperCase()
        newWord = true
        upperWord = word
        word = ''

    }
</script>

<div class="taInputs">

        <label>Input word</label>
        <textarea bind:value={word} class="w-full bg-inherit p-2 border-2 border-btn-border text-btn-border rounded-lg outline-none my-2" placeholder="input your text to convert..."></textarea>
        <button on:click={convertToUppercase} class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg">Convert</button>
        
        <label class="outputLabel">Output Uppercase Word</label>
        {#if newWord}
            <div class="output text-black">{upperWord}</div>
        {/if}

</div>

<style>
    .taInputs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-bottom: 1rem;
    }
	textarea {
        flex-basis: 100%;
	}
    label {
        flex-basis: 100%;
    }
    .outputLabel{
        border-bottom: 1px solid rgb(104, 104, 104);
        padding-bottom: 5px;
        margin-top: 1rem;
    }
    .output {
        flex-basis: 100%;
    }

</style>