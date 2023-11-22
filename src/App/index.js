//import logo from './logo.svg';
import './App.css';

import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

/* const defaultTodos =[
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de Intro React.js', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Jugar futbol', completed: true},
  {text: 'Estados', completed: true},
]; */


function App() {


  return (

    <TodoProvider>
      <AppUI/>      
    </TodoProvider>
    
  );
}

export default App;
