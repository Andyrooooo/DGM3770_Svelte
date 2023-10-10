<script lang=ts>
    import Writeable from './writeableStores.svelte'

    import Auto from './autoSubscriptions.svelte'

    import Read from './readableStores.svelte'

    import Derived from './derivedStores.svelte'

    import Custom from './customStores.svelte'

    import Bindings from './storeBindings.svelte'
</script>
    
<div class="stores">
    <Writeable />

    <Auto />

    <Read />

    <Derived />

    <Custom />

    <Bindings />
</div>

<style>
    .stores {
        margin: 1rem 1rem 2rem 1rem;
        box-shadow: 1px 1px 4px 2px rgb(34, 34, 34);
        border-radius: 10px;
    }
</style>