import { useState } from 'react';
import './Search.css';
import { places } from '../places';
export default function Search()
{
    const [search,setSearch]=useState("");
    const [select,setSelect]=useState("");
    return(
        <section id="search">
            <h2 className='title'>Search</h2>
                    <input type="search" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    <div className='cardd'>
                    {places.map((place,index)=>(
                        place.name.toLowerCase().includes(search)&& search!==""&&
                        <section key={index} className='searchcontent'>
                            <h3 className='namee'>{place.name}</h3>
                            {
                                select===index&&
                                <section key={index} className='place'>
                                    <img src={place.src} alt={place.alt} width="150px"/>
                                    <div className='placecontent'>
                                        <h3>Name: {place.name}</h3>
                                        <h3>country: {place.country}</h3>
                                        <h3>{place.rating}⭐</h3>
                                        <h3>{place.price}$</h3>
                                        <h3>Type: {place.type}</h3>
                                        <p>{place.description}</p>
                                    </div>
                                </section>
                            }
                            <button onClick={()=>setSelect(select===index ? "" : index)}>{select===index ? "Hide" : "Select"}</button>
                        </section>
                    ))}
                    </div>
        </section>
    )
}
