import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Books } from './components/Book';
import Categories from './components/categories';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Books />} />
            <Route path="books" element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
