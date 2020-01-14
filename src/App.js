import React from 'react';
import ProductsTable from './ProductsTable';
import FilterForm from './FilterForm';

function App() {
  return (
      <div className="container">
          <header className="App-header">
              <h1>Sklep</h1>
          </header>
          <main>
              <FilterForm/>
              <ProductsTable/>
          </main>
      </div>
  );
}

export default App;
