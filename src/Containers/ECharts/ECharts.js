import React from 'react';
import ELineChart from '../../Components/ELineChart/ELineChart';
import Navbar from '../../Components/Navbar/Navbar';
import { Container } from 'react-bootstrap';

class ECharts extends React.Component {
  render() {
    return (
      <div className="blocks-table">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Charts</h2>
        </div>
        <Container>
          <ELineChart />
        </Container>
      </div>
    );
  }
}

export default ECharts;
