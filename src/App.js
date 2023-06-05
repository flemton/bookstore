import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Book';
import Categories from './components/categories';
import Layout from './components/Layout';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Books />} />
              <Route path="books" element={<Books />} />
              <Route path="categories" element={<Categories />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
