import { connect } from 'react-redux';
import StockGraph from './stockgraph';

const mapStateToProps = (state) => ({
  appl: [
    { name: "Mon", high: 4000, low: 2400 },
    { name: "Tues", high: 3000, low: 1398, amt: 2210, time: 3 },
    { name: "Wed", high: 9800, low: 2000, amt: 2290, time: 9 },
    { name: "Thur", high: 3908, low: 2750, amt: 2000, time: 10 },
    { name: "Fri", high: 4800, low: 2500, amt: 2181, time: 12 },
    { name: "Mon", high: 3800, low: 1220, amt: 2500, time: 16 },
    { name: "Tues", high: 4300, low: 3290, amt: 2100, time: 18 },
  ],
});

export default connect(mapStateToProps, null)(StockGraph)