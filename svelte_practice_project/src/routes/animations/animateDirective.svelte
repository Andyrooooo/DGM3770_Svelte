<script>

    import { flip } from 'svelte/animate'

    // choices array with the colors
    let choices = [
            {color: 'red', modal: 'redModal', id: 1},
            {color: 'orange', modal: 'orangeModal', id: 2},
            {color: 'yellow', modal: 'yellowModal', id: 3},
            {color: 'green', modal: 'greenModal', id: 4},
            {color: 'blue', modal: 'blueModal', id: 5},
            {color: 'indigo', modal: 'indigoModal', id: 6},
            {color: 'violet', modal: 'violetModal', id: 7},
            {color: 'black', modal: 'blackModal', id: 8}
        ]

        // deletes the modal from the array
    function deleteModal(id) {
        choices = choices.filter(choice => choice.id !== id)
    }

    // choices array with the colors for the reset function
    function resetModals() {
        choices = [
            {color: 'red', modal: 'redModal', id: 1},
            {color: 'orange', modal: 'orangeModal', id: 2},
            {color: 'yellow', modal: 'yellowModal', id: 3},
            {color: 'green', modal: 'greenModal', id: 4},
            {color: 'blue', modal: 'blueModal', id: 5},
            {color: 'indigo', modal: 'indigoModal', id: 6},
            {color: 'violet', modal: 'violetModal', id: 7},
            {color: 'black', modal: 'blackModal', id: 8}
        ]
    }
</script>


<div class="shadow-md bg-slate-200 text-black p-2 rounded-lg">

    <h1 class="transitionsTitle text-btn-border">Animation: The Dancing Modals</h1>

    <p>For this component we use the <a class="text-btn-border">flip</a> animation effect, and gives great motion to these modals below, when they are delted they look like they are all dancing! You can even see a great effect when you press reset before they are all removed!</p>

    <div class="flex justify-center">
        <button on:click={resetModals} class="py-2 px-8 rounded-lg m-2 text-btn-border rstBTN">Reset</button>
    </div>

    <div class="flex flex-wrap justify-between">

            {#each choices as choice (choice.id)}
                <div 
                class="bg-white pb-0 pt-4 px-4 rounded-md modal my-2 {choice.modal}"
                animate:flip={{ duration: 1000 }}
                >
                    <p class="text-center my-4">{choice.color}</p>
                    <div class="border-b pb-4"></div>
                    <div class="flex justify-center">
                        <button on:click={() => deleteModal(choice.id)} class="py-2 px-6 my-3 rounded-lg {choice.color}">Delete</button>
                    </div>
                </div>
            {/each}

    </div>
</div>

<style>
    .transitionsTitle {border-bottom: 1px solid rgb(193, 193, 193);}
    .modal {
        border: 1px solid rgb(104, 104, 226);
        gap: .5%;
        width: 49.5%;
    }
    .red {color: red; border: 2px solid red;}
    .redModal {border: 1px solid red;}
    .red:hover {background-color: red; color: white;}
    .orange {color: orange; border: 2px solid orange;}
    .orangeModal {border: 1px solid orange;}
    .orange:hover {background-color: orange; color: white;}
    .yellow {color: rgb(144, 144, 0); border: 2px solid rgb(144, 144, 0);}
    .yellowModal {border: 1px solid rgb(144, 144, 0);}
    .yellow:hover {background-color: rgb(144, 144, 0); color: white;}
    .green {color: green; border: 2px solid green;}
    .greenModal {border: 1px solid green;}
    .green:hover {background-color: green; color: white;}
    .blue {color: blue; border: 2px solid blue;}
    .blueModal {border: 1px solid blue;}
    .blue:hover {background-color: blue; color: white;}
    .indigo {color: indigo; border: 2px solid indigo;}
    .indigoModal {border: 1px solid indigo;}
    .indigo:hover {background-color: indigo; color: white;}
    .violet {color: violet; border: 2px solid violet;}
    .violetModal {border: 1px solid violet;}
    .violet:hover {background-color: violet; color: white;}
    .black {color: black; border: 2px solid black;}
    .blackModal {border: 1px solid black;}
    .black:hover {background-color: black; color: white;}
    .rstBTN {
        border: 2px solid rgb(104, 104, 226);
    }
    .rstBTN:hover {
        background-color: rgb(104, 104, 226);
        color: white;
    }
</style>