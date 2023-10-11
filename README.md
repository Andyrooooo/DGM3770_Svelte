# Andrew Kester - DGM 3770 - Svelte Practice

#### You can also find my Vercel page on https://dgm-3770-svelte.vercel.app/ or on the main page of the repository in the about section.

#### The login form will be found in the ./src/routes/loginComponent/+page.svelte and will now be populated as soon as the component is added to the page with onMount
#### The signup form will be found in the ./src/routes/signupForm/+page.svelte and will be accessable through the initial login form under "no account? signup here"
#### We now also have three writable stores. One to store our message modal information, one to store the message modal's actual message, and one custom store which stores the user data. I have made the last store custom for later purposes. The store path will be located at the root of our routes page in a file called "svelteTutorialUsers.js".
