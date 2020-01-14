import React from 'react';
import ProductsTable from './ProductsTable';

function App() {
  return (
      <div className="container">
          <header className="App-header">
              <h1>Sklep</h1>
          </header>
          <main>
              <ProductsTable/>
          </main>
      </div>
  );
}

export default App;
