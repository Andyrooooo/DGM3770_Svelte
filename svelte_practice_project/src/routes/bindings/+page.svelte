<script>
    import TInputs from './textInputs.svelte'

    import NInputs from './numericInputs.svelte'

    import CInputs from './checkInputs.svelte'

    import SBindings from './selectBindings.svelte'

    import GrpInputs from './groupInputs.svelte'

    import SelectMultiple from './selectMultiple.svelte'

    import TAInputs from './textareaInputs.svelte'
</script>

<div class="bindings">
    <TInputs />

    <NInputs />

    <CInputs />

    <SBindings />

    <GrpInputs />

    <SelectMultiple />

    <TAInputs />
</div>

<style>
    .bindings {
        margin: 1rem 1rem 2rem 1rem;
        box-shadow: 1px 1px 4px 2px rgb(34, 34, 34);
        border-radius: 10px;
    }
</style>