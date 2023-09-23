<script>
	let m = { x: 0, y: 0 }

    let n = { x: 0, y: 0 }

	function handleMove(event) {
		m.x = Math.trunc(event.clientX)
		m.y = Math.trunc(event.clientY)
	}

    function handleMoveTwo(event) {
		n.x = Math.trunc(event.clientX)
		n.y = Math.trunc(event.clientY)
	}

    function disappear(event) {
        event.target.style.display = "none";
    }

    let isGreen = ''

    function changeColor() {
        if (isGreen === '') {
            isGreen = 'green'
        } else {
            isGreen = ''
        }
    }
</script>

<div class="dom">
    <h2>DOM Events</h2>

    <div class="boxOne" on:pointermove={handleMove}>
        <p>The pointer is at {m.x} x {m.y}</p>
    </div>
    
    <div class="boxTwo" on:pointermove={handleMoveTwo}>
        <p>The pointer is at {n.x} x {n.y}</p>
    </div>
    
    <button class="boxThree" on:click={disappear}>Don't Click Me</button>
    
    <button class="boxFour {isGreen}" on:click={changeColor}>Don't click me either</button>
</div>


<style>
    .dom {
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        padding: 1rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
	div.boxOne {
		width: 24%;
		padding: 1rem;
        background: rgb(71, 71, 71);
        border-radius: 10px;
	}
    div p {
        text-align: center;
    }
    div.boxTwo{
		width: 24%;
		padding: 1rem;
        background: rgb(71, 71, 71);
        border-radius: 10px;
	}
    button.boxThree{
		width: 24%;
		padding: 1rem;
        background: rgb(71, 71, 71);
        border-radius: 10px;
	}
    button.boxFour {
		width: 24%;
		padding: 1rem;
        border-radius: 10px;
        color: black;
        border: 1px solid black;
	}
    .green {
        background-color: green;
    }
    .dom h2 {
        color: black;
        flex-basis: 100%;
    }
</style>