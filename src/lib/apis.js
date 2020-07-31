const { baseUrl } = require('../config/config');

const ajax = async (url) => {
  return await fetch(url)
    .then((res) => res.json())
    .catch((err) => err);
};

export default class Apis {
  static fetchAddress = (address) => ajax(`${baseUrl}/address/${address}`);
  static fetchBlocks = (start = 0, length = 10) =>
    ajax(`${baseUrl}/block/?start=${start}&length=${length}`);
  static fetchBlock = (blockNumber) => ajax(`${baseUrl}/block/${blockNumber}`);
  static fetchTransactions = (start = 0, length = 10, blockNumber = null) => {
    console.log('blockNumber1', blockNumber);
    return ajax(
      `${baseUrl}/transaction/?start=${start}&length=${length}&blockNumber=${
        blockNumber || ''
      }`
    );
  };
  static fetchTransaction = (hash) => ajax(`${baseUrl}/transaction/${hash}`);
  static fetchTransactionsByAddress = (address, limit = 25) =>
    ajax(`${baseUrl}/transaction/address/${address}?limit=${limit}`);
  static fetchTransactionsInterval = () =>
    ajax(`${baseUrl}/transaction/range/interval`);
  static fetchTransactionsCount = () => ajax(`${baseUrl}/transaction/count`);
  static fetchBunches = (start = 0, length = 10) =>
    ajax(`${baseUrl}/bunch/?start=${start}&length=${length}`);
  static fetchBunch = (hash) => ajax(`${baseUrl}/bunch/${hash}`);
  static fetchNrtPlatforms = () => ajax(`${baseUrl}/nrt-platform/`);

  /********* dashboard apis *********/
  //third party
  static etherPriceUsd = () =>
    ajax(
      'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken'
    );
  static bitcoinCrowdFundPrice = () => ajax('https://blockchain.info/ticker');
  static ltcPriceUsd = () =>
    ajax('https://api.cryptonator.com/api/ticker/ltc-usd');

  //eraswap.technology
  static getESPrice = () =>
    ajax('https://eraswap.technology/probit/getESPrice');
  static esTotalSupply = () =>
    ajax('https://eraswap.technology/eraswap/esTotalSupply');
  static holdersOfEraSwap = () =>
    ajax('https://eraswap.technology/eraswap/holdersOfEraSwap');
  static luckPoolBal = () => ajax('https://eraswap.technology/nrt/luckPoolBal');
  static burnTokenBal = () =>
    ajax('https://eraswap.technology/nrt/burnTokenBal');
  static totalTokensBurned = () =>
    ajax('https://eraswap.technology/nrt/totalTokensBurned');
  static nrtFractions = () =>
    ajax('https://eraswap.technology/nrt/nrtFractions');
  static getNumberOfStakings = () =>
    ajax('https://eraswap.technology/timeally/getNumberOfStakings');
  static getStakingPlanStatistics = () =>
    ajax('https://eraswap.technology/timeally/getStakingPlanStatistics');
  static getPlatformDetailsAllTime = () =>
    ajax('https://eraswap.technology/timeally/getPlatformDetailsAllTime');
  static getNumberOfBets = () =>
    ajax('https://eraswap.technology/betdeex/getNumberOfBets');
  static getBettingDetails = () =>
    ajax('https://eraswap.technology/betdeex/getBettingDetails');
  static powerTokenDetails = () =>
    ajax('https://eraswap.technology/swapperswall/powerTokenDetails');
  static getTotalReward = () =>
    ajax('https://eraswap.technology/dayswappers/getTotalReward');
  static getCurrentNRTMonth = () =>
    ajax('https://eraswap.technology/nrt/getCurrentNRTMonth');

  //dayswappers
  static transactionSplits = () =>
    ajax('https://apis.dayswappers.com/userprofile/transaction_splits');
  static dayswappersOverview = () =>
    ajax('https://apis.dayswappers.com/userprofile/overview');

  //timeswappers
  static totalNoOfUser = () =>
    ajax('https://apis.timeswappers.com/api/userDashboard/totalNoOfUser');
  static totalNoOfFreelancerOrSeller = () =>
    ajax(
      'https://apis.timeswappers.com/api/userDashboard/totalNoOfFreelancerOrSeller'
    );
  static totalViewsOnProfile = () =>
    ajax('https://apis.timeswappers.com/api/userDashboard/totalViewsOnProfile');
  static totalNoOfVerifiedUser = () =>
    ajax(
      'https://apis.timeswappers.com/api/userDashboard/totalNoOfVerifiedUser'
    );
  static totalNoOfCertifiedUser = () =>
    ajax(
      'https://apis.timeswappers.com/api/userDashboard/totalNoOfCertifiedUser'
    );
  static totalNoOfDeposit = () =>
    ajax('https://apis.timeswappers.com/api/userDashboard/totalNoOfDeposit');
  static totalNoOfWithdraw = () =>
    ajax('https://apis.timeswappers.com/api/userDashboard/totalNoOfWithdraw');
  static totalJobsPosted = () =>
    ajax('https://apis.timeswappers.com/api/userDashboard/totalJobsPosted');
  static totalJobsDone = () =>
    ajax('https://apis.timeswappers.com/api/userDashboard/totalJobsDone');
  static TfcGenerated = () =>
    ajax('https://apis.timeswappers.com/api/userDashboard/TfcGenerated');

  //swapperswall
  static swapperswalletTotalFeeds = () =>
    ajax('https://apis.timeswappers.com/api/feedData/all-total');
  static swapperswallTopTenreceivers = () =>
    ajax('https://apis.timeswappers.com/api/tokensData/top-ten-receivers');

  //eraswap.academy
  static userscount = () => ajax('https://apis.eraswap.academy/api/userscount');
  static courses = () => ajax('https://apis.eraswap.academy/api/courses');
  static deposits = () => ajax('https://apis.eraswap.academy/api/deposits');
  static userstudying = () =>
    ajax('https://apis.eraswap.academy/api/userstudying');

  // buzcafe
  static buzcafeUserscount = () =>
    ajax('https://apis.buzcafe.com/api/fetch/users-count');
  static buzcafeShopscount = () =>
    ajax('https://apis.buzcafe.com/api/fetch/shops-count');
  static buzcafeDepositscount = () =>
    ajax('https://apis.buzcafe.com/api/fetch/deposits-count');
  static buzcafeWithdrawalscount = () =>
    ajax('https://apis.buzcafe.com/api/fetch/withdrawals-count');
  static buzcafeTransactionscount = () =>
    ajax('https://apis.buzcafe.com/api/fetch/transactions-count');
}
