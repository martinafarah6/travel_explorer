import './LogOut.css';
export default function LogOut(props)
{
    const handledel=()=>{
        localStorage.clear();
        props.fIn(false);
        props.fUp(false);
    }
    return(
        <section id="out">
            {!props.up&&<h2 className='warn'>Registration First...</h2>}
            {!props.In&&props.up&&<h2 className='warn'>LogIn...</h2>}
            {
                props.In&&props.up&&
                <section className='outcontent'>
                    <h2>Do You Want To Log Out?</h2>
                    <button onClick={handledel}>YES</button>
                    <button>NO</button>
                </section>
            }
        </section>
    )
}
