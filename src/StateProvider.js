//setup data layer
import React, {createContext, useContext, useReducer} from 'react'

//data layer
export  const StateContext = createContext()

//Build a provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//This is how you use it inside od a component
export const useStateValue = () => useContext(StateContext)