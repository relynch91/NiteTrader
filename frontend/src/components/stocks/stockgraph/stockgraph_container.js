import { connect } from 'react-redux';
import StockGraph from './stockgraph';

const mapStateToProps = (state) => ({
    stock: thisStocksData
});

export default connect(mapStateToProps, null)(StockGraph)

const thisStocksData = {
  "Meta Data": {
      Information: "Daily Prices (open, high, low, close) and Volumes",
      Symbol: "IBM",
      "Last Refreshed": "2020-05-14",
      "Output Size": "Compact",
      "Time Zone": "US/Eastern",
    },
  "Time Series": {
    "2020-05-14": {
      open: "114.5700",
      high: "117.0900",
      low: "111.8100",
      close: "116.9500",
      volume: "5255468",
    },
    "2020-05-13": {
      open: "119.9500",
      high: "119.9900",
      low: "114.8500",
      close: "115.7300",
      volume: "5850517",
    },
    "2020-05-12": {
      open: "140.0100",
      high: "124.3200",
      low: "120.2600",
      close: "120.2600",
      volume: "4779635",
    },
    "2020-05-11": {
      open: "100.0100",
      high: "150.3200",
      low: "115.2600",
      close: "130.2600",
      volume: "4779635",
    },
    "2020-05-10": {
      open: "130.0100",
      high: "170.3200",
      low: "120.2600",
      close: "140.2600",
      volume: "4779635",
    },
    "2020-05-9": {
      open: "110.0100",
      high: "110.3200",
      low: "90.2600",
      close: "100.2600",
      volume: "4779635",
    },
  },
};
