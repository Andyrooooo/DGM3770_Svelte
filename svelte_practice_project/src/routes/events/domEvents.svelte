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

<div class="flex justify-between flex-wrap">

    <div class="boxOne border-2 border-btn-border text-btn-border rounded-lg px-2 py-10" on:pointermove={handleMove}>
        <p>The pointer is at {m.x} x {m.y}</p>
    </div>
    
    <div class="boxTwo border-2 border-btn-border text-btn-border rounded-lg px-2 py-10" on:pointermove={handleMoveTwo}>
        <p>The pointer is at {n.x} x {n.y}</p>
    </div>
    
    <button class="boxThree border-2 border-btn-border text-btn-border rounded-lg px-2 py-10" on:click={disappear}>Don't Click Me</button>
    
    <button class="boxFour {isGreen} border-2 border-btn-border text-btn-border rounded-lg px-2 py-10" on:click={changeColor}>Don't click me either</button>
</div>


<style>
	div.boxOne {
		width: 24%;
	}
    div p {
        text-align: center;
    }
    div.boxTwo{
		width: 24%;
	}
    button.boxThree{
		width: 24%;
	}
    button.boxFour {
		width: 24%;
	}
    .green {
        background-color: green;
        color: white;
        border: none;
    }

</style>