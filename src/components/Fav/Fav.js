import './Fav.css';
export default function Fav(props)
{
    return(
        <section id="fav">
            <h2 className='title'>Favorites</h2>
            
            {!props.up&&<h2 className='warn'>Registration First...</h2>}
            {!props.In&&props.up&&<h2 className='warn'>LogIn...</h2>}
            {
                props.In&&props.up&&
                <div className='cardd'>
                {props.fav.map((place,index)=>(
                    <section key={index} className='place'>
                        <img src={place.src} alt={place.alt} width="150px"/>
                        <div className='placecontent'>
                            <h3 className='name'>{place.name}</h3>
                            <h3 className='count'>country: {place.country}</h3>
                            <h3 className='rate'>{place.rating}⭐</h3>
                            <h3 className='price'>{place.price}$</h3>
                            <h3>Type: {place.type}</h3>
                            <p>{place.description}</p>
                        </div>
                    </section>
                ))}
                </div>
            }
            
        </section>
    )
}
