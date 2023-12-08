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
    
    <h2>Security Questions</h2>

    <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={selected} class="w-full bg-inherit p-2 border-2 border-btn-border text-btn-border rounded-lg outline-none my-2">
            <option></option>
            {#each questions as question}
                <option value={question}>{question.text}</option>
            {/each}
        </select>

        <input bind:value={answer} class="w-full bg-inherit p-2 border-2 border-btn-border text-btn-border rounded-lg outline-none mb-2" placeholder="Input your answer..."/>

        <button disabled={!answer} type="submit" class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mb-4 mt-2">
            Submit
        </button>

    </form>
    <p class="reminder bg-white shadow-md">Remember this little questionnaire uses the cool way to use <a class="reference">e.preventDefault</a> with <a class="reference">on:submit|preventDefault=(handlerfunction)</a> for reference</p>

</div>

<style>
    .slctBindings {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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
    }
     button {
        margin-right: 37.5%;
        margin-left: 37.5%;
        width: 25%;
    }
    .reminder {
        flex-basis: 100%;
        padding: 10px;
        border-radius: 5px;
    }
    .reference {
        background: rgb(223, 223, 223);
        border-radius: 3px;
        padding: 0 3px;
        color: rgb(78, 78, 78);
    }
    /*
    p, button, label {
        flex-basis: 100%;
    }
    label {
        color: black;
    }*/
</style>