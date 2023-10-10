<script lang=ts>

    import { time } from './readStore.js'

    const formatter = new Intl.DateTimeFormat(
            'en',
            {
                hour12: true,
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit'
            }
        )

</script>
    
<div class="read">
    <h1 class="readTitle">Readable Stores</h1>

    <p class="description">In this example, we use <a class="important">readable stores</a> to update the time</p>
    
    <h1>The time is {formatter.format($time)}</h1>
</div>


<style>
    .read {
        background: rgb(141, 141, 141);
        color: black;
        padding: 1rem;
    }
    .readTitle {
        border-bottom: 1px solid rgb(174, 174, 174);
    }
    .important {
        color: rgb(104, 104, 226);
    }
    .description {
        margin-bottom: 1rem;
    }
    /* .darkModeModal {
        background: white;
        padding: 1rem;
        border-radius: 5px;
        position: fixed;
        z-index: 100;
        top: 30vh;
        left: 15%;
        right: 15%;
    }
    .modalTitle {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        color:rgb(104, 104, 226);
    }
    .modalDescription {
        text-align: center;
        border-bottom: 1px solid black;
        margin-bottom: 1rem;
        padding-bottom: .5rem;
    }
    .darkModeButton {
        border: 2px solid black;
        color: black;
        padding: .5rem 1rem;
        border-radius: 10px;
    }
    .darkModeButton:hover {
        background: black;
        color: white;
    }
    .darkModeButtonContainer {
        display: flex;
        justify-content: center;
    }
    .closeModalButton {
        display: flex;
        justify-content: flex-end;
    }
    .closeModal {
        border: 2px solid rgb(104, 104, 226);
        color:rgb(104, 104, 226);
        padding: .5rem 1rem;
        border-radius: 10px;
    }
    .closeModal:hover {
        background: rgb(104, 104, 226);
        color: white;
    }
    .openModal {
        border: 2px solid rgb(191, 191, 245);
        color:rgb(191, 191, 245);
        padding: .5rem 1rem;
        border-radius: 10px;
    }
    .openModal:hover {
        background: rgb(191, 191, 245);
        color: white;
    }
    .openModalContainer {
        display: flex;
        justify-content: center;
        margin-top: 5px;
    } */
</style>