import {writable} from 'svelte/store'

function Users() {
    const {subscribe, update} = writable([])

    return {
        subscribe, 
        addUser: (user) => update(users => users = [...users, user]),
        removeUser: (user) => update(users => users.filter(u => u !== user))
    }
}

export const users = Users()