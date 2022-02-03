import Blogs from "./components/Blogs";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='blog/:blogId' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
