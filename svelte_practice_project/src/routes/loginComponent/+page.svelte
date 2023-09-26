<script>

</script>

<div class="loginForm">
    <h1>Sign In</h1>

    <form class="md:flex justify-between">
  
        <div class="basis-1/5">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address*</label>
            <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="john@doe.com" required>
            </div>
        </div>

        <div class="basis-1/5">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Password*</label>
            <div class="mt-2">
                <input id="phone" name="phone" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
            </div>
        </div>

        <div class="container flex flex-col items-center">
            <button class="block w-half rounded- border-0 py-1.5 loginButton">Login</button>
        </div>
        
    </form>
</div>

<style>
    .loginForm {
        background: white;
        padding: 1rem;
        color: black;
        border-radius: 10px;
		margin: 1rem 1rem 2rem 1rem;
    }
    h1 {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding-bottom: 5px;
        margin-bottom: 1rem;
        text-align: center;
        text-transform: uppercase;
    }
    input {
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 1rem;
    }
    .loginButton {
        border: 2px solid rgb(132, 132, 160);
        margin-top: 1rem;
        padding: .4rem 1.5rem;
        border-radius: 5px;
        font-weight: 700;
        color: rgb(132, 132, 160);
    }
    .loginButton:hover {
        background: rgb(199, 199, 241);
        border: 2px solid rgb(199, 199, 241);
    }
</style>