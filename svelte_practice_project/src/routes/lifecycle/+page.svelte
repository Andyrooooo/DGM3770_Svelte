<script lang=ts>
import OnMount from './onMount.svelte'

import BeforeAfter from './beforeAfterUpdate.svelte'

import Tick from './tick.svelte'
</script>

<div class="m-4 shadow-md rounded-md bg-white p-4 text-black">
	<h1 class="text-2xl mb-4 text-btn-border">Life Cycle</h1>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Lifecycle: onMount</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">I'm using the <a class="text-btn-border font-bold">onMount</a> to display this text</p>
		
        <OnMount />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Lifecycle: beforeUpdate and afterUpdate</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In here we use <a class="text-btn-border font-bold">beforeUpdate</a> and <a class="text-btn-border font-bold">after Update</a> to show us how many todos we have before and after we add a new todo</p>
		
        <BeforeAfter />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Lifecycle: Tick</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this example we use the <a class="text-btn-border font-bold">tick</a> function to help us grab a new Starwars vehicle name at random</p>
        
        <Tick />
	</div>



</div>

<style>
    	.titleBreak {border-bottom: 1px solid rgb(193, 193, 193);}
</style>