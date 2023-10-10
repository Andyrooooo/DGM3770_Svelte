import { readable } from 'svelte/store'

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date())
	}, 1000)

	return function stop() {
		clearInterval(interval)
	};
})

/*  .darkModeModal {
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