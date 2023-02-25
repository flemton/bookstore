import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/books';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
