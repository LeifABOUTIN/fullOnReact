const whoAreYouReducer = (state = "guest", action) => {
    if(action.type === 'USER'){
        return action.data;
    }
    else{
        return state;
    }
};

export default whoAreYouReducer;