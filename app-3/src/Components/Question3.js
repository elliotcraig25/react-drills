import React, {Component} from 'react'

class Question3 extends Component {
    constructor(){
        super()
        this.state = {
            inputArray: ['Spaghetti', 'Ice Cream', 'Sushi', 'Apple'],
            filteredArray: [],
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }
    
    render(){
        let filteredTiles = this.state.inputArray.filter((item)=>{
            const {userInput}=this.state
            let searchLen = userInput.length
            if(userInput.toUpperCase()===item.slice(0, searchLen).toUpperCase()){
                return item
            }
        })
        
        let nameTiles = filteredTiles.map((el, i)=>{
            return (
                <div key={i}>
                    <h3>{el}</h3>
                </div>
            )
        })

        
       
        return(
            <div>
                <input onChange={(e)=>this.handleChange(e.target.value)} />
                {nameTiles}
            </div>
        )
    }
}

export default Question3