<script lang=ts>
    import Writeable from './writeableStores.svelte'

    import Auto from './autoSubscriptions.svelte'

    import Read from './readableStores.svelte'

    import Derived from './derivedStores.svelte'

    import Custom from './customStores.svelte'

    import Bindings from './storeBindings.svelte'
</script>
    
<div class="mx-4 mt-4 mb-8 shadow-md rounded-md">
    <Writeable />

    <Auto />

    <Read />

    <Derived />

    <Custom />

    <Bindings />
</div>
