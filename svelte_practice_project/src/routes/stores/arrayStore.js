import {writable} from 'svelte/store';

export let coworkers = writable([
    {name: 'John', age: 25, position: 'developer'},
    {name: 'Jane', age: 27, position: 'designer'},
    {name: 'Jack', age: 30, position: 'manager'},
])