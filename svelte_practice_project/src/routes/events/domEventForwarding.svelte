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
    <p class="{message} basis-full border-2 border-btn-border text-center rounded-md py-8 font-bold text-2xl">You clicked on {message}</p>
    <DomEBTN 
    on:click={handleRed} 
    on:blueColor={handleBlue}
    on:yellowColor={handleYellow}
    on:greenColor={handleGreen}/>
</div>


<style>
    .domE {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-bottom: 2rem;
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