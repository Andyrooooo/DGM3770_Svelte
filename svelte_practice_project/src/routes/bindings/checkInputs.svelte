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
    
    <button disabled={!yes} on:click={giveMessage} class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mt-4">Subscribe</button>

    <p class="message bg-red-500 text-white mt-4 rounded-md p-4 text-center">{message}</p>
</div>

<style>
    .chckInputs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .warning {
        color: red;
    }
    p, label {
        flex-basis: 100%;
    }
    label {
        color: black;
    }
    .message {
        flex-basis: 100%;
    }
    .message:empty {
        display: none;
    }
</style>