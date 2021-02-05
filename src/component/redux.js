import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, loggin, signIn } from '../actions';


const Redux = () => {

    const [ username, setUsername ] = useState(null)
    const counter = useSelector(state => state.counter);
    const logged = useSelector(state => state.logged);
    const clicks = useSelector(state => state.clicks);

    const action = useDispatch();

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleForm = (e) =>{
        e.preventDefault()
        action(loggin(username))
        action(signIn())
    }
   
    return(
        <div className="reduxCountainer">
            <h1>Redux</h1>
            <p>Counter: {counter}</p>
            <button onClick={() => action(increment())}>+</button>
            <button onClick={() => action(decrement())}>-</button>
            <p>Are you Logged in? {logged}</p>
            <label>Your name?</label>
            <form onSubmit={ (e) => handleForm(e) }>
                <input onChange={event => handleChange(event)} type="text" name="user" id="user"/>
                <input type="submit" value="SUBMIT"/>
            </form>
            <p>You've clicked {clicks} times on this website</p>
        </div>
    )
};

export default Redux;