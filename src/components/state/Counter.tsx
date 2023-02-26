import { useReducer } from 'react'

type TCounterState = {
    count: number
}

type TActionAddCount = {
    type: 'increment' | 'decrement'
    payload: number
}

type TActionReset = {
    type: 'reset'
}

type TActionReducer = TActionAddCount | TActionReset

const initialState = {
    count: 0
}

function reducer(state: TCounterState, action: TActionReducer) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState
        default:
            return state;
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </>
    )
}