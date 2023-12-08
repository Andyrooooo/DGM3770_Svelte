<script>
    let yes = false

    let message = ''

    function giveMessage() {
        message = message === '' ? 'Thanks for subscribing! your soul will be gone shortly.' : ''
    }
</script>

<div class="chckInputs">
    
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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
        color: white;
    }
    .message:empty {
        display: none;
    }
</style>