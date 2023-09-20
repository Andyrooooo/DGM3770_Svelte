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

<div class="boxOne" on:pointermove={handleMove}>
	<p>The pointer is at {m.x} x {m.y}</p>
</div>

<div class="boxTwo" on:pointermove={handleMoveTwo}>
	<p>The pointer is at {n.x} x {n.y}</p>
</div>

<button class="boxThree" on:click={disappear}>Don't Click Me</button>

<button class="boxFour {isGreen}" on:click={changeColor}>Don't click me either</button>

<style>
	div.boxOne {
		position: fixed;
		left: .5%;
		top: 1%;
		width: 23.5%;
		height: 23.5%;
		padding: 1rem;
        background: rgb(71, 71, 71);
        border-radius: 10px;
	}
    div p {
        text-align: center;
    }
    div.boxTwo{
		position: fixed;
		left: 25.5%;
		top: 1%;
		width: 23.5%;
		height: 23.5%;
		padding: 1rem;
        background: rgb(71, 71, 71);
        border-radius: 10px;
	}
    button.boxThree{
		position: fixed;
		left: 50.5%;
		top: 1%;
		width: 23.5%;
		height: 23.5%;
		padding: 1rem;
        background: rgb(71, 71, 71);
        border-radius: 10px;
	}
    button.boxFour {
		position: fixed;
		left: 75.5%;
		top: 1%;
		width: 23.5%;
		height: 23.5%;
		padding: 1rem;
        border-radius: 10px;
        border: 1px solid black;
	}
    .green {
        background-color: green;
    }
</style>