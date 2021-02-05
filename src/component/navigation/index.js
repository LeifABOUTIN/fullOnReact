import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const Nav = () => {
    const user = useSelector(state => state.who);
    const location = useLocation();
    const pages = ["/","/school","/jobs","/passions","/redux"];
    
    const handleDynamicNav = () => {
        pages.map(page => {
            if(page === location.pathname){
                let selectNav = document.getElementById(`${location.pathname}`)
                selectNav.style.background = 'black';
                selectNav.style.color = 'white';
            }
            else{
                let selectNav = document.getElementById(page)
                selectNav.style.background = "white";
                selectNav.style.color = "black";
            }
        })
    }
    useEffect(() => {
        handleDynamicNav()
    },[location])
    return(

        <div className="nav">
            <div className="nav-container">
                <Link id="/" to="/">LEIF</Link>
                <Link id="/school" to="/school"> SCHOOL </Link>
                <Link id="/jobs" to="/jobs"> WORK</Link>
                <Link id="/passions" to="/passions"> PASSION</Link>
                <Link id="/redux" to="/redux"> PLAY ZONE</Link>
                {user!== 'guest' ? <Link id="/name" to="/name">Hi {user}</Link> : null }
            </div>
                
        </div>
    )
}

export default Nav;