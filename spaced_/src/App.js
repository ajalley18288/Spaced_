import LoginScreen from "./pages/LoginScreen";
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import Moodtracker from "./pages/MoodTracker";
=======
import { ToDoList } from "./pages/ToDoList";
import { MoodTracker } from "./pages/MoodTracker";
>>>>>>> 1a1365f80a79b239a274b6c860aa11eaba76608b

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LoginScreen/>}/>
        <Route exact path='/todolist' element={<ToDoList/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>} />
<<<<<<< HEAD
        <Route exact path='/moodtracker' element={<Moodtracker/>} />
=======
        <Route exact path='/moodtracker' element={<MoodTracker/>} />
>>>>>>> 1a1365f80a79b239a274b6c860aa11eaba76608b
      </Routes>
    </BrowserRouter>
  );
};

export default App;
