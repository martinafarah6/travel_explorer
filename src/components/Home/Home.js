import { Link } from 'react-router-dom';
import './Home.css';
export default function Home()
{
    return(
        <section id="home">
            <div className='home1'>
                <h2>Explore the World, One Place at a Time🌍</h2>
                <p>Discover beautiful destinations, explore new places,
                    and find your next unforgettable adventure.</p>
            </div>
            <div className='home2'>
                <h2>Why Explore With Us?</h2>
                <div className='discover'>
                    <h3>🗺️ Discover New Places</h3>
                    <p>Find amazing destinations from around the world.</p>
                </div>
                <div className='favv'>
                    <h3>❤️ Save Your Favorites</h3>
                    <p>Keep your favorite places and visit them anytime.</p>
                </div>
                <div className='explore'>
                    <h3>🔍 Easy to Explore</h3>
                    <p>Search and filter places to find exactly what you're looking for.</p>
                </div>
            </div>
            <div className='home3'>
                <h2>Popular Destinations 🌟</h2>
                <div className='cards'>
                <div className='card'>
                    <img src="https://i.pinimg.com/1200x/6f/3b/c0/6f3bc0a33fbea59a0dbd328afc6f727d.jpg" alt="Paris" width="150px"/>
                    <h3>🗼Paris — France</h3>
                </div>
                <div className='card'>
                    <img src="https://i.pinimg.com/736x/10/d7/57/10d7570a1d1957e535ad96728453773c.jpg" alt="Maldives" width="150px"/>
                    <h3>🏝️Maldives — Maldives</h3>
                </div>
                <div className='card'>
                    <img src="https://i.pinimg.com/1200x/c9/15/18/c9151875413199698c23f13aa165f896.jpg" alt="Rome" width="150px"/>
                    <h3>🏛️Rome — Italy</h3>
                </div>
                <div className='card'>
                    <img src="https://i.pinimg.com/736x/17/56/1c/17561c48bc504aee27db81881eff8722.jpg" alt="Swiss Alps" width="150px"/>
                    <h3>🏔️Swiss Alps — Switzerland</h3>
                </div>
                </div>
            </div>
            <div className='home4'>
                <h2>Ready to Explore?✈️</h2>
                <p>Start discovering amazing places and plan your next adventure.</p>
                <button><Link to="/" className='butt'>Explore Places</Link></button>
            </div>
            
        </section>
    )
}
