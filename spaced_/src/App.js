import LoginScreen from "./pages/LoginScreen";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import { ToDoList } from "./pages/ToDoList";
import { MoodTracker } from "./pages/MoodTracker";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LoginScreen/>}/>
        <Route exact path='/todolist' element={<ToDoList/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/moodtracker' element={<MoodTracker/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
