import React, {Component} from 'react'

class Question4 extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: '',
            passInput: ''
        }
        this.clickButton = this.clickButton.bind( this );
    }
    updateName(name){
        this.setState({
            nameInput: name
        })
    }
    updatePass(pass){
        this.setState({
            passInput: pass
        })
    }
    clickButton(){
        alert(`Name: ${this.state.nameInput} Pass: ${this.state.passInput}`)
    }
    render(){
        return (
            <div>
                <input onChange={(e)=>this.updateName(e.target.value)}/>
                <input onChange={(e)=>this.updatePass(e.target.value)}/>
                <button onClick={this.clickButton}>Login</button>
            </div>
        )
    }
}

export default Question4