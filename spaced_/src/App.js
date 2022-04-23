import LoginScreen from "./pages/LoginScreen";
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
