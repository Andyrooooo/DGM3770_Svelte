<script>
    import DomEBTN from './domEBTN.svelte'

    let message = 'nothing'

    function handleRed() {
        message = "red";
    }
    function handleBlue(event) {
        message = event.detail.text
    }
    function handleYellow() {
        message = "yellow";
    }
    function handleGreen() {
        message = "green";
    }

</script>

<div class="domE">
    <h2>DOM Event Forwarding</h2>
    <p class="{message}">You clicked on {message}</p>
    <DomEBTN 
    on:click={handleRed} 
    on:blueColor={handleBlue}
    on:yellowColor={handleYellow}
    on:greenColor={handleGreen}/>
</div>


<style>
    .domE {
        background: rgb(58, 58, 58);
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .domE h2 {
        flex-basis: 100%;
    }
    p {
        flex-basis: 100%;
        text-align: center;
        background-color: white;
        color: black;
        margin-top: 1rem;
        padding: 1rem;
        font-size: 1.4rem;
        font-weight: bold;
    }
    .red {
        color: red;
    }
    .blue {
        color: blue;
    }
    .yellow {
        color: rgb(188, 188, 0);
    }
    .green {
        color: rgb(0, 167, 0);
    }
</style>