import { Component } from 'react';
import { moreDecimals, lessDecimals } from '../../lib/parsers';
import Apis from '../../lib/apis';

export default class ESSupplyChart extends Component {
  async getESPrice() {
    let res;
    try {
      res = await Apis.getESPrice();
      console.log('getESPrice - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      if (
        res?.data?.probitResponse?.data &&
        res?.data?.probitResponse?.data.length &&
        res?.data?.probitResponse?.data[0]?.last
      ) {
        this.esPrice = Number(res?.data?.probitResponse?.data[0].last);
        this.updateMarketCap();
      }

      let totalVolume = 0;

      for (var x in res?.data?.probitResponse?.data) {
        totalVolume += Number(res?.data?.probitResponse?.data[x].base_volume);
      }
      // $('#volume-of-probit').html(window.lessDecimals(String(window.esPrice * totalVolume)) + ' USDT');
      console.log('this.esPrice,totalVolume', this.esPrice, totalVolume);
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            esUSDT:
              this.esPrice ||
              (res?.data?.probitResponse?.data &&
                res?.data?.probitResponse?.data[0]?.last)
                ? res?.data?.probitResponse?.data[0]?.last + ' USDT'
                : '-',
            esBTC:
              res?.data?.probitResponse?.data &&
              res?.data?.probitResponse?.data[1]?.last
                ? moreDecimals(res?.data?.probitResponse?.data[1]?.last) +
                  ' BTC'
                : '-',
            probitVolume:
              lessDecimals(String(this.esPrice * totalVolume)) + ' USDT',
          },
          isLoading: false,
        },
      });
    }
  }

  async esTotalSupply() {
    let res;
    try {
      res = await Apis.esTotalSupply();
      console.log('esTotalSupply - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      if (res?.data?.totalSupply) {
        this.esCurrentSupply = Number(lessDecimals(res.data.totalSupply));
        console.log('start');
        this.updateMarketCap();
        console.log('end');
      }

      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            // esTotalSupply:
            //   (res.data?.totalSupply &&
            //     lessDecimals(res.data.totalSupply) + ' ES') ||
            //   '-',
            circulatingOutsideTA: res?.data?.outsideTimeAllySupply
              ? lessDecimals(res.data.outsideTimeAllySupply) + ' ES'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  updateMarketCap = () => {
    console.log('this.esPrice', this.esPrice);
    console.log('this.esCurrentSupply', this.esCurrentSupply);
    if (this.esPrice && this.esCurrentSupply) {
      let marketCap = String(this.esPrice * this.esCurrentSupply);
      if (marketCap.includes('.')) {
        marketCap = marketCap.split('.')[0];
      }
      console.log('marketCap', marketCap);
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            marketCap,
          },
          isLoading: false,
        },
      });
    }
  };

  render() {
    return <></>;
  }
}
