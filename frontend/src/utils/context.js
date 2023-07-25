import { createContext } from "react"

// create context for the app
// default setError value of empty arrow function, incase a higher component needs to access it
export const AppContext = createContext({ setError: () => {} })
