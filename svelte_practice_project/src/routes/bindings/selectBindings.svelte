<script>
    let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What was your first pet's name?`
		},
        {
			id: 4,
			text: `What city was your first house?`
		},
        {
			id: 5,
			text: `What was make of your first vehicle?`
		}
	];

	let selected

	let answer = ''

	function handleSubmit() {
		alert(
			`Answered question ${selected.id} (${selected.text}) with "${answer}"`
		)
        selected = ''
        answer = ''
	}
</script>

<div class="slctBindings">
    <h1>Select Bindings</h1>
    
    <h2>Security Questions</h2>

    <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={selected} >
            <option></option>
            {#each questions as question}
                <option value={question}>{question.text}</option>
            {/each}
        </select>

        <input bind:value={answer} />

        <button disabled={!answer} type="submit">
            Submit
        </button>
    </form>

</div>

<style>
    .slctBindings {
        background: rgb(159, 159, 159);
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    h1 {
        color: black;
        flex-basis: 100%;
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    h2 {
        color: black;
        flex-basis: 100%;
    }
    form {
        flex-basis: 100%;
    }
    input, select {
        box-sizing: border-box;
        margin: .5rem 0;
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        color: black;
    }
     button {
        background: rgb(93, 146, 76);
        padding: .5rem 1rem;
        border-radius: 2px;
        margin: 1rem 37.5%;
        width: 25%;
    }
    /*
    p, button, label {
        flex-basis: 100%;
    }
    label {
        color: black;
    }*/
</style>