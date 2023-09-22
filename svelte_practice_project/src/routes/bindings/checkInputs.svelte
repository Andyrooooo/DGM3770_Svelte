<script>
    let yes = false

    let message = ''

    function giveMessage() {
        message = message === '' ? 'Thanks for subscribing! your soul will be gone shortly.' : ''
    }
</script>

<div class="chckInputs">
    <h1>Checkbox Inputs</h1>
    
    <label>
        <input type="checkbox" bind:checked={yes} />
        Yes! Send me regular email spam
    </label>
    
    {#if yes}
        <p>
            Thank you. We will bombard your inbox and sell
            your personal details.
        </p>
    {:else}
        <p class="warning">
            You must opt in to continue. If you're not
            paying, you're the product.
        </p>
    {/if}
    
    <button disabled={!yes} on:click={giveMessage}>Subscribe</button>

    <p class="message">{message}</p>
</div>

<style>
    .chckInputs {
        background: rgb(207, 207, 207);
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
    button {
        background: rgb(93, 93, 93);
        padding: .5rem 1rem;
        border-radius: 2px;
        margin: 1rem 0;
    }
    .warning {
        color: red;
    }
    p, button, label {
        flex-basis: 100%;
    }
    label {
        color: black;
    }
    .message {
        flex-basis: 100%;
        background-color: black;
        text-align: center;
        padding: 5px;
        border-radius: 40px;
    }
    .message:empty {
        display: none;
    }
</style>