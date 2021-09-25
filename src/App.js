import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Categories from './Pages/Categories'
import Search from './Pages/Search'
import Deatils from './Pages/Details'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
      <Router>
        <GlobalStyle />
        
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/movies' exact>
            <Movies />
          </Route>

          <Route path='/series' exact>
            <Series />
          </Route>

          <Route path='/categories' exact>
            <Categories />
          </Route>

          <Route path='/search' exact>
            <Search />
          </Route>

          <Route path='/movie/:id' exact={true} component={Deatils}>
            <Deatils />
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
