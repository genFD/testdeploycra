import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Single from './Single'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
