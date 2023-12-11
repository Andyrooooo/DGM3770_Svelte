# Andrew Kester - DGM 3770 - Svelte Practice

#### This is my I built for DGM 3770 Rich Internet Application Development class using Svelte.

### Vercel
#### You can also find my Vercel page here [Vercel](https://dgm-3770-svelte.vercel.app/) or on the main page of the repository in the about section.

### Home
#### The home page has been split into a "header", "login Prompt", and "home" components due to their size. You have find the home page here [Home Page](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/%2Bpage.svelte), you can then find the header component here [header](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/header/%2Bpage.svelte).

### Login Prompt
#### With changes from OAth the login prompt will be visible as soon as you are taken to the page as it was said earlier the login prompt was previously located inside the home page but will now be located here [login prompt](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/loginPrompt/%2Bpage.svelte).

### Writeable Stores
#### We now also have three writable stores. One to store our message modal information, one to store the message modal's actual message, and one custom store which stores the user data. The last store is a title for the modal to customize the title of the message. The store path will be located at the root of our routes page in a file called "svelteTutorialUsers.js". The link is located here [Writeable Stores](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/svelteTutorialUsers.js)

### Motions
#### Our Motions component will utilize the "tween" motion, which can be found on the landing page of the app under the "motion" button. [Motions parent Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/motion/%2Bpage.svelte) and the component will be located Here [Tweens Motion Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/motion/tweens.svelte)

### Transitions
#### Our Transition components will utilize fly, fade, and slide transitions and the parent component will be located here [Transitions Parent Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/%2Bpage.svelte) and you will be able to see the animations in action by clicking on the "transitions" button on the landing page of the app. The first component will be located here [Slide Transition Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/slide.svelte). The second component will be located here [Fly Transition Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/fly.svelte). The final component will be located here [Fade Transition Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/fade.svelte)

### Animations
#### The parent component containing my animation component will be located here [Animation Parent component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/animations/%2Bpage.svelte) and can be seen on the landing page by clicking the "animations" button. The child component will be located here [Animation component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/animations/animateDirective.svelte)

### OAuth 
#### The OAuth will be visible as soon as you go to my page, and will require you to authenticate in order to view the tutorial. The code will be visible in the parent component here: [Parent Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/%2Bpage.svelte). You can also view the auth file where the local environment variable points to but is empty. [auth svelte file](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/auth/%2Bpage.svelte).

#### The hooks file will be located here: [hooks.server.ts](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/hooks.server.ts).

### Master/Detail Route
#### For my master/detail route I have utilized sveltekit's routing, loading, and rendering methods to take array data from a JS file and load it into another svelte file without hard coded links. The root of the page will show 25 unique but similar svelte terminology pages to help users understand svelte a little better. The link to the root file will be located here [Master root file](https://github.com/Andyrooooo/DGM3770_Svelte/tree/master/svelte_practice_project/src/routes/terms)

# Final presentation 
#### 1. For this section you may view the parent component or "home" component. In here is where all of my other components for the Svelte tutorial are nested. These various components don't link to separate pages but are populated by clicking the button with the listed name and displayed in the body of the page. Currently there are 11 separate buttons that will reveal the those sections and many different components create using different svelte methodologies. A link to the parent component will be provided here [Home Page](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/%2Bpage.svelte)

#### 2. For this section we have the master/detail routes to display the 25 different routes from our 'terms' page main component. These terms are terminology for various Svelte methods and functionality. Each route/page will include between 5-9 different enpoints. The link to the main component will be here [Master component](https://github.com/Andyrooooo/DGM3770_Svelte/tree/master/svelte_practice_project/src/routes/terms)

#### 3. In here I will provide a link to my commits [commit history](https://github.com/Andyrooooo/DGM3770_Svelte/commits/master). Currently there are 118 commits made, and some small, some large but consistent throughout.

#### 4. In my Events section, we have five various examples of user events. These will include on:pointermove, on:mouseover, the event modifier "once", event dispatchers, event forwarding, and DOM event forwarding. The link to the main component will be here [Events main component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/events/%2Bpage.svelte).

#### 5. In the Bindings section, we have a total of 7 components utilizing various kinds of data bindings. This includes binding to text inputs, number inputs, checkboxes, select inputs, text area, and bind groupings. The link to the bindings main component will be here [Bindings main component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/bindings/%2Bpage.svelte)

#### 6. For our life cycle functions and stores, we will firstly start with life cycle functions. 
- I will provide you with my "life cycle" section which includes components utilizing onMount, beforeUpdate and afterUpdate, and tick functionalities. The link will be provided here [life cycle main component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/lifecycle/%2Bpage.svelte).
- We then also use the onMount lifecycle on the "loginPrompt" component to display the login when the user comes to the sight. This will be located on the home page or parent component here [Home page](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/%2Bpage.svelte)
- Lastly I have included three writeable stores that are used for our custom modal to add a title, the description and one to display and hide the modal when called. The link will be here to the store [Svelte Stores](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/svelteTutorialUsers.js)

#### 7. In this section we have six tutorial transition components and three of my own transition components, we then have one of my own animation components so, we'll break it down.
- The transitions worth noting will be located and documented at the bottom of the transition parent component and you can find them here [Transition Parent Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/%2Bpage.svelte).
- I also utilized the slide transition on my header component for my navigation menu. This can be viewable here [Header component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/header/%2Bpage.svelte)
- The animation component I created will be viewable in the animation parent component but is the only demonstration of animation I have [Animation Parent Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/animations/%2Bpage.svelte)

#### 8. For this section we have the motion section. In our motion section we have a single component that uses a random joke generator API. The component uses a loading message with a mix of a progress bar while the API is being retrieved and I set a setTimeout on the fetch to delay its retrieval to see what they look like. Once its been retrieved you will see the question presented in a box where you can click to get the answer where you can then retrieve a new joke. You can view this here [Motion Parent Component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/motion/%2Bpage.svelte).

#### 9. For the OAuth section, to give it my own style and what I envisioned, I split the OAuth between 3 separate components. The header, the logout modal, and the login prompt which will all be nested inside the parent component or home page to have it work correctly.
- The header which will include all the users content, the users name, their email, their github user image, and a signout button. You can find it here [header component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/header/%2Bpage.svelte)
- The login prompt which will be shown as you navigate to the site, will holds our github login for users. You can find it here [login prompt component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/loginComponent/%2Bpage.svelte)
- The logout modal uses our store to alter the message and title and holds the github signout. You an find it here [logout modal component](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/logoutModal/%2Bpage.svelte)
