import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        {id: 12, name: 'Shopping', cost: 60},
        {id: 13, name: 'Holiday', cost: 100},
        {id: 14, name: 'car repair', cost: 50},
    ],
}

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}