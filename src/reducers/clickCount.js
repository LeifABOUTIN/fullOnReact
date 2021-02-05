const clickCountReducer = (state = 0, action) => {
    if(action.type === 'CLICK'){
        return state + 1;
    }
    else{
        return state;
    }
}

export default clickCountReducer;