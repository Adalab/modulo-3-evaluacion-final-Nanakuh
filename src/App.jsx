//import { useState } from "react";

//import '../scss/App.scss'

import CharacterList from './components/characterList';
import Form from './components/pages/form/form';
import Header from './components/pages/header/header';

function App() {




  return (
    <div className='app'>
    <Header />
    <main>
    <Form />
    <CharacterList/>
    </main>
    </div>
  );
}

export default App
