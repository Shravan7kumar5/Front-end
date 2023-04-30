import './Components/App.css';
import Nav from './Components/Nav.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer.js';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Product listing Component</h1>} />
        <Route path="/add" element={<h1>Add Product Component</h1>} />
        <Route path="/update" element={<h1>Update Product Component</h1>} />
        <Route path="/logout" element={<h1>Logout Component</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/Signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
      </div>
  );
}

export default App;