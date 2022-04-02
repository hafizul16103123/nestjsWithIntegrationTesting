import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Navbar from './components/pages/layouts/Navbar';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import AddUser from './components/pages/users/AddUser';
import EditUser from './components/pages/users/EditUser';
import ViewUser from './components/pages/users/ViewUser';

function App() {
  return (
      <Router>
      <div className="App">
        <Navbar></Navbar>
          <Routes>
            <Route exec path='/' element={<Home/>}/>
            <Route exec path='/contact' element={<Contact/>}/>
            <Route exec path='/about' element={<About/>}/>
            <Route exec path='/users/add' element={<AddUser/>}/>
            <Route exec path='/users/edit/:id' element={<EditUser/>}/>
            <Route exec path='/users/:id' element={<ViewUser/>}/>
            <Route path='*' element={<NotFound/>}/>
            
          </Routes>
      </div>
      </Router>
  );
}

export default App;
