import Users from "./pages/Users";
import User from './pages/User'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/:username' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
