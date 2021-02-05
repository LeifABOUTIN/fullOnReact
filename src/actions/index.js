export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

export const decrement = () => {
    return{
        type: 'DECREMENT'
    };
}

export const loggin = (username) => {
    return{
        type: 'USER',
        data: username
    };
}

export const clicks = () => {
    return{
        type: 'CLICK'
    };
}

export const theLocation = (location) => {
    return{
        type: 'LOCATION',
        data: location,
    }
}

export const signIn = () => {
    return{
        type: 'SIGN_IN',
    };
}

