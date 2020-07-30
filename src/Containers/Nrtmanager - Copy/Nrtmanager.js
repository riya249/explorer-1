import React, { Component } from 'react';
import './nrtmanager.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';

class Nrtmanager extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);

    const {
      match: { params },
    } = this.props;

    this.state = {
      bunchIndex: params.bunchIndex,
      bunch: {
        data: {},
        isLoading: true,
      },
    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
    this.fetchBunch();
  }

  async fetchBunch() {
    try {
      const res = await Apis.fetchBunch(this.state.bunchIndex);
      if (res.status)
        this.setState({
          bunch: {
            data: res.data,
            isLoading: false,
          },
        });
      else this.openSnackBar(res.error.message);
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        bunch: {
          data: {},
          isLoading: false,
        },
      });
    }
  }

  openSnackBar(message) {
    this.snackbarRef.current.openSnackBar(message);
  }

  render() {
    return (
      <div>
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">NRT Manager</h2>
        </div>
        <div className="wrapper-container">
          <div className="BlockPage-detail">
            <Container>
              <Row>
                <Col lg={6}>Current NRT Month: 3</Col>
                <Col lg={6} className="text-right">
                  <a
                    href=""
                    className="btn btn-sm"
                    data-toggle="modal"
                    data-target="#nrtunsucessful"
                  >
                    RELEASE MONTLY NRT
                  </a>
                </Col>
              </Row>

              <div
                className="modal fade nrt-modal"
                id="nrtsucessful"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        <img
                          className="img-fluid"
                          alt="Logo"
                          src={Images.path.escolorlogo}
                        />
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="nrt-sucessful text-center">
                        <i
                          className="fa fa-check-circle "
                          aria-hidden="true"
                        ></i>
                        <p className="green">Release Monthly NRT Sucessful</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade nrt-modal"
                id="nrtunsucessful"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        <img
                          className="img-fluid"
                          alt="Logo"
                          src={Images.path.escolorlogo}
                        />
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="nrt-unsucessful text-center">
                        <i
                          className="fa fa-check-circle "
                          aria-hidden="true"
                        ></i>
                        <p className="green">Release Monthly NRT Unsucessful</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-item row">
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasetime}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasetimeally}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>

                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecaseswapperswall}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasetimeallyclub}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasebuzcafe}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecaseswapperswall}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasedayswappers}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecaseeraswapacademy}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasebetdeex}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasecomputeex}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasedateswappers}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecaseeraswapwallet}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasecoupondapp}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasevof}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasecuredapp}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecaserentingdapp}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasepoolindapp}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasekycdapp}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecaserecyclingdapp}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasecharitydapp}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasefaithminus}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
                <div className="item ms col-lg-3 col-md-4 col-6 text-center mt20">
                  <img
                    className="img-fluid"
                    alt="Logo"
                    src={Images.path.usecasecertidapp}
                  />
                  <p className="nrt-share mt10">NRT Share: 15%</p>
                  <p className="nrt-hashnumber">
                    <i
                      className="fa fa-file value-dash-txt"
                      aria-hidden="true"
                    ></i>{' '}
                    0xee42b2Dcc3d32AD5E736df6245AD8A88a70ba6bF{' '}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Nrtmanager;
