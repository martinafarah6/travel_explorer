import './Dash.css';
export default function Dash(props)
{
    return(
        <section id="dash">
            <h2 className='title'>DashBoard</h2>
            {!props.up&&<h2 className='warn'>Registration First...</h2>}
            {!props.In&&props.up&&<h2 className='warn'>LogIn...</h2>}
            {
                props.In&&props.up&&
                <div className='details'>
                    <h3>UserName:{localStorage.getItem("name")}</h3>
                    <h3>Email :{localStorage.getItem("email")}</h3>
                    <h3>Account Status:Active🟢</h3>
                </div>
            }
        </section>
    )
}
