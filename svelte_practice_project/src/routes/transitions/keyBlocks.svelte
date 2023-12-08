<script>
    import { onMount } from 'svelte'
	import { typewriter } from './transition.js'
	import { messages } from './randomMessages.js'

	let i = -1

	onMount(() => {
		const interval = setInterval(() => {
			i += 1
			i %= messages.length
		}, 2500)

		return () => {
			clearInterval(interval)
		}
	})
</script>


<div class="shadow-md bg-slate-200 text-black p-2 rounded-lg mt-4 h-28">

    <h1 class="KBTitle mb-4 text-btn-border">Key Blocks</h1>
    
    <h1>loading...</h1>

    {#key i}
        <p in:typewriter={{ speed: 10 }}>
            {messages[i] || ''}
        </p>
    {/key}
</div>


<style>
    .KBTitle {border-bottom: 1px solid rgb(193, 193, 193);}
</style>