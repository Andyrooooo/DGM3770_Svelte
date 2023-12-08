<script>
    
</script>

<div class="modifier">
        <button on:click|once={() => alert('clicked')} class="p-2 border-2 border-btn-border text-btn-border hover:bg-btn-border hover:text-white rounded-lg mb-4">
            Click me, I only work once
        </button>
   

    <p>Other Event Modifiers</p>
    <ul>
        <li><a class="nameModifier text-btn-border">preventDefault</a> — calls <a class="nameModifier text-btn-border">event.preventDefault()</a> before running the handler. Useful for client-side form handling, for example.</li>

        <li><a class="nameModifier text-btn-border">passive</a> — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)</li>

        <li><a class="nameModifier text-btn-border">nonpassive</a> — explicitly set <a class="nameModifier text-btn-border">passive: false</a></li>

        <li><a class="nameModifier text-btn-border">capture</a> — fires the handler during the capture phase instead of the bubbling phase</li>

        <li><a class="nameModifier text-btn-border">once</a> — remove the handler after the first time it runs</li>

        <li><a class="nameModifier text-btn-border">self</a> — only trigger handler if event.target is the element itself</li>

        <li><a class="nameModifier text-btn-border">trusted</a> — only trigger handler if <a class="nameModifier text-btn-border">event.isTrusted</a> is <a class="nameModifier text-btn-border">true</a>, meaning the event was triggered by a user action rather than because some JavaScript called <a class="nameModifier text-btn-border">element.dispatchEvent(...)</a></li>
    </ul>
</div>


<style>
    .modifier a {
        background: rgb(255, 255, 255);
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