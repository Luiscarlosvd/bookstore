import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
