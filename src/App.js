import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Albums from './pages/Albums'
import Users from './pages/Users';
import Photos from './pages/Photos';
function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Users />} />
       <Route path='/albums/:id' element={<Albums />} />
       <Route path='/photos/:albumId' element={<Photos />} />
       
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
