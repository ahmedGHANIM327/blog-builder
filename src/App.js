import './App.css';
import Home from './Home/Home';
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Auth from './Authentification/Authentification'
import Post from './Post/Post';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' exact={true} element={<Home/>}/>
              <Route path='/blog' exact={true} element={<Blog/>}/>
              <Route path='/contact' exact={true} element={<Contact/>}/>
              <Route path='/auth' exact={true} element={<Auth />}/>
              <Route path='/post' exact={true} element={<Post />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
