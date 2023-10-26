<script>
    import { fade } from 'svelte/transition'
    import { elasticOut } from 'svelte/easing'

    let visible = true

    function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t)

                return `
                transform: scale(${eased}) rotate(${eased * 360}deg);
                color: hsl(
                    ${Math.trunc(t * 360)},
                    ${Math.trunc(100, 1000 * (1 - t))}%,
                    ${Math.trunc(50, 500 * (1 - t))}%
                )`
            }
        }
    }
</script>


<div class="hover:shadow-lg bg-slate-100 text-black p-2 rounded-lg mt-4">

    <h1 class="transitionsTitle text-btn-border">Custom CSS transitions</h1>
    
    <label>
        <input type="checkbox" bind:checked={visible} />
        visible
    </label>
    
    {#if visible}
        <div class="py-16 my-8" in:spin={{ duration: 8000 }} out:fade>
            <p>transitions!</p>
        </div>
    {/if}
</div>


<style>
    .transitionsTitle {border-bottom: 1px solid rgb(193, 193, 193);}

	p {
        text-align: center;
        font-size: 2em;
	}
</style>