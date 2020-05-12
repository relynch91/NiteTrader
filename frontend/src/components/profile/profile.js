import React from 'react';
// import TweetBox from '../tweets/tweet_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stocks: ['aapl', 'tsla']
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        // this.props.fetchUserTweets(this.props.currentUser.id);
    }

    // componentWillReceiveProps(newState) {
    //     this.setState({ tweets: newState.tweets });
    // }   
    
    render() {
        if (this.state.stocks.length === 0) {
          return (<div>This user has no Stocks</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Stocks</h2>
                <ul>
                    {this.state.stocks.map(stock =>(
                                <li>
                                    {stock}
                                </li>
                            )      
                        )}
                </ul>
              {/* {this.state.stocks.map(tweet => (
                <TweetBox key={tweet._id} text={tweet.text} />
              ))} */}
            </div>
          );
        }
      }
}

export default Profile;