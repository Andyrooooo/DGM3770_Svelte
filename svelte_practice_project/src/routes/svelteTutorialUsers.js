import {writable} from 'svelte/store';

function Users() {
    // creates a store with an initial value of an empty array
    const {subscribe, update} = writable([])

    // currently only has one custom method, which takes the person object and adds it to the persons array in the store
    return {
        subscribe, 
        addUser: (person) => update(persons => persons = [...persons, person]),
    }
}

export const persons = Users()

export const alertModal = writable(false)

export const alertMessage = writable('')

export const alertSecondMessage = writable('')

// export const modalState = writable({ visible: false })


/* We need to come back later to change the Users() to localStorage */
