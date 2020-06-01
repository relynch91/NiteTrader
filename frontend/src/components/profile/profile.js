import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stocks: ['aapl', 'tsla']
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
    }

    render() {
        if (this.state.stocks.length === 0) {
          return (<div>This user has no Stocks</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Stocks</h2>
                <ul>
                    {this.state.stocks.map(stock =>(<li>{stock}</li>))}
                </ul>
            </div>
          );}}
}

export default Profile;