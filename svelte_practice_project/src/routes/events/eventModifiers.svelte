<script>
    
</script>

<div class="modifier">
<h2>Event Modifiers</h2>
    <button on:click|once={() => alert('clicked')}>
        Click me, I only work once
    </button>

    <p>Other Event Modifiers</p>
    <ul>
        <li><a class="nameModifier">preventDefault</a> — calls <a class="nameModifier">event.preventDefault()</a> before running the handler. Useful for client-side form handling, for example.</li>

        <li><a class="nameModifier">passive</a> — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)</li>

        <li><a class="nameModifier">nonpassive</a> — explicitly set <a class="nameModifier">passive: false</a></li>

        <li><a class="nameModifier">capture</a> — fires the handler during the capture phase instead of the bubbling phase</li>

        <li><a class="nameModifier">once</a> — remove the handler after the first time it runs</li>

        <li><a class="nameModifier">self</a> — only trigger handler if event.target is the element itself</li>

        <li><a class="nameModifier">trusted</a> — only trigger handler if <a class="nameModifier">event.isTrusted</a> is <a class="nameModifier">true</a>, meaning the event was triggered by a user action rather than because some JavaScript called <a class="nameModifier">element.dispatchEvent(...)</a></li>
    </ul>
</div>


<style>
    .modifier {
        background: rgb(172, 172, 172);
        padding: 1rem;
    }
    .modifier h2 {
        color: black;
    }
    .modifier p {
        color: black;
        margin-top: 1rem;
    }
    .modifier button {
        background: black;
        width: 300px;
        padding: .5rem;
        border-radius: 5px;
        color: white;
        flex-basis: 100%;
        margin-top: 1rem;
    }
    .modifier a {
        background: rgb(91, 91, 91);
        padding: 0 5px;
        border-radius: 3px;
    }
    ul {
        list-style-type: circle;
    }
    li {
        margin-left: 1rem;
    }
</style>