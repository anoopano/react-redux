const initialState = {
    age: 20
}

const reducer = (state = initialState, action) => {
    const newState = {...state}
    switch(action.type){
        case 'AGE_UP':
            newState.age++;
            break;
        case 'AGE_DOWN':
            newState.age--;
            break;
        default:
            return newState
    }

    return newState;
}
export default reducer;