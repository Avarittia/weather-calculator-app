import React from "react";
import './App.css'
import Notes from "./components/Notes";
import {Route, Routes} from 'react-router-dom'
import Navigation from "./Navigation";
import Todo from './components/Todo'
import Weather from './components/Weather'
import Calculator from "./components/Calculator";





function App() {
 

  return(
    <><Navigation /><Routes>
      <Route path="/" element={<Weather/>} />
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/calculator' element={<Calculator/>}/>
    </Routes></>
  ) 
}

export default App;
