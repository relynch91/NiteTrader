import { connect } from 'react-redux';
import StockGraph from './stockgraph';

const mapStateToProps = (state) => ({
    stock: thisStocksData,
    stockInfo: state.stocks,
    porfolio: null
});

export default connect(mapStateToProps, null)(StockGraph)

const thisStocksData = {
  "Meta Data": {
    "Information": "Daily Prices (open, high, low, close) and Volumes",
    "2. Symbol": "IBM",
    "Last Refreshed": "2020-05-14",
    "Output Size": "Compact",
    "Time Zone": "US/Eastern",
  },
  "Time Series (Daily)": {
    "2020-05-14": {
      "1. open": "114.5700",
      "2. high": "117.0900",
      "3. low": "111.8100",
      "4. close": "116.9500",
      "5. volume": "5255468",
    },
    "2020-05-12": {
      "1. open": "123.0100",
      "2. high": "124.3200",
      "3. low": "120.2600",
      "4. close": "120.2600",
      "5. volume": "4779635",
    },
    " 2020-05-11": {
      "1. open": "121.8100",
      "2. high": "123.4500",
      "3. low": "120.6700",
      "4. close": "122.5900",
      "5. volume": "3533382",
    },
    "2020-05-08": {
      "1. open": "122.6700",
      "2. high": "123.2300",
      "3. low": "121.0600",
      "4. close": "122.9900",
      "5. volume": "5002450",
    },
    "2020-05-07": {
      "1. open": "122.9800",
      "2. high": "123.2600",
      "3. low": "50.8500",
      "4. close": "70.2300",
      "5. volume": "4412047",
    }
  }
};
