<script>
    import TInputs from './textInputs.svelte'

    import NInputs from './numericInputs.svelte'

    import CInputs from './checkInputs.svelte'

    import SBindings from './selectBindings.svelte'

    import GrpInputs from './groupInputs.svelte'

    import SelectMultiple from './selectMultiple.svelte'

    import TAInputs from './textareaInputs.svelte'
</script>

<div class="m-4 shadow-md rounded-md bg-white p-4 text-black">
	<h1 class="text-2xl mb-4 text-btn-border">Bindings</h1>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Bindings: Text Inputs</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">Using the <a class="text-btn-border font-bold">bind:value</a> directive on four different inputs to get values in the HTML</p>
		
        <TInputs />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Bindings: Numeric Inputs</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">Utilizing the <a class="text-btn-border font-bold">bind:</a> directive on other types of inputs</p>
		
        <NInputs />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Bindings: Checkbox Inputs</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">Using the <a class="text-btn-border font-bold">directive</a> with a checkbox and using <a class="text-btn-border font-bold">bind:checked</a> rather than <a class="text-btn-border font-bold">input.value</a></p>
		
        <CInputs />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Bindings: Select Bindings</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">Using bindings to bind a select element value to a variable</p>
		
        <SBindings />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Bindings: Group Inputs</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">Using the <a class="text-btn-border font-bold">bind:group</a> directive to form an array of selected values</p>
		
        <GrpInputs />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Bindings: Select Multiple</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">Using the <a class="text-btn-border font-bold">multiple</a> attribute to create an array of values</p>
		
        <SelectMultiple />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Bindings: Textarea Inputs</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">Using <a class="text-btn-border font-bold">bind:value</a> on a textarea element to be displayed as uppercase</p>
		
        <TAInputs />
	</div>
    

    

   

    

   

    

    
</div>

<style>
    .titleBreak {border-bottom: 1px solid rgb(193, 193, 193);}
</style>