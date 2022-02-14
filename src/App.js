import Users from "./pages/Users";
import User from './pages/User'
import {Routes, Route} from 'react-router-dom'
import Repos from "./pages/Repos";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/:username' element={<User/>}/>
        <Route path="/repos/:username"  element={<Repos/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
