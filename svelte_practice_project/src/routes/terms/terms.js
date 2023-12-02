export const terms = [
	{
		term: 'nested',
		title: 'Nested Components',
		content:
			'<p>Nested components allow us to keep our code more managable. A nested component is where we create a separate file with a component that we can then import/include into our current file. In these examples we have a <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">App.svelte</a> file as our parent component. We then have the separate component in the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">Nested.svelte</a> that brings in the paragraph element.</p>',
        imageOne: '/nested.png',
        imageTwo: '/nested2.png',
        imageThree: '/nested3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/nested-components',
	},

	{
		term: 'tags',
		title: 'HTML Tags',
		content:
			'<p>Ordinarily, strings are inserted as plain text, meaning that characters like <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 pb-1 rounded-xs"><</a> and <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 pb-1 rounded-xs">></a> have no special meaning. But sometimes you need to render HTML directly into a component. In Svelte, you do this with the special <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">{@html ...}</a> tag</p>',
        imageOne: '/tags1.jpg',
        imageTwo: '/tags2.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/html-tags',
	},

	{
		term: 'assingments',
		title: 'Assignments',
		content:
			'<p>In Svelte, assignments refer to the process of binding variables in a component. Assignments are used to create reactive statements that update the UI whenever the assigned values change. Svelte provides lots of ways to make assignments within its syntax. In this example we will wire up an event handler to point to our function. Once the event handler is hooked up you will be able to click this button to incement the count once each time.</p>',
        imageOne: '/assignments1.jpg',
        imageTwo: '/assignments2.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/reactive-assignments',
	},

	{
		term: 'declarations',
		title: 'Reactive Declarations',
		content:
			'<p>Svelte automatically updates the DOM when your components state changes. Often, some parts of a components state need to be computed from other parts (such as a fullname derived from a firstname and a lastname), and recomputed whenever they change. For these, we have reactive declarations. They look like this: <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">$: doubled = count * 2</a>. Reactive values become particularly valuable when you need to reference them multiple times, or you have values that depend on other reactive values.</p>',
        imageOne: '/declarations1.jpg',
        imageTwo: '/declarations2.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/reactive-declarations',
	},

	{
		term: 'statements',
		title: 'Reactive Statements',
		content:
			'<p>Reactive values are not the only reactive types you can declare, you can also run arbitrary statements reactively. For example, we can You can even put the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">$:</a> in front of things like <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">if</a> blocks like in this example.</p>',
        imageOne: '/assignments1.jpg',
        imageTwo: '/assignments2.jpg',
        imageThree: '/assignments3.jpg',
        imageFour: '/assignments4.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/reactive-statements',
	},

	{
		term: 'props',
		title: 'Declaring Props',
		content:
			'<p>In Svelte you can pass data from one component down to its children. To do that, we need to declare properties, generally shortened to props. In Svelte, we do that with the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">export</a> keyword. In this example, we have the parent component as <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">App.svelte</a> we then have the child component as <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">Nested.svelte</a>.</p>',
        imageOne: '/delcaring_props.jpg',
        imageTwo: '/declaring_props2.jpg',
        imageThree: '/declaring_props3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/declaring-props',
	},

	{
		term: 'spread',
		title: 'Spread Props',
		content:
			'<p>In Svelte, spread props refer to the use of the JavaScript spread operator <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">(...)</a> to pass multiple properties or attributes to a component. This allows you to easily forward a set of properties from a parent component to a child component without explicitly naming each one. In this example, we use the spread operator to add the various props into one component</p>',
        imageOne: '/spread1.jpg',
        imageTwo: '/spread2.jpg',
        imageThree: '/spread3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/spread-props',
	},

	{
		term: 'if',
		title: 'If Blocks',
		content:
			'<p>HTML doesnt have a way of expressing logic, like conditionals and loops. However, in Svelte its possible to do so. In this example we conditionally render an element with text once the count reaches a specific number.</p>',
        imageOne: '/if.jpg',
        imageTwo: '/if2.jpg',
        imageThree: '/if3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/if-blocks',
	},

	{
		term: 'else',
		title: 'Else Blocks',
		content:
			'<p>Just like the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">if</a> block, the else block allows for rendering conditional elements inside the markup. For this example we use the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">else</a> block in tandem with the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">if</a> block to create conditions similar as scripts but with HTML elements.</p>',
        imageOne: '/else1.jpg',
        imageTwo: '/else2.jpg',
        imageThree: '/else3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/else-blocks',
	},

	{
		term: 'each',
		title: 'Each Blocks',
		content:
			'<p>Similar to <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">if</a> and <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">else</a> the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">each</a> block is used for iterating over arrays and creating multiple instances of a component or template for each item in the array. In this example, we have an array of fruit that will be iterated over and displayed in the list.</p>',
        imageOne: '/each.jpg',
        imageTwo: '/each2.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/each-blocks',
	},

	{
		term: 'keyed',
		title: 'Keyed Each Blocks',
		content:
			'<p>In Svelte, the keyed <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">each</a> block is an extension of the regular <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">each</a> block that allows for more efficient updates when dealing with dynamic lists of items. By providing a unique key for each item, Svelte can optimize DOM updates by identifying which elements have changed, been added, or been removed. By default, when you modify the value of an <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">each</a> block, it will add and remove items at the end of the block, and update any values that have changed. That might not be what you want. In the example, we use a keyed each block to remove the specific item we want removed.</p>',
        imageOne: '/keyed1.jpg',
        imageTwo: '/keyed2.jpg',
        imageThree: '/keyed3.jpg',
        imageFour: '/keyed4.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/keyed-each-blocks',
	},

	{
		term: 'await',
		title: 'Await Blocks',
		content:
			'<p>Most web applications have to deal with asynchronous data at some point. Svelte makes it easy to await the value of <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">promises</a> directly in your markup. In this example we use the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">await</a> block to display markup as the API loads.</p>',
        imageOne: '/await1.jpg',
        imageTwo: '/await2.jpg',
        imageThree: '/await3.jpg',
        imageFour: '/await4.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/await-blocks',
	},

	{
		term: 'dom-events',
		title: 'DOM Events',
		content:
			'<p>With Svelte, you can listen to any DOM event on an element (such as click or <a class="text-btn-border">pointermove</a>) with the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">on:</a> directive like so: <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">on:pointermove={handleMove}</a></p>',
        imageOne: '/dom_event.jpg',
        imageTwo: '/dom_event2.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/dom-events',
	},

	{
		term: 'inline-handlers',
		title: 'Inline Handlers',
		content:
			'<p>To cut down on code and make your code more readable or just preference you can use <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">inline</a> handlers. This cuts out the need to create a function in your scripts and place that function straight into the event. Lets show you how:</p>',
        imageOne: '/inline1.jpg',
        imageTwo: '/inline2.jpg',
        imageThree: '/inline3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/inline-handlers',
	},

	{
		term: 'event-modifiers',
		title: 'Event Modifiers',
		content:
			'<p>DOM event handlers can have modifiers that alter their behaviour. For example, a handler with a <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">once</a> modifier will only run a single time. Any subsequent click after will not trigger the alert modal. There are many different types of modifiers, so if you would like to see the full list, go ahead and click the link below.</p>',
        imageOne: '/modifier1.jpg',
        imageTwo: '/modifier2.jpg',
        imageThree: '/modifier3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/event-modifiers',
	},

	{
		term: 'component-events',
		title: 'Component Events',
		content:
			'<p>Components can also dispatch events. To sum it up, you can have a separate component that when its event is triggered the event will be sent up to the component it has been nested in. To do so, you must also have an event dispatcher.</p>',
        imageOne: '/component_event1.jpg',
        imageTwo: '/component_event2.jpg',
        imageThree: '/component_event3.jpg',
        imageFour: '/component_event4.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/component-events',
	},

	{
		term: 'event-forwarding',
		title: 'Event Forwarding',
		content:
			'<p>Unlike DOM events, component events dont bubble. If you want to listen to an event on some deeply nested component, the intermediate components must forward the event. This one comes in handy especially for me when your project starts to become very large and necessary components become lost in the project.</p>',
        imageOne: '/event_forward1.jpg',
        imageTwo: '/event_forward2.jpg',
        imageThree: '/event_forward3.jpg',
        imageFour: '/event_forward4.jpg',
        imageFive: '/event_forward5.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/event-forwarding',
	},

	{
		term: 'text-inputs',
		title: 'Binding Text Inputs',
		content:
			'<p>Instead of using typical process in JavaScript to get the value from a text input that can be a pain sometimes we have the Sveltes <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">bind:value</a> directive. In this example, This means that not only will changes to the value of <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">name</a> update the input value, but changes to the input value will update <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">name</a>.</p>',
        imageOne: '/text_inputs1.jpg',
        imageTwo: '/text_inputs2.jpg',
        imageThree: '/text_inputs3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/text-inputs',
	},

	{
		term: 'onmount',
		title: 'onMount',
		content:
			'<p>The <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">onMount</a> lifecycle function in Svelte is a special function that allows you to perform actions when a component is mounted to the DOM. It is often used for initialization tasks or operations that should only occur once when the component is first created and added to the DOM. In this example, The <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">onMount</a> lifecycle function is used to fetch data from the JSONPlaceholder API when the component is mounted and then displayed below.</p>',
        imageOne: '/onmount1.jpg',
        imageTwo: '/onmount2.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/onmount',
	},

	{
		term: 'before-after',
		title: 'BeforeUpdate and AfterUpdate',
		content:
			'<p>The <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">beforeUpdate</a> function schedules work to happen immediately before the DOM is updated. <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">afterUpdate</a> is its counterpart, used for running code once the DOM is in sync with your data. Together, theyre useful for doing things imperatively that are difficult to achieve in a purely state-driven way, in our example we have alerts that will show the phases as the updates happen. If you would like to see another example in better detail you can click the link below.</p>',
        imageOne: '/before_after1.jpg',
        imageTwo: '/before_after2.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/update',
	},

	{
		term: 'tick',
		title: 'Tick',
		content:
			'<p>The <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">tick</a> function is unlike other lifecycle functions in that you can call it any time, not just when the component first initialises. It returns a promise that resolves as soon as any pending state changes have been applied to the DOM (or immediately, if there are no pending state changes). When you update component state in Svelte, it doesnt update the DOM immediately. Instead, it waits until the next microtask to see if there are any other changes that need to be applied, including in other components. Doing so avoids unnecessary work and allows the browser to batch things more effectively. In this example, we import tick to handle our keydown event and change the text to uppercase when tab is pressed.</p>',
        imageOne: '/tick1.jpg',
        imageTwo: '/tick2.jpg',
        imageThree: '/tick3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/tick',
	},

	{
		term: 'writable',
		title: 'Writable Stores',
		content:
			'<p>Not all application state belongs inside your applications component hierarchy. Sometimes, youll have values that need to be accessed by multiple unrelated components, or by a regular JavaScript module. In Svelte, we do this with stores. A store is simply an object with a <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">subscribe</a> method that allows interested parties to be notified whenever the store value changes.In this example, count is a writeable store which also means it has methods attatched to it like <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">set</a> <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">update</a> as well as <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">subscribe</a>.</p>',
        imageOne: '/writable1.jpg',
        imageTwo: '/writable2.jpg',
        imageThree: '/writable3.jpg',
        imageFour: '/writable4.jpg',
        imageFive: '/writable5.jpg',
        imageSix: '/writable6.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/writable-stores',
	},

	{
		term: 'auto-subscriptions',
		title: 'Auto-subscriptions',
		content:
			'<p>The auto-subscriptions is very similar to writeable stores however, using just the <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">subscribe</a> method can lead to issues. So, we will use the auto-subscription as <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">$</a> along with the name of the store so it can then be subscribed, unsubscribed and then destroyed.</p>',
        imageOne: '/auto1.jpg',
        imageTwo: '/auto2.jpg',
        imageThree: '/auto3.jpg',
        imageFour: '/auto4.jpg',
        imageFive: '/auto5.jpg',
        imageSix: '/auto6.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/auto-subscriptions',
	},

	{
		term: 'readable-stores',
		title: 'Readable Stores',
		content:
			'<p>Not all stores should be writable by whoever has a reference to them. For example, you might have a store representing the mouse position or the users geolocation, and it doesnt make sense to be able to set those values from outside. For those cases, we have <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">readable</a></p> stores.',
        imageOne: '/readable1.jpg',
        imageTwo: '/readable2.jpg',
        imageThree: '/readable3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/readable-stores',
	},

	{
		term: 'derived-stores',
		title: 'Derived Stores',
		content:
			'<p>You can create a store whose value is based on the value of one or more other stores with <a class="font-bold text-btn-border rounded-sm bg-gray-300 px-1 rounded-xs">derived</a>. In this example, we can create a store that derives the time the page has been open</p>',
        imageOne: '/derived1.jpg',
        imageTwo: '/derived2.jpg',
        imageThree: '/derived3.jpg',
        tutorialLink: 'https://svelte.dev/tutorial/derived-stores',
	},
]