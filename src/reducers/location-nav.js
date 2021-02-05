const locationReducer = (state = null, action) => {
    if(action.type === 'LOCATION'){
        return action.data;
    }
    else{
        return state;
    }
}

export default locationReducer;