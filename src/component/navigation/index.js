import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav = () => {
    const user = useSelector(state => state.who);
    const location = useLocation();
    console.log(location)
    return(

        <div className="nav">
            <div className="nav-container">
                
                <Link to="/">LEIF</Link>
                <Link to="/school"> SCHOOL </Link>
                <Link to="/jobs"> WORK</Link>
                <Link to="/passions"> PASSION</Link>
                <Link to="/redux"> PLAY ZONE</Link>
                {user!== 'guest' ? <Link to="/name">Hi {user}</Link> : null }
            </div>
                
        </div>
    )
}

export default Nav;