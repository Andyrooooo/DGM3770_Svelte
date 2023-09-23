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
    <h1>Textarea Inputs</h1>

        <label>Input word</label>
        <textarea bind:value={word}></textarea>
        <button on:click={convertToUppercase}>Convert</button>
        
        <label class="outputLabel">Output Uppercase Word</label>
        {#if newWord}
            <div class="output">{upperWord}</div>
        {/if}

</div>

<style>
    .taInputs {
        background: rgb(0, 0, 0);
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-bottom: 1rem;
    }
    h1 {
        flex-basis: 100%;
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }
	textarea {
		resize: none;
        color: black;
        flex-basis: 100%;
        margin-bottom: 1rem;
        padding: 5px;
        margin-top: .5rem;
        border-radius: 5px;
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
        color: white;
        flex-basis: 100%;
    }
    button {
        width: 150px;
        background: white;
        color: black;
        padding: .5rem;
    }
</style>