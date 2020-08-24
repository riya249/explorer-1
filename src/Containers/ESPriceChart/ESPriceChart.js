import React from 'react';
import Apis from '../../lib/apis';
import Navbar from '../../Components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { toLocaleTimestamp } from '../../lib/parsers';
import * as moment from 'moment';

export default class ESPriceChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          zoomType: 'x',
        },

        title: {
          text: 'ES Price Chart',
        },

        subtitle: {
          text: 'Click and drag to zoom',
        },

        tooltip: {
          valueDecimals: 3,
          formatter: function () {
            return `${toLocaleTimestamp(
              new Date(this.key).getTime() * 1000
            ).format('dddd, MMMM DD, YYYY')}<br>
              [ ${this.series.name} : $ ${this.y}]`;
          },
        },

        xAxis: {
          title: 'Date',
          type: 'datetime',
          labels: {
            formatter: function () {
              console.log({value: this.value});
              return toLocaleTimestamp(this.value).format('DD MMMM');
            },
          },
        },

        yAxis: {
          title: {
            text: 'ES Price (USD)',
          },
        },

        series: [
          {
            type: 'area',
            data: null,
            lineWidth: 0.5,
            name: 'Hourly data points',
            // color: {
            //   linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            //   stops: [
            //     [0, '#C1DCF6'], // start
            //     [1, '#FFFFFF'], // end
            //   ],
            // },
          },
        ],

        plotOptions: {
          series: {
            // general options for all series
            color: null,
          },
          area: {
            // shared options for all area series
            color: {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                [0, '#94C2EF'], // start
                [1, '#FFFFFF'], // end
              ],
            },
          },
        },
      },
    };
  }
  componentDidMount() { 
    this.fetchPriceData();
  }
  
  async fetchPriceData() {
    let res;
    try {
      res = await Apis.fetchESPrices();
    } catch (e) {
      console.log(e);
    } finally {
      console.log({res});
      this.setState({
        options: {
          ...this.state.options,
          series: [
            {
              data: res && Array.isArray(res) ? res.map(a => {
                console.log(
                  'current tp',
                  new Date(a.timestamp).getTime() * 1000,
                  new Date(new Date(a.timestamp).getTime() * 1000)
                );
                return [new Date(new Date(a.timestamp).getTime() * 1000), a.price]
              }) : [],
              lineWidth: 0.5,
              name: 'ES Price',
            }
          ]
        }
      },() => console.log({options: this.state.options}))
    }
  }

  render() {
    return (
      <div className="blocks-table">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">ES Price Chart</h2>
        </div>
        <Container>
          <HighchartsReact highcharts={Highcharts} options={this.state.options} />
        </Container>
      </div>
    );;
  }
}
