import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

import StartWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StartWarsProvider>
      <main>
        <Header />
        <Table />
      </main>
    </StartWarsProvider>
  );
}

export default App;
