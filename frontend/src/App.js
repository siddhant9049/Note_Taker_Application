
import './App.css';

import Export from './Components/Export';
import Search from './Components/Search';
import Signin from './Components/Signin';
import Register from './Components/Register';
import AddNote from './Components/AddNote';


import { Routes,BrowserRouter,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/register" element={<Register/>}/>
      <Route path="/AddNote" element={<AddNote/>}/>     
      <Route path="/" element={<Signin/>}/>
      <Route path="/export" element={<Export/>}/>
      </Routes>
      </BrowserRouter>
 
     

    </div>
  );
}

export default App;
