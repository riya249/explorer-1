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
import Alerts from './Containers/Alerts/Index';
import Myaccount from './Containers/Myaccount/Index';
import Myticket from './Containers/Myticket/Index';
import EventPage from './Containers/EventPage/Index';
import CreateEvent from './Containers/CreateEvent/Index';
import EventDetail from './Containers/EventDetail/Index';
import PreviewTicket from './Components/PreviewTicket/Index';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
           <Route exact path="/" component={Homepage} />
           <Route exact path="/alerts" component={Alerts} />
           <Route exact path="/Myaccount" component={Myaccount} />
           <Route exact path="/Myticket" component={Myticket} />
           <Route exact path="/EventPage" component={EventPage} />
           <Route exact path="/CreateEvent" component={CreateEvent} />
           <Route exact path="/EventDetail" component={EventDetail} />
           <Route exact path="/PreviewTicket" component={PreviewTicket} />
         </Switch>
     </Router>
     <Footer/>
    </div>
    
  );
}

export default App;
