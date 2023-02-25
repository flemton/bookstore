import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="books" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
