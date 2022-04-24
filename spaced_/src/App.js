import LoginScreen from "./pages/LoginScreen";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LoginScreen/>}/>
        {/* <Route exact path='/todolist' element={<ToDoList/>}/> */}
        <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
