import React from 'react';
import './profile.css';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class ProfileChart extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    let { getProfileValues, userId } = this.props;
    await getProfileValues(userId);
  }

  render() {
    let { profileValues } = this.props;
    console.log(profileValues);
    if (profileValues === 'undefined') {
      return (
        <div className='profile-graph-container'>
          <h1>Profile Chart</h1>
          <div>
            <h2>This is where the profile chart will be located.</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div className='profile-graph-container'>
          <AreaChart className='area-chart-container'
            width={550}
            height={400}
            data={profileValues}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="date" dy={10} />
            <YAxis className='profile-graph-yaxis' dataKey="value" 
              type="number" domain={['auto', 'auto']} />
            <Tooltip />
            <Area type="monotone" fill="black" dataKey="value" stroke="rgb(255, 158, 44)" dot={false} />
          </AreaChart>
        </div>
      )  
    }
  }
}

export default ProfileChart;