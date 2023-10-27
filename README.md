# Andrew Kester - DGM 3770 - Svelte Practice

#### You can also find my Vercel page on https://dgm-3770-svelte.vercel.app/ or on the main page of the repository in the about section.

#### The login form will be found [here](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/loginComponent/%2Bpage.svelte) and will now be populated as soon as the component is added to the page with onMount

#### The signup form will be found in the [./src/routes/signupForm/+page.svelte](https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/signupForm/%2Bpage.svelte) and will be accessable through the initial login form under "no account? signup here"

#### We now also have three writable stores. One to store our message modal information, one to store the message modal's actual message, and one custom store which stores the user data. I have made the last store custom for later purposes. The store path will be located at the root of our routes page in a file called "svelteTutorialUsers.js". https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/svelteTutorialUsers.js

#### Our Motions component will utilize the "tween" motion, which can be found on the landing page of the app under the "motion" button. https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/motion/%2Bpage.svelte)https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/motion/%2Bpage.svelte and the component will be located here https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/motion/tweens.svelte

#### Our Transition components will utilize fly, fade, and slide transitions and the parent component will be located here https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/%2Bpage.svelte and you will be able to see the animations in action by clicking on the "transitions" button on the landing page of the app. The first component will be located here https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/slide.svelte . The second component will be located here https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/fly.svelte . The final component will be located here https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/transitions/fade.svelte

#### The parent component containing my animation component will be located here https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/animations/%2Bpage.svelte and can be seen on the landing page by clicking the "animations" button. The child component will be located here https://github.com/Andyrooooo/DGM3770_Svelte/blob/master/svelte_practice_project/src/routes/animations/animateDirective.svelte
