<script lang=ts>
    import { time, elapsed } from './derivedStore.js'

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
    })
</script>
    

<div class="text-black">
    
    <h1>The time is {formatter.format($time)}</h1>

    <p>This page has been open for {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}</p>
</div>