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
import Bunch from './Containers/Bunch/Bunch';
import Blocks from './Containers/Blocks/Blocks';
import BlockPage from './Containers/BlockPage/BlockPage';
import Transactions from './Containers/Transactions/Transactions';
import TimeallyExplorer from './Containers/TimeallyExplorer/TimeallyExplorer';
import Dashboard from './Containers/Dashboard/Dashboard';
import EraswapCalculator from './Containers/EraswapCalculator/EraswapCalculator';
import Transaction from './Containers/Transaction/Transaction';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
           <Route exact path="/" component={Homepage} />
           <Route exact path="/bunch" component={Bunch} />
           <Route exact path="/blocks" component={Blocks} />
           <Route exact path="/block/:blockNumber" component={BlockPage} />
           <Route exact path="/txs" component={Transactions} />
           <Route exact path="/tx/:hash" component={Transaction} />
           <Route exact path="/explore" component={TimeallyExplorer} />
           <Route exact path="/dashboard" component={Dashboard} />
           <Route exact path="/calculator" component={EraswapCalculator} />
         </Switch>
     </Router>
     <Footer/>
    </div>
    
  );
}

export default App;
