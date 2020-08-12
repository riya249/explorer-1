import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tooltip } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Responsive from '../../Responsive/Responsive.css';
import Card from 'react-bootstrap/Card';
import Apis from '../../lib/apis';
import { moreDecimals, lessDecimals } from '../../lib/parsers';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from 'recharts';

const COLORS = ['#959595', '#747FEB'];

class Dashboard extends Component {
  esPrice = null;
  esCurrentSupply = null;

  constructor(props) {
    super(props);
    this.state = {
      eraswap: {
        data: {
          esUSDT: 'Loading...',
          esBTC: 'Loading...',
          esTotalSupply: 'Loading...',
          totolESUsers: 'Loading...',
          totalESStaked: 'Loading...',
          btcUsd: 'Loading...',
          ethUsd: 'Loading...',
          circulatingOutsideTA: 'Loading...',
          currentNrtES: 'Loading...',
          numberOfDayswappers: 'Loading...',
          ecosystemTransactions: 'Loading...',
          ecosystemVolume: 'Loading...',
          unUsedPowertokens: 'Loading...',
          luckPoolNrt: 'Loading...',
          burnPool: 'Loading...',
          totalESBurned: 'Loading...',
          marketCap: 'Loading...',
          crownfundPrice: 'Loading...',
          allTimeHigh: '1.42 USDT',
          allTimeLow: '0.005 USDT',
          probitVolume: 'Loading...',
        },
        isLoading: true,
      },
      platformWiseTFC: {
        data: {
          timeswappers: 'Loading...',
          buzcafe: 'Loading...',
          betdeex: 'Loading...',
          computeex: 'Loading...',
          timeallyClub: 'Loading...',
          timeallyPartners: 'Loading...',
          eraswapAcademy: 'Loading...',
        },
        isLoading: true,
      },
      charity: {
        data: {
          collect: 'Loading...',
          given: 'Loading...',
        },
        isLoading: true,
      },
      roi: 'Loading...',
      lastMonthUtilisation: {
        data: {
          timeswappers: {
            percent: 'Loading...',
            volume: 'Loading...',
            value: 'Loading...',
          },
          dayswappers: {
            percent: 'Loading...',
            volume: 'Loading...',
            value: 'Loading...',
          },
          buzcafe: {
            percent: 'Loading...',
            volume: 'Loading...',
            value: 'Loading...',
          },
          curators: {
            percent: 'Loading...',
            volume: 'Loading...',
            value: 'Loading...',
          },
        },
        isLoading: true,
      },
      nextNrtCounter: {
        data: {
          days: '-',
          hours: '-',
          minutes: '-',
          seconds: '-',
        },
        isLoading: true,
      },
      timeswappers: {
        data: {
          users: 'Loading...',
          freelancers: 'Loading...',
          tfc: 'Loading...',
          verified: 'Loading...',
          certified: 'Loading...',
          deposits: 'Loading...',
          withdrawals: 'Loading...',
          viewsOnPortfolioPages: 'Loading...',
          jobsPosted: 'Loading...',
          jobsDone: 'Loading...',
        },
        isLoading: true,
      },
      dayswappers: {
        data: {
          users: 'Loading...',
          totalLiquidRewards: 'Loading...',
          totalTimeAllyRewards: 'Loading...',
          activeUsers: 'Loading...',
          kycUsers: 'Loading...',
          whiteBelt: 'Loading...',
          yellowBelt: 'Loading...',
          orangeBelt: 'Loading...',
          greenBelt: 'Loading...',
          blueBelt: 'Loading...',
          brownBelt: 'Loading...',
          redBelt: 'Loading...',
          blackBelt: 'Loading...',
        },
        isLoading: true,
      },
      swapperswall: {
        data: {
          powertokens: 'Loading...',
          clubs: 'Loading...',
          circles: 'Loading...',
          pages: 'Loading...',
          swappers: 'Loading...',
          activeUsers: 'Loading...',
          uploads: 'Loading...',
        },
        isLoading: true,
      },
      eraswapAcademy: {
        data: {
          users: 'Loading...',
          courses: 'Loading...',
          deposits: 'Loading...',
          usersStuding: 'Loading...',
        },
        isLoading: true,
      },
      buzcafe: {
        data: {
          users: 'Loading...',
          shops: 'Loading...',
          deposits: 'Loading...',
          withdrawals: 'Loading...',
          internalTransactions: 'Loading...',
        },
        isLoading: true,
      },
      betdeex: {
        data: {
          events: 'Loading...',
          predictors: 'Loading...',
          esVolumePredicted: 'Loading...',
          highestPrediction: 'Loading...',
          averagePrediction: 'Loading...',
        },
        isLoading: true,
      },
      timeallyStakers: {
        data: {
          volumeOfOneYearStakings: 'Loading...',
          volumeOfTwoYearStakings: 'Loading...',
          totalStakings: 'Loading...',
          nrtReleasedForTimeAlly: 'Loading...',
          chartData: [],
        },
        isLoading: true,
      },
      computeex: {
        data: {
          totalTransactions: 0,
          totalVolume: 0,
        },
        isLoading: true,
      },
      kycDapp: {
        data: {
          levelOneCount: 0,
          levelTwoCount: 0,
          levelThreeCount: 0,
          allPlatformKycs: 0,
        },
        isLoading: false,
      },
    };
  }

  componentDidMount() {
    this.etherPriceUsd();
    this.bitcoinCrowdFundPrice();
    this.ltcPriceUsd();
    this.getESPrice();
    this.esTotalSupply();
    this.holdersOfEraSwap();
    this.luckPoolBal();
    this.burnTokenBal();
    this.totalTokensBurned();
    this.nrtFractions();
    this.getNumberOfStakings();
    this.getStakingPlanStatistics();
    this.getPlatformDetailsAllTime();
    this.getNumberOfBets();
    this.getBettingDetails();
    this.powerTokenDetails();
    this.getTotalReward();
    this.transactionSplits();
    this.dayswappersOverview();
    this.totalNoOfUser();
    this.totalNoOfFreelancerOrSeller();
    this.totalViewsOnProfile();
    this.totalNoOfVerifiedUser();
    this.totalNoOfCertifiedUser();
    this.totalNoOfDeposit();
    this.totalNoOfWithdraw();
    this.totalJobsPosted();
    this.totalJobsDone();
    this.TfcGenerated();
    this.swapperswalletTotalFeeds();
    this.swapperswallTopTenreceivers();
    this.userscount();
    this.courses();
    this.deposits();
    this.userstudying();
    this.buzcafeUserscount();
    this.buzcafeDepositscount();
    this.buzcafeShopscount();
    this.buzcafeWithdrawalscount();
    this.buzcafeTransactionscount();
    this.nrtTicker();
  }

  async etherPriceUsd() {
    let res;
    try {
      res = await Apis.etherPriceUsd();
      console.log('etherPriceUsd - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            ethUsd: res.status == 1 ? '$' + res.result.ethusd : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async bitcoinCrowdFundPrice() {
    let res;
    try {
      res = await Apis.bitcoinCrowdFundPrice();
      console.log('bitcoinCrowdFundPrice - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            btcUsd: res.USD && res.USD['15m'] ? '$' + res.USD['15m'] : '-',
            crownfundPrice: '$0.0056',
          },
          isLoading: false,
        },
      });
    }
  }

  async ltcPriceUsd() {
    let res;
    try {
      res = await Apis.ltcPriceUsd();
      console.log('ltcPriceUsd - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        recordName: {
          data: {},
          isLoading: false,
        },
      });
    }
  }

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
              res?.data?.probitResponse?.data &&
              res?.data?.probitResponse?.data[0]?.last
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
        this.updateMarketCap();
      }

      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            esTotalSupply:
              (res.data?.totalSupply &&
                lessDecimals(res.data.totalSupply) + ' ES') ||
              '-',
            circulatingOutsideTA: res?.data?.outsideTimeAllySupply
              ? lessDecimals(res.data.outsideTimeAllySupply) + ' ES'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async holdersOfEraSwap() {
    let res;
    try {
      res = await Apis.holdersOfEraSwap();
      console.log('holdersOfEraSwap - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            totolESUsers: res.data?.numberOfAddresses
              ? res.data?.numberOfAddresses + ' addresses'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async luckPoolBal() {
    let res;
    try {
      res = await Apis.luckPoolBal();
      console.log('luckPoolBal - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            luckPoolNrt: res?.data?.luckPoolBal
              ? lessDecimals(res.data.luckPoolBal) + ' ES'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async burnTokenBal() {
    let res;
    try {
      res = await Apis.burnTokenBal();
      console.log('burnTokenBal - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            burnPool: res?.data?.burnTokenBal
              ? lessDecimals(res.data.burnTokenBal) + ' ES'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalTokensBurned() {
    let res;
    try {
      res = await Apis.totalTokensBurned();
      console.log('totalTokensBurned - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap?.data,
            totalESBurned: res?.data?.totalTokensBurned
              ? lessDecimals(res?.data?.totalTokensBurned) + ' ES'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async nrtFractions() {
    let res;
    try {
      res = await Apis.nrtFractions();
      console.log('nrtFractions - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap?.data,
            currentNrtES: res?.data?.actualNRTDistributed
              ? lessDecimals(res.data?.actualNRTDistributed) + ' ES'
              : '-',
          },
          isLoading: false,
        },
        lastMonthUtilisation: {
          data: {
            ...this.state.lastMonthUtilisation?.data,
            timeswappers: {
              percent: '-',
              volume: res.data?.workPoolCalculation?.timetraders
                ? lessDecimals(res.data?.workPoolCalculation?.timetraders) +
                  ' ES'
                : '-',
              value: '-',
            },
            dayswappers: {
              percent: '-',
              volume: res?.data?.workPoolCalculation?.dayswappers
                ? lessDecimals(res?.data?.workPoolCalculation?.dayswappers) +
                  ' ES'
                : '-',
              value: '-',
            },
            buzcafe: {
              percent: '-',
              volume: res?.data?.workPoolCalculation?.buzcafe
                ? lessDecimals(res?.data?.workPoolCalculation?.buzcafe) + ' ES'
                : '-',
              value: '-',
            },
            curators: {
              percent: '-',
              volume: res?.data?.workPoolCalculation?.curators
                ? lessDecimals(res?.data?.workPoolCalculation?.curators) + ' ES'
                : '-',
              value: '-',
            },
          },
          isLoading: false,
        },
        swapperswall: {
          data: {
            powertokens: res?.data?.actualNRTDistribution?.powerTokenNRT
              ? lessDecimals(res?.data?.actualNRTDistribution?.powerTokenNRT)
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async getNumberOfStakings() {
    let res;
    try {
      res = await Apis.getNumberOfStakings();
      console.log('getNumberOfStakings - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        recordName: {
          data: {},
          isLoading: false,
        },
      });
    }
  }

  async getStakingPlanStatistics() {
    let res;
    try {
      res = await Apis.getStakingPlanStatistics();
      console.log('getStakingPlanStatistics - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      const volumeOfOneYearStakings = res?.data?.plan0Amount
        ? lessDecimals(res.data.plan0Amount)
        : 0;
      const volumeOfTwoYearStakings = res?.data?.plan1Amount
        ? lessDecimals(res.data.plan1Amount)
        : 0;
      console.log('volumeOfOneYearStakings', volumeOfOneYearStakings);
      console.log('volumeOfTwoYearStakings', volumeOfTwoYearStakings);
      this.setState({
        timeallyStakers: {
          data: {
            ...this.state.timeallyStakers.data,
            volumeOfOneYearStakings: volumeOfOneYearStakings
              ? volumeOfOneYearStakings + ' ES'
              : 0,
            volumeOfTwoYearStakings: volumeOfTwoYearStakings
              ? volumeOfTwoYearStakings + ' ES'
              : 0,
            chartData: [
              {
                name: 'Volume 1',
                value: Number(volumeOfOneYearStakings),
              },
              {
                name: 'Volume 2',
                value: Number(volumeOfTwoYearStakings),
              },
            ],
          },
          isLoading: false,
        },
      });
    }
  }

  async getPlatformDetailsAllTime() {
    let res;
    try {
      res = await Apis.getPlatformDetailsAllTime();
      console.log('getPlatformDetailsAllTime - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            totalESStaked: res?.data?.totalStaking
              ? lessDecimals(res.data.totalStaking) + ' ES'
              : '-',
          },
          isLoading: false,
        },
        timeallyStakers: {
          data: {
            ...this.state.timeallyStakers.data,
            stakings: res?.data?.totalStaking
              ? lessDecimals(res?.data?.totalStaking) + ' ES'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async getNumberOfBets() {
    let res;
    try {
      res = await Apis.getNumberOfBets();
      console.log('getNumberOfBets - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        betdeex: {
          data: {
            ...this.state.betdeex.data,
            events: res?.data?.numberOfBets
              ? res.data.numberOfBets + ' events'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async getBettingDetails() {
    let res;
    try {
      res = await Apis.getBettingDetails();
      console.log('getBettingDetails - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        betdeex: {
          data: {
            ...this.state.betdeex.data,
            predictors: res?.data?.numberOfPredictors
              ? res.data.numberOfPredictors +
                ' predictor' +
                (res.data.numberOfPredictors !== 1 ? 's' : '')
              : '-',
            esVolumePredicted: res?.data?.totalBetAmount
              ? lessDecimals(res.data.totalBetAmount) + ' ES'
              : '-',
            highestPrediction: res?.data?.highestBetAmount
              ? lessDecimals(res.data.highestBetAmount) + ' ES'
              : '-',
            averagePrediction: res?.data?.averagePrediction
              ? lessDecimals(res.data.averagePrediction) + ' ES'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async powerTokenDetails() {
    let res;
    try {
      res = await Apis.powerTokenDetails();
      console.log('powerTokenDetails - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            unUsedPowertokens: res?.data?.error
              ? 'Inactive'
              : lessDecimals(res?.data?.unusedPowerToken) + ' ES',
          },
          isLoading: false,
        },
      });
    }
  }

  async getTotalReward() {
    let res;
    try {
      res = await Apis.getTotalReward();
      console.log('getTotalReward - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        dayswappers: {
          data: {
            ...this.state.dayswappers.data,
            totalLiquidRewards: res?.data?.liquidTotal
              ? lessDecimals(res.data.liquidTotal) + ' ES'
              : '-',
            totalTimeAllyRewards: res?.data?.timeallyTotal
              ? lessDecimals(res.data.timeallyTotal) + ' ES'
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  //pending
  async transactionSplits() {
    let res;
    try {
      res = await Apis.transactionSplits();
      console.log('transactionSplits - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            ecosystemTransactions: res.platform_count
              ? res.platform_count + ' txns'
              : '-',
            ecosystemVolume: res.platform_count
              ? res.platform_volume + ' ES'
              : '-',
          },
          isLoading: false,
          platformWiseTFC: {
            data: {
              timeswappers: res?.Timeswappers?.tfc,
              buzcafe: res?.Buzcafe?.tfc,
              betdeex: res?.BetdeEx?.tfc,
              computeex: 0,
              timeallyClub: res?.['Timeally Club']?.tfc,
              TimeAlly: res?.['Timeally']?.tfc,
              eraswapAcademy: 0,
            },
            isLoading: true,
          },
        },
      });
      // let totalAmount = 0;
      //   const platformTFC = {};
      //   for(const entry in res) {
      //     this.isOnProduction || console.log('entry', entry);
      //     totalAmount += res[entry].amount;
      //     if(platformTFC[entry] !== undefined) {
      //       platformTFC[entry] += res[entry].tfc;
      //     } else {
      //       platformTFC[entry] = res[entry].tfc;
      //     }
      //   }
      //   this.isOnProduction || console.log('dayswappers platformTFC', platformTFC);
      //   $("#platform-transactions-number").html(res.platform_count+' txns');
      //   $("#volume-of-platform").html(res.platform_volume+' ES');

      //   const maxValue = Math.ceil((Math.max(platformTFC['Time Swappers'] || 0,
      //             platformTFC['Buzcafe'] || 0,
      //             platformTFC['Day Swappers'] || 0,
      //             platformTFC['BetdeEx'] || 0,
      //             platformTFC['ComputeEx'] || 0,
      //             platformTFC['TimeAlly'] || 0))/1000)*1000;
      // this.setState({
      //   recordName:{
      //     data: {

      //     },
      //     isLoading: false,
      //   }
      // })
    }
  }

  async dayswappersOverview() {
    let res;
    try {
      res = await Apis.dayswappersOverview();
      console.log('dayswappersOverview - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswap: {
          data: {
            ...this.state.eraswap.data,
            numberOfDayswappers: res?.total_no_of_user
              ? res.total_no_of_user + ' users'
              : '-',
          },
        },
        dayswappers: {
          data: {
            ...this.state.dayswappers.data,
            users:
              res?.total_no_of_user !== undefined
                ? res.total_no_of_user + ' users'
                : '-',
            activeUsers:
              res?.active_users !== undefined
                ? res.active_users + ' user' + (res.kyc_users > 1 ? 's' : '')
                : '-',
            kycUsers:
              res?.kyc_users !== undefined
                ? res.kyc_users + ' user' + (res.kyc_users > 1 ? 's' : '')
                : '-',
            whiteBelt:
              res?.White !== undefined
                ? res.White + ' user' + (res.White !== 1 ? 's' : '')
                : '-',
            yellowBelt:
              res?.Yellow !== undefined
                ? res.Yellow + ' user' + (res.Yellow !== 1 ? 's' : '')
                : '-',
            orangeBelt:
              res?.Orange !== undefined
                ? res.Orange + ' user' + (res.Orange !== 1 ? 's' : '')
                : '-',
            greenBelt:
              res?.Green !== undefined
                ? res.Green + ' user' + (res.Green !== 1 ? 's' : '')
                : '-',
            blueBelt:
              res?.Blue !== undefined
                ? res.Blue + ' user' + (res.Blue !== 1 ? 's' : '')
                : '-',
            brownBelt:
              res?.Brown !== undefined
                ? res.Brown + ' user' + (res.Brown !== 1 ? 's' : '')
                : '-',
            redBelt:
              res?.Red !== undefined
                ? res.Red + ' user' + (res.Red !== 1 ? 's' : '')
                : '-',
            blackBelt:
              res?.Black !== undefined
                ? res.Black + ' user' + (res.Black !== 1 ? 's' : '')
                : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalNoOfUser() {
    let res;
    try {
      res = await Apis.totalNoOfUser();
      console.log('totalNoOfUser - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            users: res?.data
              ? res.data + ' user' + (res.data > 1 ? 's' : '')
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalNoOfFreelancerOrSeller() {
    let res;
    try {
      res = await Apis.totalNoOfFreelancerOrSeller();
      console.log('totalNoOfFreelancerOrSeller - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            freelancers: res?.data
              ? res.data + ' user' + (res.data > 1 ? 's' : '')
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalViewsOnProfile() {
    let res;
    try {
      res = await Apis.totalViewsOnProfile();
      console.log('totalViewsOnProfile - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            viewsOnPortfolioPages: res.data
              ? res.data + ' view' + (res.data > 1 ? 's' : '')
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalNoOfVerifiedUser() {
    let res;
    try {
      res = await Apis.totalNoOfVerifiedUser();
      console.log('totalNoOfVerifiedUser - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            verified: res.data
              ? res.data + ' user' + (res.data > 1 ? 's' : '')
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalNoOfCertifiedUser() {
    let res;
    try {
      res = await Apis.totalNoOfCertifiedUser();
      console.log('totalNoOfCertifiedUser - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            certified: res.data
              ? res.data + ' user' + (res.data > 1 ? 's' : '')
              : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalNoOfDeposit() {
    let res;
    try {
      res = await Apis.totalNoOfDeposit();
      console.log('totalNoOfDeposit - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            deposits: res?.data ? res.data + ' ES' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalNoOfWithdraw() {
    let res;
    try {
      res = await Apis.totalNoOfWithdraw();
      console.log('totalNoOfWithdraw - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            withdrawals: res?.data !== undefined ? res.data + ' ES' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalJobsPosted() {
    let res;
    try {
      res = await Apis.totalJobsPosted();
      console.log('totalJobsPosted - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            jobsPosted:
              res?.data !== undefined
                ? res.data + ' job' + (res.data > 1 ? 's' : '')
                : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async totalJobsDone() {
    let res;
    try {
      res = await Apis.totalJobsDone();
      console.log('totalJobsDone - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            jobsDone:
              res?.data !== undefined
                ? res.data + ' job' + (res.data > 1 ? 's' : '')
                : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async TfcGenerated() {
    let res;
    try {
      res = await Apis.TfcGenerated();
      console.log('TfcGenerated - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        timeswappers: {
          data: {
            ...this.state.timeswappers.data,
            tfc: res?.data ? res.data + ' ES' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async swapperswalletTotalFeeds() {
    let res;
    try {
      res = await Apis.swapperswalletTotalFeeds();
      console.log('swapperswalletTotalFeeds - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        swapperswall: {
          data: {
            ...this.state.swapperswall.data,
            clubs: res.data.communities + ' clubs',
            circles: res.data.groups + ' groups',
            pages: res.data.pages + ' pages',
            swappers: res.data.friends + ' swappers',
            activeUsers: res.data.activeUsers + ' active users',
            uploads: res.data.mediaUploads + ' media uploads',
          },
          isLoading: false,
        },
      });
    }
  }

  async swapperswallTopTenreceivers() {
    let res;
    try {
      res = await Apis.swapperswallTopTenreceivers();
      console.log('swapperswallTopTenreceivers - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        recordName: {
          data: {},
          isLoading: false,
        },
      });
    }
  }

  async userscount() {
    let res;
    try {
      res = await Apis.userscount();
      console.log('userscount - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswapAcademy: {
          data: {
            ...this.state.eraswapAcademy.data,
            users: res?.data !== undefined ? res.data + ' users' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async courses() {
    let res;
    try {
      res = await Apis.courses();
      console.log('courses - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswapAcademy: {
          data: {
            ...this.state.eraswapAcademy.data,
            courses: res?.data !== undefined ? res.data + ' courses' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async deposits() {
    let res;
    try {
      res = await Apis.deposits();
      console.log('deposits - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswapAcademy: {
          data: {
            ...this.state.eraswapAcademy.data,
            deposits: res?.data !== undefined ? res.data + ' ES' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async userstudying() {
    let res;
    try {
      res = await Apis.userstudying();
      console.log('userstudying - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        eraswapAcademy: {
          data: {
            ...this.state.eraswapAcademy.data,
            usersStuding: res?.data !== undefined ? res.data + ' users' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async buzcafeUserscount() {
    let res;
    try {
      res = await Apis.buzcafeUserscount();
      console.log('buzcafeUserscount - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        buzcafe: {
          data: {
            ...this.state.buzcafe.data,
            users: res?.data ? res.data + ' users' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async buzcafeShopscount() {
    let res;
    try {
      res = await Apis.buzcafeShopscount();
      console.log('buzcafeShopscount - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        buzcafe: {
          data: {
            ...this.state.buzcafe.data,
            shops: res?.data !== undefined ? res.data + ' shops' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async buzcafeDepositscount() {
    let res;
    try {
      res = await Apis.buzcafeDepositscount();
      console.log('buzcafeDepositscount - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        buzcafe: {
          data: {
            ...this.state.buzcafe.data,
            deposits: res?.data ? res.data + ' deposits' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async buzcafeWithdrawalscount() {
    let res;
    try {
      res = await Apis.buzcafeWithdrawalscount();
      console.log('buzcafeWithdrawalscount - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        buzcafe: {
          data: {
            ...this.state.buzcafe.data,
            withdrawals:
              res?.data !== undefined ? res.data + ' withdrawals' : '-',
          },
          isLoading: false,
        },
      });
    }
  }

  async buzcafeTransactionscount() {
    let res;
    try {
      res = await Apis.buzcafeTransactionscount();
      console.log('buzcafeTransactionscount - res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        buzcafe: {
          data: {
            ...this.state.buzcafe.data,
            internalTransactions: res?.data ? res.data + ' transactions' : '-',
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

  nrtTicker() {
    /// @dev countdown timer for nrt release
    const deployTimestamp = 1564336091 * 1000;
    const monthDuration = 2629744 * 1000;

    let seeFutureNrt = false;
    let currentNrtMonthNumber = 0;
    // let nextNrtTimestamp = deployTimestamp + monthDuration * (currentNrtMonthNumber + 1);

    setInterval(async () => {
      try {
        const res = await Apis.getCurrentNRTMonth();
        if (!currentNrtMonthNumber) {
          currentNrtMonthNumber = res.data.nrtMonth;
        } else if (
          res.data.nrtMonth !== currentNrtMonthNumber &&
          !seeFutureNrt
        ) {
          window.location.reload();
        }
      } catch (e) {
        console.log(e);
      }
    }, 3500);

    setInterval(() => {
      const nextNrtTimestamp =
        deployTimestamp + monthDuration * (currentNrtMonthNumber + 1);
      const currentTimestamp = Date.now();

      const timeRemaining =
        nextNrtTimestamp > currentTimestamp
          ? nextNrtTimestamp - currentTimestamp
          : 0;

      //     window.isOnProduction || console.log(timeRemaining);

      const daysRemaining = Math.floor(timeRemaining / 1000 / 24 / 60 / 60);
      const hoursRemaining = Math.floor(
        (timeRemaining - daysRemaining * 1000 * 24 * 60 * 60) / 1000 / 60 / 60
      );
      const minutesRemaining = Math.floor(
        (timeRemaining -
          daysRemaining * 1000 * 24 * 60 * 60 -
          hoursRemaining * 1000 * 60 * 60) /
          1000 /
          60
      );
      const secondsRemaining = Math.floor(
        (timeRemaining -
          daysRemaining * 1000 * 24 * 60 * 60 -
          hoursRemaining * 1000 * 60 * 60 -
          minutesRemaining * 1000 * 60) /
          1000
      );

      // window.isOnProduction || console.log(daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining);

      this.setState({
        nextNrtCounter: {
          data: {
            days: daysRemaining,
            hours: hoursRemaining,
            minutes: minutesRemaining,
            seconds: secondsRemaining,
          },
          isLoading: false,
        },
      });
    }, 1000);
  }

  render() {
    return (
      <div className="bgd-dash-color dashboard-box">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Dashboard</h2>
        </div>
        <div className="dashboard-main-bgd">
          <div className="row">
            <Col lg={9}>
              <div className="sub-dashboard">
                <Col lg={3}>
                  <h5 className="">Era Swap (ES)</h5>
                  <h5 className="sub-dash-head">
                    {this.state.eraswap.data.esUSDT}{' '}
                  </h5>
                </Col>
                <Col lg={3}>
                  <div className="sub-supply-box mb10">
                    <div className="es-box-ds">
                      <p className="supply-txt">MARKET CAP</p>
                      <p className="supply-txt">
                        {this.state.eraswap.data.marketCap}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="sub-supply-box mb10">
                    <div className="es-box-ds">
                      <p className="supply-txt">TOTAL ES Owners</p>
                      <p className="supply-txt">
                        {this.state.eraswap.data.totolESUsers}{' '}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="sub-supply-box mb10">
                    <div className="es-box-ds">
                      <p className="supply-txt">TOTAL STAKED ES</p>
                      <p className="supply-txt">
                        {this.state.eraswap.data.totalESStaked}{' '}
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
            <Col lg={3}>
              <h5 className="nrt-head">Next NRT Count</h5>
              <div className="count-box d-flex justify-content-lg-around  ">
                <ul className="flex-count-box">
                  <li className="count-txt">
                    {this.state.nextNrtCounter.data.days}
                    <p>DAYS</p>
                  </li>
                  <li className="count-txt">
                    {this.state.nextNrtCounter.data.hours}
                    <p>HOURS</p>
                  </li>
                  <li className="count-txt">
                    {this.state.nextNrtCounter.data.minutes}
                    <p>MINUTES</p>
                  </li>
                  <li className="count-txt">
                    {this.state.nextNrtCounter.data.seconds}
                    <p>SECONDS</p>
                  </li>
                </ul>
              </div>
            </Col>
          </div>
        </div>
        <div className="container-fluid bgd-dash-color">
          <div className="dash-section-2">
            <Row>
              <Col sm={6} lg={2}>
                <Card>
                  <Card.Body>
                    <p className="sect-txt-bold ">ES CURRENT SUPPLY</p>
                    <p className="value-dash-txt">
                      {this.state.eraswap.data.circulatingOutsideTA}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={2} p-0>
                <Card>
                  <Card.Body>
                    <p className="sect-txt-bold">TOTAL SUPPLY</p>
                    <p className="value-dash-txt">
                      {this.state.eraswap.data.esTotalSupply}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={2}>
                <Card>
                  <Card.Body>
                    <p className="sect-txt-bold">MAXIMUM SUPPLY</p>
                    <p className="value-dash-txt">9100000000 ES</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={2} p-0>
                <Card>
                  <Card.Body>
                    <p className="sect-txt-bold">ES FROM NRT THIS MONTH</p>
                    <p className="value-dash-txt">
                      {this.state.eraswap.data.currentNrtES}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={2}>
                <Card>
                  <Card.Body>
                    <p className="sect-txt-bold">NUMBER OF DAYSWAPPERS</p>
                    <p className="value-dash-txt">
                      {this.state.eraswap.data.numberOfDayswappers}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} lg={2}>
                <Card>
                  <Card.Body>
                    <p className="sect-txt-bold">ECOSYSTEM TRANSACTIONS</p>
                    <p className="value-dash-txt">
                      {this.state.eraswap.data.ecosystemTransactions}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="wrapper-sub-section">
              <Row className="d-flex justify-content-lg-around">
                <Col sm={6} lg={2}>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">ECOSYSTEM VOLUME</p>
                      <p className="value-dash-txt">
                        {this.state.eraswap.data.ecosystemVolume}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={2}>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">UNUSED POWER TOKENS</p>
                      <p className="value-dash-txt">
                        {this.state.eraswap.data.unUsedPowertokens}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={2}>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">LUCK POOL IN NRT</p>
                      <p className="value-dash-txt">
                        {this.state.eraswap.data.luckPoolNrt}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={2}>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">BURN POOL (IN NEXT NRT)</p>
                      <p className="value-dash-txt">
                        {this.state.eraswap.data.burnPool}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={2}>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">TOTAL ES BURNED</p>
                      <p className="value-dash-txt">
                        {this.state.eraswap.data.totalESBurned}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="d-flex justify-content-lg-around">
                <Col sm={6} lg={2} p-0>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">MARKET CAP</p>
                      <p className="value-dash-txt">
                        {this.state.eraswap.data.marketCap}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={2} p-0>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">24 HR VOL (PROBIT GLOBAL)</p>
                      <p className="value-dash-txt">
                        {this.state.eraswap.data.probitVolume}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={2} p-0>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">CROWDFUND PRICE</p>
                      <p className="value-dash-txt">
                        {this.state.eraswap.data.crownfundPrice}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={2} p-0>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">ALL TIME HIGH</p>
                      <p className="value-dash-txt">1.42 $</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={2} p-0>
                  <Card className="height-80 wd-120 ">
                    <Card.Body>
                      <p className="sect-txt-bold">ALL TIME LOW</p>
                      <p className="value-dash-txt">0.005 $</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        {/* <div className="dash-section-4">
          <Row>
            <Col lg={6}>
              <div className="section4-border tfc-box">
                <div className="flex-sect4-box">
                  <p className="platfrm-txt">
                    All Platform TFC Generated of this month
                  </p>
                  <div>
                    <BarChart width={730} height={250} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="#8884d8" />
                      <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <div className="section4-border charity-box">
                    <div className="flex-sect4-box">
                      <p className="platfrm-txt">Charity Pool</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="section4-border roi-box">
                    <div className="flex-sect4-box">
                      <p className="platfrm-txt">ROI</p>
                    </div>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="section4-border nrt-box">
                    <div className="flex-sect4-box">
                      <p className="platfrm-txt">
                        Last Month Work Pool NRT Utilisation
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div> */}
        <div className="dash-section-4">
          <Row>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo"
                    src={Images.path.timeally}
                    alt="logo"
                  />
                  <p className="platfrm-txt"> TIMEALLY STAKERS</p>
                </div>
                <Row>
                  <Col sm={7}>
                    <PieChart width={300} height={300}>
                      <Pie
                        data={this.state.timeallyStakers.data.chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                      >
                        {this.state.timeallyStakers.data.chartData.map(
                          (entry, index) => (
                            <Cell fill={COLORS[index % COLORS.length]}>
                              {/* <Tooltip /> */}
                            </Cell>
                          )
                        )}
                      </Pie>
                    </PieChart>
                  </Col>
                  <Col sm={5}>
                    {/**
                     * @todo values to be integrated
                     */}
                    <div className="flex-sect4-box">
                      <div className="timeally-mark"></div>
                      <p className="sect4-context">Current Supply {0}</p>
                    </div>
                    <div className="flex-sect4-box">
                      <div className="timeally-mark2"></div>
                      <p className="sect4-context">
                        ES Staked in TimeAlly 1 LT
                        {0}
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className="timelly-flex tm-border">
                  <p className="sect4-context">Total Volume of Stakings</p>
                  <p className="sect4-value-bold">
                    {this.state.timeallyStakers.data.totalStakings}
                  </p>
                </div>
                <div className="timelly-border-flex">
                  <p className="sect4-context">NRT Released For TimeAlly</p>
                  <p className="sect4-value-bold">
                    {this.state.timeallyStakers.data.nrtReleasedForTimeAlly}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo2"
                    src={Images.path.timeswapper}
                    alt="logo"
                  />
                  <p className="platfrm-txt">TIMESWAPPERS</p>
                </div>
                <div className="ts-flex tm-border">
                  <div>
                    <p className="sect4-context">Total Number of Users</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.users}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">
                      Total Number of Freelancers/Services
                    </p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.freelancers}
                    </p>
                  </div>
                </div>
                <div className="ts-flex tm-border">
                  <div>
                    <p className="sect4-context">TFC generated</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.tfc}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Verified</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.verified}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Certified</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.certified}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Deposit Done</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.deposits}
                    </p>
                  </div>
                </div>
                <div className="ts-flex tm-border">
                  <div>
                    <p className="sect4-context">Number of Views on </p>
                    <p className="sect4-context">Freelancer Portfolio pages</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.viewsOnPortfolioPages}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Withdraw done</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.withdrawals}
                    </p>
                  </div>
                </div>
                <div className="timelly-border-flex">
                  <div>
                    <p className="sect4-context">Total Jobs Posted</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.jobsPosted}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Jobs Done</p>
                    <p className="sect4-value">
                      {this.state.timeswappers.data.jobsDone}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo"
                    src={Images.path.dayswapper}
                    alt="logo"
                  />
                  <p className="platfrm-txt">DAYSWAPPERS</p>
                </div>
                <div className="ds-flex tm-border">
                  <div>
                    <p className="sect4-context">Total DaySwappers</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.users}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Liquid Reward</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.totalLiquidRewards}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total TimeAlly Rewards</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.totalTimeAllyRewards}
                    </p>
                  </div>
                </div>
                <div className="ds-flex tm-border">
                  <div>
                    <p className="sect4-context">Active Users </p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.activeUsers}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">KYC users</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.kycUsers}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">White Belt</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.whiteBelt}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Yellow Belt </p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.yellowBelt}
                    </p>
                  </div>
                </div>
                <div className="ds-flex tm-border">
                  <div>
                    <p className="sect4-context">Orange Belt </p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.orangeBelt}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Green Belt</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.greenBelt}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Blue Belt</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.blueBelt}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Brown Belt</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.brownBelt}
                    </p>
                  </div>
                </div>
                <div className="dayswappr-border-flex">
                  <div className="dayswapper-box">
                    <p className="sect4-context">Red Belt</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.redBelt}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Black Belt</p>
                    <p className="sect4-value">
                      {this.state.dayswappers.data.blackBelt}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* Second row platforms */}
          <Row>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo4"
                    src={Images.path.swaal}
                    alt="logo"
                  />
                  <p className="platfrm-txt"> SWAPPERS WALL </p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Power Tokens this month</p>
                    <p className="sect4-value-swal">
                      {this.state.swapperswall.data.powertokens}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Clubs</p>
                    <p className="sect4-value-swal">
                      {this.state.swapperswall.data.clubs}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Circles</p>
                    <p className="sect4-value-swal">
                      {this.state.swapperswall.data.circles}
                    </p>
                  </div>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Pages</p>
                    <p className="sect4-value-swal">
                      {this.state.swapperswall.data.pages}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Swappers</p>
                    <p className="sect4-value-swal">
                      {this.state.swapperswall.data.swappers}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Active Users</p>
                    <p className="sect4-value-swal">
                      {this.state.swapperswall.data.activeUsers}
                    </p>
                  </div>
                </div>
                <div className="swapper-center">
                  <div>
                    <p className="sect4-context">Media Uploads</p>
                    <p className="sect4-value">
                      {this.state.swapperswall.data.uploads}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo"
                    src={Images.path.blocklogy}
                    alt="logo"
                  />
                  <p className="platfrm-txt">ERASWAP ACADEMY </p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">User Counts</p>
                    <p className="sect4-value-swal">
                      {this.state.eraswapAcademy.data.users}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Courses</p>
                    <p className="sect4-value-swal">
                      {this.state.eraswapAcademy.data.courses}
                    </p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Total ES Deposited</p>
                    <p className="sect4-value">
                      {this.state.eraswapAcademy.data.deposits}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Users Studying Count</p>
                    <p className="sect4-value">
                      {this.state.eraswapAcademy.data.usersStuding}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo4"
                    src={Images.path.buzcafe}
                    alt="logo"
                  />
                  <p className="platfrm-txt">BUZCAFE</p>
                </div>
                <div className="buz-flex-border">
                  <div>
                    <p className="sect4-context">Total Users</p>
                    <p className="sect4-value-swal">
                      {this.state.buzcafe.data.users}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Shops</p>
                    <p className="sect4-value-swal">
                      {this.state.buzcafe.data.shops}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Deposits</p>
                    <p className="sect4-value-swal">
                      {this.state.buzcafe.data.deposits}
                    </p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Total Withdrawal</p>
                    <p className="sect4-value">
                      {this.state.buzcafe.data.withdrawals}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Internal Transactions</p>
                    <p className="sect4-value">
                      {this.state.buzcafe.data.internalTransactions}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* Third row platforms */}
          <Row>
            <Col sm={6}></Col>
            <Col sm={3}></Col>
            <Col sm={3}></Col>
          </Row>
          {/* Fourth row platforms */}
          <Row>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo4"
                    src={Images.path.betdeex}
                    alt="logo"
                  />
                  <p className="platfrm-txt">BETDEEX </p>
                </div>
                <div className="bet-flex-border">
                  <div>
                    <p className="sect4-context">Total Number of Events</p>
                    <p className="sect4-value-swal">
                      {this.state.betdeex.data.events}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Total Number of Predictors</p>
                    <p className="sect4-value-swal">
                      {this.state.betdeex.data.predictors}
                    </p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Total ES volume predicted </p>
                    <p className="sect4-context">on BetDeEx</p>
                    <p className="sect4-value">
                      {this.state.betdeex.data.esVolumePredicted}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Highest Prediction </p>
                    <p className="sect4-context">on BetDeEx</p>
                    <p className="sect4-value">
                      {this.state.betdeex.data.highestPrediction}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Average Prediction </p>
                    <p className="sect4-context">on BetDeEx</p>
                    <p className="sect4-value">
                      {this.state.betdeex.data.averagePrediction}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo-5"
                    src={Images.path.computeex}
                    alt="logo"
                  />
                  <p className="platfrm-txt"> COMPUTEEX</p>
                </div>
                <div className="compute-flex-border">
                  <div>
                    <p className="sect4-context">
                      Total Number of Transactions
                    </p>
                    <p className="sect4-value-swal">
                      {this.state.computeex.data.totalTransactions}
                    </p>
                  </div>
                </div>
                <div className="swapper-center">
                  <div>
                    <p className="sect4-context">Total Volume</p>
                    <p className="sect4-value">
                      {this.state.computeex.data.totalVolume}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo"
                    src={Images.path.charitylogo}
                    alt="logo"
                  />
                  <p className="platfrm-txt">CHARITYDAPP </p>
                  <p className="platfrm-txt">(YET TO GO LIVE) </p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Number of Users</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of organisations </p>
                    <p className="sect4-value-swal">0 applied</p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Total Charity</p>
                    <p className="sect4-value">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Org rewarded</p>
                    <p className="sect4-value">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">TFC Generated</p>
                    <p className="sect4-value">0 </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo"
                    src={Images.path.kycdapplogo}
                    alt="logo"
                  />
                  <p className="platfrm-txt">KYCDAPP </p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Number of Level 1 KYC</p>
                    <p className="sect4-value-swal">
                      {this.state.kycDapp.data.levelOneCount}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Level 2 KYC</p>
                    <p className="sect4-value-swal">
                      {this.state.kycDapp.data.levelTwoCount}
                    </p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Number of Level 3 KYC</p>
                    <p className="sect4-value">
                      {this.state.kycDapp.data.levelThreeCount}
                    </p>
                  </div>
                  <div>
                    <p className="sect4-context">All Platform KYCs</p>
                    <p className="sect4-value">
                      {this.state.kycDapp.data.allPlatformKycs}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo6"
                    src={Images.path.Coupondapp}
                    alt="logo"
                  />
                  <p className="platfrm-txt">COUPONDAPP </p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Claimed ES</p>
                    <p className="sect4-value-swal">0 ES</p>
                  </div>
                  <div>
                    <p className="sect4-context">Withdrawn ES</p>
                    <p className="sect4-value-swal">0 ES</p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Number of Users</p>
                    <p className="sect4-value">0 Users</p>
                  </div>
                  <div>
                    <p className="sect4-context">TFC Generated</p>
                    <p className="sect4-value">0 </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo-5"
                    src={Images.path.computeex}
                    alt="logo"
                  />
                  <p className="platfrm-txt">(YET TO GO LIVE) </p>
                </div>
                <div className="compute-flex-border">
                  <div>
                    <p className="sect4-context">
                      Total number of Transactions
                    </p>
                    <p className="sect4-value-swal">0 events</p>
                  </div>
                </div>
                <div className="swapper-center">
                  <div>
                    <p className="sect4-context">Total Volume</p>
                    <p className="sect4-value">0 ES</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* fifth row platforms */}
          <Row>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo2"
                    src={Images.path.renting}
                    alt="logo"
                  />
                  <p className="platfrm-txt">RENTINGDAPP</p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Number of Users</p>
                    <p className="sect4-value-swal">0 Users</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Lenders </p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Transactions</p>
                    <p className="sect4-value">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Objects Rented</p>
                    <p className="sect4-value">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">TFC Generated</p>
                    <p className="sect4-value">0 </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo2"
                    src={Images.path.booklogo}
                    alt="logo"
                  />
                  <p className="platfrm-txt">BOOKINGDAPP </p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Number of Events</p>
                    <p className="sect4-value-swal">6 events</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Tickets</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">TFC Generated</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Number Of Organizers</p>
                    <p className="sect4-value">0 </p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Users</p>
                    <p className="sect4-value">0</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo6"
                    src={Images.path.poolingdapplogo}
                    alt="logo"
                  />
                  <p className="platfrm-txt">POOLINGDAPP </p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Transactions</p>
                    <p className="sect4-value-swal">0 ES</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Tickets</p>
                    <p className="sect4-value-swal">0 ES</p>
                  </div>
                  <div>
                    <p className="sect4-context">Vehicle Owners</p>
                    <p className="sect4-value">0 Users</p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Number Of Rides</p>
                    <p className="sect4-value">0 </p>
                  </div>
                  <div>
                    <p className="sect4-context">TFC Generated</p>
                    <p className="sect4-value">0 </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo4"
                    src={Images.path.curedapplogo}
                    alt="logo"
                  />
                  <p className="platfrm-txt">CUREDAPP </p>
                </div>
                <div className="bet-flex-border">
                  <div>
                    <p className="sect4-context">Equipments</p>
                    <p className="sect4-value-swal">0 </p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Doctors</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Cases Solved</p>
                    <p className="sect4-value-swal">0 </p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">Number Of Users</p>
                    <p className="sect4-value">0 </p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Cetificates</p>
                    <p className="sect4-value">0 </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo2"
                    src={Images.path.faithminus}
                    alt="logo"
                  />
                  <p className="platfrm-txt">FAITH MINUS</p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Cases Solved</p>
                    <p className="sect4-value-swal">0 events</p>
                  </div>
                  <div>
                    <p className="sect4-context">Cases Pending</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Curators</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Transactions</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Organizations rewarded</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">TFC Generated</p>
                    <p className="sect4-value">0 </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo2"
                    src={Images.path.dateswappr}
                    alt="logo"
                  />
                  <p className="platfrm-txt">DATE SWAPPERS</p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Number of Meet Ups</p>
                    <p className="sect4-value-swal">0 meetups</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Users</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Transactions</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Trips</p>
                    <p className="sect4-value-swal">0</p>
                  </div>
                </div>
                <div className="swwall-border-flex">
                  <div>
                    <p className="sect4-context">ES Withdrawn</p>
                    <p className="sect4-value">0 </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo6"
                    src={Images.path.networklogo}
                    alt="logo"
                  />
                  <p className="platfrm-txt">ERA SWAP NETWORK </p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">
                      Number of Transaction (24 hrs)
                    </p>
                    <p className="sect4-value-swal">0 txn</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Nodes</p>
                    <p className="sect4-value-swal">0 nodes</p>
                  </div>
                  <div>
                    <p className="sect4-context">Current Block Height</p>
                    <p className="sect4-value">0</p>
                  </div>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Block Number</p>
                    <p className="sect4-value">0 </p>
                  </div>
                  <div>
                    <p className="sect4-context">Last Block Sealer</p>
                    <p className="sect4-value">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Age</p>
                    <p className="sect4-value">0 secs ago</p>
                  </div>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Gas Used</p>
                    <p className="sect4-value">0% </p>
                  </div>
                  <div>
                    <p className="sect4-context">Last Block Hash</p>
                    <p className="sect4-value">-</p>
                  </div>

                  <div>
                    <p className="sect4-context">Time Stamp</p>
                    <p className="sect4-value">--/--/---- </p>
                  </div>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Total Proof of Stake (ESN)</p>
                    <p className="sect4-value">0</p>
                  </div>
                  <div>
                    <p className="sect4-context">Last Transaction Fee</p>
                    <p className="sect4-value">0</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="section4-border">
                <div className="flex-sect4-box">
                  <img
                    className="platfrm-logo2"
                    src={Images.path.guarantor}
                    alt="logo"
                  />
                  <p className="platfrm-txt">GUARANTOR</p>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Guarantees given</p>
                    <p className="sect4-value-swal">0 </p>
                  </div>
                  <div>
                    <p className="sect4-context">Withdrawn ES</p>
                    <p className="sect4-value-swal">0 ES </p>
                  </div>
                </div>
                <div className="swwall-flex-border">
                  <div>
                    <p className="sect4-context">Number of Guaranters</p>
                    <p className="sect4-value-swal">0 Users</p>
                  </div>
                  <div>
                    <p className="sect4-context">Number of Requestors</p>
                    <p className="sect4-value-swal">0 </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* sixth row platforms */}
          <Row>
            <Col sm={6}></Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Dashboard;
