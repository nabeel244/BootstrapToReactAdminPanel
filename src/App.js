import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';

function App() {
  return (
    <div className="App">
    {
     <BrowserRouter>
    <Routes>
      <Route path='/admin/*' name="Admin" element={<MasterLayout />} render={(props) => <MasterLayout {...props} />}  />
       <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter> 
    }
    </div>
  );
}

export default App;
