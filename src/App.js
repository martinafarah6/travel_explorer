import { useState } from 'react';
import {Header,Home,SignUp,SignIn,Places,Fav,Dash,Search,LogOut,Footer} from './components';
import { HashRouter, Routes, Route} from 'react-router-dom';
function App()
{
    const [fav,setFav]=useState([]);
    const [In,setIn]=useState(false);
    const [up,setUp]=useState(false);
    return(
        <HashRouter>
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/signin" element={<SignIn fIn={setIn}/>}/>
                <Route path="/signup" element={<SignUp fUp={setUp}/>}/>
                <Route path="/"  element={<Places up={up} In={In} fav={fav} ffav={setFav}/>}/>
                <Route path="/fav" element={<Fav up={up} In={In} fav={fav} />}/>
                <Route path="/Dash" element={<Dash up={up} In={In}/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/out" element={<LogOut up={up} In={In} fIn={setIn} fUp={setUp}/>}/>
            </Routes>
            <Footer/>
        </HashRouter>
    )
}
export default App;
