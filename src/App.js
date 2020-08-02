import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Homepage from './Containers/HomePage/Homepage';
import Footer from './Components/Footer/Footer';
import Bunches from './Containers/Bunches/Bunches';
import Blocks from './Containers/Blocks/Blocks';
import BlockPage from './Containers/BlockPage/BlockPage';
import Transactions from './Containers/Transactions/Transactions';
import TimeallyExplorer from './Containers/TimeallyExplorer/TimeallyExplorer';
import Dashboard from './Containers/Dashboard/Dashboard';
import EraswapCalculator from './Containers/EraswapCalculator/EraswapCalculator';
import Transaction from './Containers/Transaction/Transaction';
import Bunch from './Containers/Bunch/Bunch';
import Address from './Containers/Address/Address';
import Nrtmanager from './Containers/Nrtmanager/Nrtmanager';
import Nodestatus from './Containers/Nodestatus/Nodestatus';
import Layerbridge from './Containers/Layerbridge/Layerbridge';
import Validatorstakings from './Containers/Validatorstakings/Validatorstakings';
import Nodestatustransaction from './Containers/Nodestatustransaction/Nodestatustransaction';
function App() {
  useEffect(() => {
    window.$('[data-toggle="tooltip"]').tooltip();
    window.$('td').tooltip();
    return () => {};
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/address/:address" component={Address} />
          <Route exact path="/bunches" component={Bunches} />
          <Route exact path="/bunch/:bunchIndex" component={Bunch} />
          <Route exact path="/blocks" component={Blocks} />
          <Route exact path="/block/:blockNumber" component={BlockPage} />
          <Route exact path="/txns" component={Transactions} />
          <Route exact path="/txns/:blockNumber" component={Transactions} />
          <Route exact path="/txn/:hash" component={Transaction} />
          <Route exact path="/explore" component={TimeallyExplorer} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/calculator" component={EraswapCalculator} />
          <Route exact path="/nrtmanager" component={Nrtmanager} />
          <Route exact path="/nodestatus" component={Nodestatus} />
          <Route exact path="/layerbridge" component={Layerbridge} />
          <Route
            exact
            path="/validatorstakings"
            component={Validatorstakings}
          />
          <Route
            exact
            path="/nodestatustransaction"
            component={Nodestatustransaction}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
