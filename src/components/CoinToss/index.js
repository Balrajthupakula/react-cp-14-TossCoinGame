// Write your code here
import {Component} from 'react'
import './index.css'

const headImg="https://assets.ccbp.in/frontend/react-js/heads-img.png"
const tailImg="https://assets.ccbp.in/frontend/react-js/tails-img.png"

class CoinToss extends Component{
    state={tossResultImage:headImg,
            headsCount:0,
            tailsCount:0}

    onTossCoin=()=>{
        const{headsCount,tailsCount}=this.state
        const toss = Math.floor(Math.random() * 2)
            let tossImage = ''
            let latestHeadsCount = headsCount
            let latestTailsCount = tailsCount

            if (toss === 0) {
            tossImage = headImg
            latestHeadsCount += 1
            } else {
            tossImage = tailImg
            latestTailsCount += 1
            }
            this.setState({
            tossResultImage: tossImage,
            headsCount: latestHeadsCount,
            tailsCount: latestTailsCount,
            })

    }

    render(){
    const{tossResultImage,headsCount,tailsCount}=this.state
    const totalCount=headsCount+tailsCount
        return(
           
            <div className="main-container">
                <div className="game-container">
                    <h1 className="heading">Coin Toss Game</h1>
                    <p className="description">Heads (or) Tails</p>
                        <img src={tossResultImage} alt="toss result" className="toss-result-image" />
                    <button type="button" className="button" onClick={this.onTossCoin}>Toss Coin</button>
                    <div className="counts-container">
                    <p className="count">Total: {totalCount}</p>
                    <p className="count">Heads: {headsCount}</p>
                    <p className="count">Tails: {tailsCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoinToss