import { useState } from 'react';
import './SignUp.css';
export default function SignUp({fUp})
{
    const [user,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [confirm,setConfirm]=useState("");
    const handleSubmit=()=>{
        if(pass.length<=6)
        {
            alert("Please Enter password have more than 6 chars");
            fUp(false);
        }
        else if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(pass)) {
            alert("Password must contain letters and numbers");
            fUp(false);
        }
        else if(!pass.includes('#')&&!pass.includes('$'))
        {
            alert("Password must contain # or $");
            fUp(false);
        }
        else if(pass!==confirm)
        {
            alert("Password and Confirm Password must match.");
            fUp(false);
        }
        else{
            alert("Registration successful! Welcome to Travel Explorer 🌍");
            localStorage.setItem("name",user);
            localStorage.setItem("email",email);
            localStorage.setItem("password",pass);
            fUp(true);
        }
    }
    return(
        <section id="up">
            <form action={handleSubmit}>
                <h2>Registration</h2>
                <div>
                    <label for="name">UserName</label>
                    <input id="name" type="text" onChange={(e)=>setUser(e.target.value)} value={user} required />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                </div>
                <div>
                    <label for="pass">PassWord</label>
                    <input id="pass" type="password" onChange={(e)=>setPass(e.target.value)} value={pass} required/>
                </div>
                <div>
                    <label for="confirm">Confirm PassWord</label>
                    <input id="confirm" type="password" onChange={(e)=>setConfirm(e.target.value)} value={confirm} required/>
                </div>
                <input type="submit" className='buttun'/>
            </form>
        </section>
    )
}
