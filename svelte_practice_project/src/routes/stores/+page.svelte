<script lang=ts>
    import Writeable from './writeableStores.svelte'

    import Auto from './autoSubscriptions.svelte'

    import Read from './readableStores.svelte'

    import Derived from './derivedStores.svelte'

    import Custom from './customStores.svelte'

    import Bindings from './storeBindings.svelte'
</script>
    
<div class="m-4 shadow-md rounded-md bg-white p-4 text-black">
	<h1 class="text-2xl mb-4 text-btn-border">Stores</h1>

	<div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Stores: Writable Stores</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this example we use <a class="text-btn-border font-bold">Writable Stores</a> to add and remove coworkers from our list</p>
        
        <Writeable />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Stores: Auto-subscriptions</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In here we also use the previous example and store but add the unsubscribe and destroy using the <a class="text-btn-border font-bold">$</a> reserved character</p>
        
        <Auto />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Stores: Readable Stores</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this example, we use <a class="text-btn-border font-bold">readable stores</a> to update the time</p>
        
        <Read />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Stores: Derived Stores</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this example, we use <a class="text-btn-border font-bold">Derived stores</a> to display the time our page has been open</p>
        
        <Derived />
	</div>

    
    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Stores: Custom Stores</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this example, we can add and delete "users" from our user list using <a class="text-btn-border font-bold">Custom stores</a></p>
        
        <Custom />
	</div>

    <div class="bg-slate-200 p-4 rounded-md shadow-md mb-4">
		<h1 class="text-btn-border">Stores: Store Bindings</h1>
		<div class="titleBreak border-slate-400"></div>
		<p class="mb-4">In this example, we use <a class="text-btn-border font-bold">Store Bindings</a> to create a modal with custom text you input</p>
        
        <Bindings />
	</div>

</div>

<style>
	.titleBreak {border-bottom: 1px solid rgb(193, 193, 193);}
</style>