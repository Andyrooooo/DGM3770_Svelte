<script>
    import InOut from './inAndOut.svelte'

    import CSSTransitions from './customCSSTransitions.svelte'

    import JSTransitions from './customJSTransitions.svelte'

    import TEvents from './transitionEvents.svelte'

    import Global from './globalTransitions.svelte'

    import KeyBlocks from './keyBlocks.svelte'

    import Slide from './slide.svelte'

    import MyInOut from './myInOut.svelte'
</script>


<div class="mx-4 mt-4 mb-8 p-4 shadow-md rounded-md bg-white">
    <h1 class="text-black mb-4 text-center">These modules are example modules using many of the functionalities of Transitions</h1>
    <InOut />
    <CSSTransitions />
    <JSTransitions />
    <TEvents />
    <Global />
    <KeyBlocks />

    <h1 class="text-black my-4 text-center">My Svelte tutorial examples</h1>
    <Slide />
    <MyInOut />
</div>