import {writable, derived} from 'svelte/store';

export const name = writable('')

export const greeting = derived(name, ($name) => {
    let newName = $name
    return `Hello ${newName}, welcome to my tutorial!`
})