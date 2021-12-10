const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case "SIGN_IN":
            return !state // !state means "opposite of state". Also possible: return true
        default: 
            return state
    }
}
export default loggedReducer 