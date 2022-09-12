// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossChange: 'heads', headsCount: 0, tailsCount: 0}

  tossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({tossChange: 'heads'})
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState({tossChange: 'tails'})
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }

  render() {
    const {tossChange, headsCount, tailsCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {tossChange === 'heads' ? (
            <img
              className="image"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          ) : (
            <img
              className="image"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}

          <button onClick={this.tossButton} className="button" type="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {headsCount + tailsCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
