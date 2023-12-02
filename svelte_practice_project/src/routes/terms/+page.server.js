import { terms } from './terms.js'

export function load() {
    return {
        summaries: terms.map((term) => ({
            term: term.term, 
            title: term.title
        }))
    }
}