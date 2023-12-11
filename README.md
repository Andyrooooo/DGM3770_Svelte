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
