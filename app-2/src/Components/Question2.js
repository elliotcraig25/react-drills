import React, {Component} from 'react'

class Question2 extends Component {
    constructor(){
        super()
        this.state = {
            iputArray: ['Spaghetti', 'Ice Cream', 'Sushi', 'Apple']
        }
    }
    
    

    render(){
        let listedArray = this.state.iputArray.map(
            (el, i)=> {
                return(
                    <div key={i}>
                        <h3>{el}</h3>
                    </div>
                )
            }
        )
        return (
            <div className="App">
                {listedArray}
            </div>
        )
    }
}

export default Question2