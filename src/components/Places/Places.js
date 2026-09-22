import './Places.css';
import {places} from '../places';
import { useState } from 'react';
export default function Places({In,up,fav,ffav})
{
    const [pplace,setplace]=useState([...places]);
    const [cat,setCat]=useState("All");
    const [country,setCountry]=useState("All");
    const [sort,setSort]=useState("ratingHigh");
    const handledetails=(id)=>{
        const newData=[...pplace];
        const place=newData.find(place=> place.id===id);
        place.details= !place.details;
        setplace(newData);
    }
    const handlefav=(id)=>{
        const newData=[...pplace];
        const p=newData.find(p=>p.id===id)
        p.fav= !p.fav;
        setplace(newData);
        if(p.fav)
        {
            ffav([...fav,p]);
        }
        else{
            ffav(fav.filter(place=>place.id!==p.id));
        }
    }
    return(
        <section id="places">
            <h2 className='title'>Places</h2>
            {!up&&<h2 className='warn'>Registration First...</h2>}
            {!In&&up&&<h2 className='warn'>LogIn...</h2>}
            {
                In&&up&&
                <>
                <ul>
                    <li><button onClick={()=>setCat("All")}>All</button></li>
                    <li><button onClick={()=>setCat("Beach")}>Beach</button></li>
                    <li><button onClick={()=>setCat("Historical")}>Historical</button></li>
                    <li><button onClick={()=>setCat("Nature")}>Nature</button></li>
                    <li><button onClick={()=>setCat("City")}>City</button></li>
                </ul>
                <select onChange={(e)=>setCountry(e.target.value)}>
                    <option value="All" selected>All</option>
                    <option value="France">France</option>
                    <option value="Greece">Greece</option>
                    <option value="Egypt">Egypt</option>
                    <option value="UAE">UAE</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Italy">Italy</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="USA">USA</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Japan">Japan</option>
                    <option value="Peru">Peru</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Australia">Australia</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="South Africa">South Africa</option>
                </select>
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option value="ratingHigh">Rating: High to Low</option>
                    <option value="ratingLow">Rating: Low to High</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                </select>
                <div className='cardd'>
                {[...pplace].sort((a, b) =>{
                    if(sort==="ratingHigh"){
                        return b.rating - a.rating;
                    }
                    else if(sort==="ratingLow"){
                        return a.rating - b.rating;
                    }
                    else if(sort==="priceHigh")
                    {
                        return  b.price - a.price;
                    }
                    else{
                        return a.price - b.price;
                    }
                }).map((place,index)=>(
                    (place.type===cat||cat==="All")&&(place.country===country||country==="All")&&
                    (
                    <section key={place.id} className='place'>
                        <img src={place.src} alt={place.alt} width="150px"/>
                        <div className='placecontent'>
                            <h3 className='name'>{place.name}</h3>
                            <h3 className='count'>country: {place.country}</h3>
                            <h3 className='rate'>{place.rating}⭐</h3>
                            <h3 className='price'>{place.price}$</h3>
                            {
                                place.details&&
                                <>
                                    <h3>Type: {place.type}</h3>
                                    <p>{place.description}</p>
                                </>
                            }
                        </div>
                        <button onClick={()=>handledetails(place.id)}>{(place.details)?"Hide Details":"Details"}</button>
                        <button onClick={()=>handlefav(place.id)}>{(place.fav)?"❤️":"🤍"}</button>
                    </section>
                    )
                ))}
                </div>
            </>
            
            }
        </section>
    )
}
