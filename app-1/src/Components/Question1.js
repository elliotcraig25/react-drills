import React, {Component} from 'react'

class Question1 extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({
          userInput: val
        })
      }
    
    render(){
        return (
            <div>
                <input onChange={(e)=>this.handleChange(e.target.value)}/>
                <div>
                    {this.state.userInput}
                </div>
            </div>
        )
    }
}

export default Question1