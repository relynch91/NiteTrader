import { connect } from 'react-redux';
import StockGraph from './stockgraph';

const mapStateToProps = (state) => ({
    stock: thisStocksData
});

export default connect(mapStateToProps, null)(StockGraph)

const thisStocksData = {
  "Meta Data": {
    Information: "Daily Prices (open, high, low, close) and Volumes",
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
      "3. low": "120.8500",
      "4. close": "121.2300",
      "5. volume": "4412047",
    },
    "2020-05-06": {
      "1. open": "123.2400",
      "2. high": "124.0500",
      "3. low": "122.4100",
      "4. close": "123.1700",
      "5. volume": "3861081",
    },
    "2020-05-05": {
      "1. open": "123.3900",
      "2. high": "124.3200",
      "3. low": "122.4700",
      "4. close": "122.5800",
      "5. volume": "3897761",
    },
    "2020-05-04": {
      "1. open": "120.8200",
      "2. high": "121.9700",
      "3. low": "119.3910",
      "4. close": "121.6800",
      "5. volume": "4016551",
    },
    "2020-05-01": {
      "1. open": "123.1900",
      "2. high": "123.4700",
      "3. low": "121.3900",
      "4. close": "121.8700",
      "5. volume": "4923913",
    },
    "2020-04-30": {
      "1. open": "126.5200",
      "2. high": "127.2700",
      "3. low": "125.2200",
      "4. close": "125.5600",
      "5. volume": "6630032",
    },
  },
};
