import { useState } from 'react';
import './SignIn.css';
export default function SignIn({fIn})
{
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const handleregister=()=>{
        if(email!==localStorage.getItem("email"))
        {
            alert("Please enter a valid Email");
            fIn(false);
        }
        else if(pass!==localStorage.getItem("password"))
        {
            alert("Please enter a valid passWord");
            fIn(false);
        }
        else{
            alert("Login successful! Welcome back! 👋");
            fIn(true);
        }
    }
    return(
        <section id="in">
            <form action={handleregister} >
                <h2>LogIn</h2>
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                </div>
                <div>
                    <label for="pass">PassWord</label>
                    <input id="pass" type="password" onChange={(e)=>setPass(e.target.value)} value={pass} required/>
                </div>
                <input type="submit" className='buttun'/>
            </form>
        </section>
    )
}
