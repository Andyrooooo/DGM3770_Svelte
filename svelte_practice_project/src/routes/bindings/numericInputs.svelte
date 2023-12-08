<script>
    let a = 0
	let b = 0
    let c = 0
</script>

<div class="nInputs">
    
    <label>
        <label>Rate Overall Satisfaction</label>
        <input class="number" type="number" bind:value={a} min="0" max="10" />
        <input type="range" bind:value={a} min="0" max="10" />
    </label>
    
    <label>
        <label>Customer Service</label>
        <input class="number" type="number" bind:value={b} min="0" max="10" />
        <input type="range" bind:value={b} min="0" max="10" />
    </label>

    <label>
        <label>Product</label>
        <input class="number" type="number" bind:value={c} min="0" max="10" />
        <input type="range" bind:value={c} min="0" max="10" />
    </label>
    
    <div class=surveyOutput>
        <h3 class="text-btn-border mr-2">Overall Satisfaction: </h3>
        <p class="survey">{a <= 5 ? "Unsatisfied" : (a > 5 && a <= 8 ? "Moderately Satisfied" : "Satisfied")}</p>
    </div>
    
    <div class=surveyOutput>
        <h3 class="text-btn-border mr-2">Customer Service: </h3>
        <p class="survey">{b <= 5 ? "Unsatisfied" : (b > 5 && b <= 8 ? "Moderately Satisfied" : "Satisfied")}</p>
    </div>

    <div class=surveyOutput>
        <h3 class="text-btn-border mr-2">Product: </h3>
        <p class="survey">{c <= 5 ? "Unsatisfied" : (c > 5 && c <= 8 ? "Moderately Satisfied" : "Satisfied")}</p>
    </div>

</div>

<style>
    .nInputs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    label {
        flex-basis: 100%;
        color: black;
    }
    input {
        border: 1px solid black;
        color: black;
        box-sizing: border-box;
        padding: 5px;
        border-radius: 5px;
        background-color: rgb(240, 240, 240);
        width: 40%;
        margin: 0 auto 1rem auto;
    }
    input.number {
        width: 20%;
    }
    p {
        color: black;
    }
    .survey {
        color: rgb(62, 62, 62);
    }
    .surveyOutput {
        flex-basis: 100%;
        margin: 0 auto;
        display: flex;
    }
</style>