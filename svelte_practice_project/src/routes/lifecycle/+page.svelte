<script lang=ts>
import OnMount from './onMount.svelte'

import BeforeAfter from './beforeAfterUpdate.svelte'

import Tick from './tick.svelte'
</script>

<div class="mt-4 mb-8 mx-4 shadow-md rounded-md">
    <OnMount />
    <BeforeAfter />
    <Tick />
</div>
