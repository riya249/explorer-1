import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Homepage from './Containers/HomePage/Homepage';
import Footer from './Components/Footer/Footer';
import BlockPage from './Containers/BlockPage/BlockPage';
import Transaction from './Containers/Transaction/Transaction';
import TimeallyExplorer from './Containers/TimeallyExplorer/TimeallyExplorer';
import Dashboard from './Containers/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
           <Route exact path="/" component={Homepage} />
           <Route exact path="/BlockPage" component={BlockPage} />
           <Route exact path="/Transaction" component={Transaction} />
           <Route exact path="/Explore" component={TimeallyExplorer} />
           <Route exact path="/dashboard" component={Dashboard} />
         </Switch>
     </Router>
     <Footer/>
    </div>
    
  );
}

export default App;
