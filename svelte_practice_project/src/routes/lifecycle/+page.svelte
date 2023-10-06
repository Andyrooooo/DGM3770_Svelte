<script lang=ts>
import OnMount from './onMount.svelte'

import BeforeAfter from './beforeAfterUpdate.svelte'

import Tick from './tick.svelte'
</script>

<div class="lifeCycle">
    <OnMount />
    <BeforeAfter />
    <Tick />
</div>


<style>
    .lifeCycle {
        margin: 1rem 1rem 2rem 1rem;
        box-shadow: 1px 1px 4px 2px rgb(34, 34, 34);
        border-radius: 10px;
    }
</style>