import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Homepage from './Containers/HomePage/Index';
import Footer from './Components/Footer/Footer';
import BlockPage from './Containers/BlockPage/Index';
import Transaction from './Containers/Transaction/Index';
function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
           <Route exact path="/" component={Homepage} />
           <Route exact path="/BlockPage" component={BlockPage} />
           <Route exact path="/Transaction" component={Transaction} />
         </Switch>
     </Router>
     <Footer/>
    </div>
    
  );
}

export default App;
