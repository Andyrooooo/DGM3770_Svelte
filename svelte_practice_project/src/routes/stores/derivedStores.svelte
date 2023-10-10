<script lang=ts>
    import { time, elapsed } from './derivedStore.js'

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
    })
</script>
    

<div class="derived">
    <h1 class="derivedTitle">Derived Stores</h1>

    <p class="description">In this example, we use <a class="important">Derived stores</a> to display the time our page has been open</p>
    
    <h1>The time is {formatter.format($time)}</h1>

    <p>This page has been open for {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}</p>
</div>


<style>
    .derived {
        background: rgb(92, 92, 92);
        color: black;
        padding: 1rem;
    }
    .derivedTitle {
        border-bottom: 1px solid rgb(126, 126, 126);
    }
    .important {
        color: rgb(104, 104, 226);
    }
    .description {
        margin-bottom: 1rem;
    }
</style>