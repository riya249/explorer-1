import React, { Component } from 'react';
import './TransactionsIncentiveCalculator.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';

class TransactionsIncentiveCalculator extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);

    const {
      match: { params },
    } = this.props;

    this.state = {
      platforms: {
        data: {},
        isLoading: true,
      },
      dayswapperstree:'',
      transdirect:'',
      transindirect:'',
      volume:'',
      additionalIncentive:'',

    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
    this.fetchNrtPlatforms();
  }

  async fetchNrtPlatforms() {
    try {
      const res = await Apis.fetchNrtPlatforms();
      console.log('res', res);
      if (res?.length)
        this.setState({
          platforms: {
            data: res,
            isLoading: false,
          },
        });
      else this.openSnackBar(res.error.message);
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        platforms: {
          data: {},
          isLoading: false,
        },
      });
    }
  }

 calculateResult = () =>{
  function txnincentive(dayswapperstree,transdirect,transindirect,volume,additionalIncentive){
    var timeAllyClub = transdirect*volume*((additionalIncentive/100)+0.01)*0.2;
    // var dayswapperTreeReward = (transdirect+ transindirect)volume((additionalIncentive/100)+0.01)*0.2*dayswapperstree;
     var burning = timeAllyClub/2;
     var charity = timeAllyClub/2;
 }
 }


  openSnackBar(message) {
    // this.snackbarRef.current.openSnackBar(message);
  }

  render() {
    return (
      <div className="nrt-manager">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Transactions Charge Incentive Calculator</h2>
        </div>
        <div className="container">
          <div className="BlockPage-detail">
            <Container>
              
              <Row className="mt40 eraswapcal cal-com-page eraswapcal-tab">
                <Col lg={12}>
                   <div class="card">
                                  <div class="card-body">
                                     <div className="row">
                                        <div className="col-lg-12">
                                          <div class="form-row">
                                              <div class="col-md-12 col-lg-12 form-group">
                                                  <label for="">Expected Avg % Earning from Indirect TeamMembers as per Day Swappers Tree</label>
                                                  <input placeholder="" autocomplete="off" type="text" class="form-control" value="" />
                                                
                                              </div>
                                              <div class="col-md-4 col-lg-4 form-group">
                                                  <label for="">No. of Transactions by Directs </label><input placeholder="" autocomplete="off" type="text" class="form-control" value="" />
                                                 
                                              </div>
                                              <div class="col-md-4 col-lg-4 form-group">
                                                  <label for="">No. of Transactions by Indirects </label><input placeholder="" autocomplete="off" type="text" class="form-control" value=""/>
                                               </div>
                                               <div class="col-md-4 col-lg-4 form-group">
                                                  <label for="">Volume of Transactions</label><input placeholder="" autocomplete="off" type="text" class="form-control" value="" />
                                                 
                                              </div>
                                              <div class="col-md-4 col-lg-4 form-group">
                                                  <label for="">Additional Incentive by seller</label><input placeholder="" autocomplete="off" type="text" class="form-control" value=""/>
                                               </div>
                                             
                                          </div>
                                        </div>
                                       
                                     
                                      </div>
                                     <div className="row">
                                     <div className="col-lg-6"></div>
                                      <div className="col-lg-6 text-right">
                                         <a
                                          href=""
                                          className="btn btn-sm"
                                          data-toggle="modal"
                                          data-target="#nrtunsucessful"
                                        >
                                          Calculate 
                                        </a>
                                        </div>
                                        </div>
                                  </div>
                              </div>
                 </Col>
              </Row>

          <div className="mt30 eraswapcal-tab row">
            <div className="col-lg-12" >
              <div  className="card">
                <div className="border-era">RESULTS</div>
                <table className="es-transaction striped bordered hover">
                  <thead>
                    <tr>
                      <th>TRANSACTIONS</th>
                      <th>STAKE REWARDS ES</th>
                      <th>LIQUID REWARDS ES</th>
                    </tr>
                    <tr>
                      <td>TimeAlly Incentive</td>
                      <td>20</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>DaySwappers Tree Incentive</td>
                      <td>8</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Burning</td>
                      <td>8</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Charity</td>
                      <td>8</td>
                      <td></td>
                    </tr>
                   
                  </thead>
                </table>
                </div>
             </div>
             
           
          </div>
    
    

              
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionsIncentiveCalculator;
