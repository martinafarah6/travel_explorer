import './Header.css';
import {Link} from 'react-router-dom' 
export default function Header()
{
    return(
        <header>
            <h1><span>TRAVEL </span>NOW</h1>
            <nav>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="/">Places</Link></li>
                    <li><Link to="fav">Favorites</Link></li>
                    <li><Link to="search">Search</Link></li>
                    <li><Link to="dash">DashBoard</Link></li>
                    <li><Link to="signin">Sign In</Link></li>
                    <li><Link to="signup">Sign Up</Link></li>
                    <li><Link to="out">LogOut</Link></li>
                </ul>
            </nav>

        </header>
    )
}
